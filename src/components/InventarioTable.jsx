import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase-config";
import InfoDepartamento from "./InfoDepartamento";
import { useTranslation } from "react-i18next";
import FullScreenNotification from "./FullScreenNotification";
import ResumenInventario from "./ResumenInventario";

function InventarioTable({ departamento }) {
  const [datos, setDatos] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [notificacion, setNotificacion] = useState(null);
  const [confirmarEliminacion, setConfirmarEliminacion] = useState(null);
  const { t } = useTranslation();

  const ruta = collection(db, "departamentos", departamento, "equipos");

  const cargarDatos = async () => {
    const consulta = await getDocs(ruta);
    setDatos(
      consulta.docs.map((d) => ({
        ...d.data(),
        id: d.id,
        editado: false,
        estados: d.data().estados || { mantener: "", mejorar: "", reemplazar: "" },
      }))
    );
  };

  useEffect(() => {
    if (departamento) {
      cargarDatos();
    }
  }, [departamento]);

  const agregar = async () => {
    const nuevo = {
      tipo: "",
      marca: "",
      fecha: new Date().toISOString().split("T")[0],
      observaciones: "",
      estados: { mantener: "", mejorar: "", reemplazar: "" },
    };
    const ref = await addDoc(ruta, nuevo);
    setDatos([...datos, { ...nuevo, id: ref.id }]);
    mostrarNotificacion(`${t("addEquipment")} ✅`);
  };

  const mostrarNotificacion = (mensaje) => {
    setNotificacion(mensaje);
    setTimeout(() => setNotificacion(null), 2000);
  };

  const marcarEditado = (id, campo, valor) => {
    setDatos((prev) =>
      prev.map((d) =>
        d.id === id ? { ...d, [campo]: valor, editado: true } : d
      )
    );
  };

  const marcarEstado = (id, estado, valor) => {
    setDatos((prev) =>
      prev.map((d) =>
        d.id === id
          ? {
              ...d,
              estados: { ...d.estados, [estado]: valor },
              editado: true,
            }
          : d
      )
    );
  };

  const guardar = async (id) => {
    const ref = doc(db, "departamentos", departamento, "equipos", id);
    const equipo = datos.find((d) => d.id === id);
    await updateDoc(ref, {
      tipo: equipo.tipo,
      marca: equipo.marca,
      fecha: equipo.fecha,
      observaciones: equipo.observaciones,
      estados: {
        mantener: parseInt(equipo.estados.mantener) || 0,
        mejorar: parseInt(equipo.estados.mejorar) || 0,
        reemplazar: parseInt(equipo.estados.reemplazar) || 0,
      },
    });
    setDatos((prev) =>
      prev.map((d) => (d.id === id ? { ...d, editado: false } : d))
    );
    mostrarNotificacion(t("saved"));
  };

  const confirmarEliminar = (id) => {
    setConfirmarEliminacion(id);
  };

  const eliminar = async () => {
    await deleteDoc(doc(db, "departamentos", departamento, "equipos", confirmarEliminacion));
    setDatos((prev) => prev.filter((d) => d.id !== confirmarEliminacion));
    mostrarNotificacion(t("deleted"));
    setConfirmarEliminacion(null);
  };

  const calcularTotal = () =>
    datos.reduce(
      (suma, item) =>
        suma +
        Object.values(item.estados || {}).reduce((a, b) => a + (parseInt(b) || 0), 0),
      0
    );

  const getBgColor = (estado) => {
    switch (estado) {
      case "mantener": return "#4CAF50";
      case "mejorar": return "#FF9800";
      case "reemplazar": return "#F44336";
      default: return "white";
    }
  };

  const filtrados = datos.filter(item => {
    const texto = filtro.toLowerCase();
    return (
      item.tipo.toLowerCase().includes(texto) ||
      item.marca.toLowerCase().includes(texto) ||
      item.observaciones.toLowerCase().includes(texto)
    );
  });

  return (
    <div style={{ width: "100%", marginTop: "2rem", overflowX: "auto", padding: "1rem" }}>
      <h2 style={{ color: "#050576", textAlign: "center", fontSize: "clamp(1.2rem, 3vw, 2rem)" }}>
        {t(`departments.${departamento}`)}
      </h2>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "1rem"
      }}>
        <button onClick={agregar} style={btnStyle}>+ {t("addEquipment")}</button>
        <InfoDepartamento departamento={departamento} />
        <input
          type="text"
          placeholder={t("search")}
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          style={{ ...inputEstilo, minWidth: "180px", flex: "1 1 250px" }}
        />
      </div>

      <div style={{ overflowX: "auto" }}>
        <table style={{
          width: "100%",
          borderCollapse: "collapse",
          minWidth: "1000px",
          tableLayout: "fixed"
        }}>
          <thead>
            <tr style={{ backgroundColor: "#e0e0e0" }}>
              <th style={thStyle}>{t("type")}</th>
              <th style={thStyle}>{t("brand")}</th>
              <th style={thStyle}>{t("date")}</th>
              <th style={thStyle}>{t("maintain")}</th>
              <th style={thStyle}>{t("improve")}</th>
              <th style={thStyle}>{t("replace")}</th>
              <th style={thStyle}>{t("notes")}</th>
              <th style={thStyle}>{t("quantity")}</th>
              <th style={thStyle}>{t("confirm")}</th>
              <th style={thStyle}>{t("delete")}</th>
            </tr>
          </thead>
          <tbody>
            {filtrados.map((item) => {
              const cantidad =
                (parseInt(item.estados.mantener) || 0) +
                (parseInt(item.estados.mejorar) || 0) +
                (parseInt(item.estados.reemplazar) || 0);
              return (
                <tr key={item.id} style={{ fontSize: "clamp(0.8rem, 1.2vw, 1rem)" }}>
                  <td style={tdStyle}><input style={inputEstilo} value={item.tipo} onChange={(e) => marcarEditado(item.id, "tipo", e.target.value)} /></td>
                  <td style={tdStyle}><input style={inputEstilo} value={item.marca} onChange={(e) => marcarEditado(item.id, "marca", e.target.value)} /></td>
                  <td style={{ ...tdStyle, textAlign: "center" }}>
                    <span style={{ fontSize: "clamp(0.8rem, 1vw, 1rem)", display: "inline-block" }}>{item.fecha}</span>
                  </td>
                  {["mantener", "mejorar", "reemplazar"].map((estado) => (
                    <td key={estado} style={tdStyle}>
                      <input
                        type="number"
                        style={{
                          ...inputEstilo,
                          backgroundColor: getBgColor(estado),
                          color: "white",
                          fontSize: "1.1rem",
                          fontWeight: "bold",
                        }}
                        value={item.estados[estado] === 0 ? "" : item.estados[estado] || ""}
                        onChange={(e) => marcarEstado(item.id, estado, e.target.value)}
                      />
                    </td>
                  ))}
                  <td style={tdStyle}><input style={inputEstilo} value={item.observaciones} onChange={(e) => marcarEditado(item.id, "observaciones", e.target.value)} /></td>
                  <td style={{ ...tdStyle, textAlign: "center", fontWeight: "bold" }}>{cantidad}</td>
                  <td style={tdStyle}>
                    {item.editado && (
                      <button onClick={() => guardar(item.id)} style={guardarBtn}>💾</button>
                    )}
                  </td>
                  <td style={tdStyle}>
                    <button onClick={() => confirmarEliminar(item.id)} style={delBtn}>🗑️</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p style={{ textAlign: "right", marginTop: "10px", fontWeight: "bold" }}>
        {t("total")}: {calcularTotal()}
      </p>

      <ResumenInventario datos={datos} />

      {notificacion && typeof notificacion === "string" && (
        <FullScreenNotification mensaje={notificacion} cerrar={() => setNotificacion(null)} />
      )}

      {confirmarEliminacion && (
        <FullScreenNotification
          mensaje={t("deleteConfirmation")}
          confirmar={eliminar}
          cancelar={() => setConfirmarEliminacion(null)}
          esConfirmacion
        />
      )}
    </div>
  );
}

const inputEstilo = {
  padding: "8px",
  fontSize: "clamp(0.8rem, 1vw, 1rem)",
  borderRadius: "6px",
  border: "1px solid #ccc",
  maxWidth: "160px",
  width: "100%",
  fontFamily: "Segoe UI, Tahoma, sans-serif",
  textAlign: "center",
  boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
  outlineColor: "#050576",
};

const thStyle = {
  padding: "8px",
  minWidth: "90px",
  fontSize: "clamp(0.8rem, 1vw, 1rem)",
  wordBreak: "break-word",
  textAlign: "center",
};

const tdStyle = {
  padding: "8px",
  minWidth: "90px",
  textAlign: "center",
  verticalAlign: "middle",
  wordBreak: "break-word",
};

const btnStyle = {
  padding: "10px 20px",
  fontSize: "1rem",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  backgroundColor: "#050576",
  color: "white",
  fontFamily: "Segoe UI, Tahoma, sans-serif",
};

const guardarBtn = {
  ...btnStyle,
  backgroundColor: "#2e7d32",
  padding: "8px 12px",
  fontSize: "1.2rem",
};

const delBtn = {
  ...btnStyle,
  backgroundColor: "#f44336",
  padding: "8px 12px",
};

export default InventarioTable;
