// InventarioTable.jsx
import { useState, useEffect } from "react";
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
import FullScreenNotification from "./FullScreenNotification";
import ResumenInventario from "./ResumenInventario";
import { useTranslation } from "react-i18next";

function InventarioTable({ departamento, user }) {
  const { t } = useTranslation();
  const [datos, setDatos] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [notificacion, setNotificacion] = useState(null);
  const [confirmarEliminacion, setConfirmarEliminacion] = useState(null);

  const ruta = collection(db, "departamentos", departamento, "equipos");

  const cargarDatos = async () => {
    const consulta = await getDocs(ruta);
    setDatos(
      consulta.docs
        .map((d) => ({
          ...d.data(),
          id: d.id,
          editado: false,
          editandoObservacion: false,
          estados: {
            mantener: parseInt(d.data().estados?.mantener) || 0,
            mejorar: parseInt(d.data().estados?.mejorar) || 0,
            reemplazar: parseInt(d.data().estados?.reemplazar) || 0,
          },
        }))
        .sort((a, b) => (a.sala || "").localeCompare(b.sala || ""))
    );
  };

  useEffect(() => {
    if (departamento) cargarDatos();
  }, [departamento]);

  const agregar = async () => {
    const nuevo = {
      sala: "",
      tipo: "",
      marca: "",
      fecha: new Date().toISOString().split("T")[0],
      observaciones: "",
      estados: { mantener: 0, mejorar: 0, reemplazar: 0 },
    };
    const ref = await addDoc(ruta, nuevo);
    setDatos((prev) =>
      [...prev, { ...nuevo, id: ref.id, editado: false, editandoObservacion: false }].sort((a, b) =>
        (a.sala || "").localeCompare(b.sala || "")
      )
    );
    mostrarNotificacion(t("addEquipment") + " ✅");
  };

  const mostrarNotificacion = (mensaje) => {
    setNotificacion(mensaje);
    setTimeout(() => setNotificacion(null), 1000);
  };

  const marcarEditado = (id, campo, valor) => {
    setDatos((prev) =>
      prev.map((d) =>
        d.id === id
          ? {
              ...d,
              [campo]: ["sala", "tipo", "marca", "fecha", "observaciones"].includes(campo)
                ? valor
                : d[campo],
              estados: ["mantener", "mejorar", "reemplazar"].includes(campo)
                ? { ...d.estados, [campo]: parseInt(valor) || 0 }
                : d.estados,
              editandoObservacion: campo === "editandoObservacion" ? valor : d.editandoObservacion,
              editado: true,
            }
          : d
      )
    );
  };

  const guardar = async (id) => {
    const equipo = datos.find((d) => d.id === id);
    if (!equipo) return;

    await updateDoc(doc(db, "departamentos", departamento, "equipos", id), {
      sala: equipo.sala,
      tipo: equipo.tipo,
      marca: equipo.marca,
      fecha: equipo.fecha,
      observaciones: equipo.observaciones,
      estados: {
        mantener: equipo.estados.mantener || 0,
        mejorar: equipo.estados.mejorar || 0,
        reemplazar: equipo.estados.reemplazar || 0,
      },
    });

    setDatos((prev) =>
      prev.map((d) =>
        d.id === id ? { ...d, editado: false, editandoObservacion: false } : d
      ).sort((a, b) => (a.sala || "").localeCompare(b.sala || ""))
    );

    mostrarNotificacion(t("saved") + " ✅");
  };

  const confirmarEliminar = (id) => setConfirmarEliminacion(id);

  const eliminar = async () => {
    await deleteDoc(doc(db, "departamentos", departamento, "equipos", confirmarEliminacion));
    setDatos((prev) => prev.filter((d) => d.id !== confirmarEliminacion));
    mostrarNotificacion(t("deleted") + " ✅");
    setConfirmarEliminacion(null);
  };

  const calcularTotal = () =>
    datos.reduce(
      (suma, item) =>
        suma +
        Object.values(item.estados || {}).reduce(
          (a, b) => a + (parseInt(b) || 0),
          0
        ),
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

  const filtrados = datos.filter((item) => {
    const texto = filtro.toLowerCase();
    return (
      (item.tipo || "").toLowerCase().includes(texto) ||
      (item.marca || "").toLowerCase().includes(texto) ||
      (item.observaciones || "").toLowerCase().includes(texto) ||
      (item.sala || "").toLowerCase().includes(texto)
    );
  });

  return (
    <div style={{ width: "100%", marginTop: "2rem", padding: "1rem", overflowX: "auto" }}>
      <h2 style={{ color: "#050576", textAlign: "center", fontSize: "clamp(1.2rem, 3vw, 2rem)" }}>
        {t(`departments.${departamento}`)}
      </h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center", alignItems: "center", marginBottom: "1rem" }}>
        <button onClick={agregar} style={btnStyle}>+ {t("addEquipment")}</button>
        <InfoDepartamento departamento={departamento} user={user} />
        <input
          type="text"
          placeholder={t("search")}
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          style={{ ...inputEstilo, minWidth: "180px", flex: "1 1 250px" }}
        />
      </div>

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "1000px" }}>
          <thead>
            <tr style={{ backgroundColor: "#e0e0e0" }}>
              {["room", "type", "brand", "date", "maintain", "improve", "replace", "notes", "quantity", "save", "delete"].map((clave) => (
                <th key={clave} style={thStyle}>{t(clave)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtrados.map((item) => {
              const cantidad = Object.values(item.estados).reduce((a, b) => a + (parseInt(b) || 0), 0);
              return (
                <tr key={item.id} style={{ fontSize: "clamp(0.8rem, 1.2vw, 1rem)" }}>
                  {["sala", "tipo", "marca"].map((campo) => (
                    <td key={campo} style={tdStyle}>
                      <input
                        style={inputEstilo}
                        value={item[campo]}
                        onChange={(e) => marcarEditado(item.id, campo, e.target.value)}
                        placeholder={campo}
                      />
                    </td>
                  ))}
                  <td style={tdStyle}>{item.fecha}</td>
                  {["mantener", "mejorar", "reemplazar"].map((estado) => (
                    <td key={estado} style={tdStyle}>
                      <input
                        type="number"
                        min={0}
                        style={{
                          ...inputEstilo,
                          backgroundColor: getBgColor(estado),
                          color: "white",
                          fontWeight: "bold",
                          width: "60px",
                        }}
                        value={item.estados[estado]}
                        onChange={(e) => {
                          const val = parseInt(e.target.value);
                          if (val >= 0) marcarEditado(item.id, estado, val);
                        }}
                      />
                    </td>
                  ))}
                  <td style={tdStyle}>
                    {item.editandoObservacion ? (
                      <>
                        <textarea
                          value={item.observaciones}
                          onChange={(e) => marcarEditado(item.id, "observaciones", e.target.value)}
                          placeholder={t("enterNotes")}
                          style={{
                            width: "100%",
                            minHeight: "60px",
                            padding: "6px",
                            borderRadius: "6px",
                            border: "1px solid #ccc",
                            resize: "none",
                            fontFamily: "inherit",
                          }}
                        />
                        <button
                          onClick={() => guardar(item.id)}
                          style={{
                            ...guardarBtn,
                            marginTop: "6px",
                            opacity: item.editado ? 1 : 0.4,
                            cursor: item.editado ? "pointer" : "not-allowed",
                          }}
                          disabled={!item.editado}
                          title={!item.editado ? t("errorNoQuantity") : ""}
                        >
                          💾 {t("save")}
                        </button>
                      </>
                    ) : (
                      <>
                        <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>
                          {item.observaciones?.trim() ? item.observaciones : t("noObservations")}
                        </p>
                        <button
                          onClick={() => marcarEditado(item.id, "editandoObservacion", true)}
                          style={{ ...btnStyle, marginTop: "6px" }}
                        >
                          ✍️ {t("edit")}
                        </button>
                      </>
                    )}
                  </td>
                  <td style={tdStyle}><strong>{cantidad}</strong></td>
                  <td style={tdStyle}>
                    <button
                      onClick={() => guardar(item.id)}
                      style={{
                        ...guardarBtn,
                        opacity: item.editado ? 1 : 0.4,
                        cursor: item.editado ? "pointer" : "not-allowed",
                      }}
                      disabled={!item.editado}
                      title={!item.editado ? t("errorNoQuantity") : ""}
                    >
                      💾
                    </button>
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

      {notificacion && (
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
  padding: "6px",
  fontSize: "1rem",
  borderRadius: "6px",
  border: "1px solid #ccc",
  textAlign: "center",
  fontFamily: "inherit",
  width: "100%",
};

const thStyle = {
  padding: "8px",
  fontSize: "0.9rem",
  textAlign: "center",
  whiteSpace: "nowrap",
};

const tdStyle = {
  padding: "8px",
  textAlign: "center",
  verticalAlign: "middle",
};

const btnStyle = {
  padding: "8px 16px",
  fontSize: "1rem",
  borderRadius: "6px",
  backgroundColor: "#050576",
  color: "#fff",
  border: "none",
  cursor: "pointer",
};

const guardarBtn = {
  ...btnStyle,
  backgroundColor: "#2e7d32",
};

const delBtn = {
  ...btnStyle,
  backgroundColor: "#f44336",
};

export default InventarioTable;
