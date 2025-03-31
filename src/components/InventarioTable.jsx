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
import toast from "react-hot-toast";

function InventarioTable({ departamento }) {
  const [datos, setDatos] = useState([]);
  const [filtro, setFiltro] = useState("");
  const { t } = useTranslation();

  const ruta = collection(db, "departamentos", departamento, "equipos");

  const cargarDatos = async () => {
    const consulta = await getDocs(ruta);
    setDatos(
      consulta.docs.map((d) => ({
        ...d.data(),
        id: d.id,
        estados: d.data().estados || { mantener: 0, mejorar: 0, reemplazar: 0 },
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
      complementos: "",
      fecha: new Date().toISOString().split("T")[0],
      observaciones: "",
      estados: { mantener: 0, mejorar: 0, reemplazar: 0 },
    };
    const ref = await addDoc(ruta, nuevo);
    setDatos([...datos, { ...nuevo, id: ref.id }]);
    toast.success(`${t("addEquipment")} ✅`);
  };

  const actualizar = async (id, campo, valor) => {
    const ref = doc(db, "departamentos", departamento, "equipos", id);
    await updateDoc(ref, { [campo]: valor });
    setDatos((prev) => prev.map((d) => (d.id === id ? { ...d, [campo]: valor } : d)));
  };

  const actualizarEstado = async (id, estado, valor) => {
    const ref = doc(db, "departamentos", departamento, "equipos", id);
    const nuevo = {
      ...datos.find((d) => d.id === id).estados,
      [estado]: parseInt(valor, 10) || 0,
    };
    await updateDoc(ref, { estados: nuevo });
    setDatos((prev) =>
      prev.map((d) => (d.id === id ? { ...d, estados: nuevo } : d))
    );
  };

  const eliminar = async (id) => {
    await deleteDoc(doc(db, "departamentos", departamento, "equipos", id));
    setDatos(datos.filter((d) => d.id !== id));
    toast.success(`${t("delete")} ✅`);
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
      item.complementos.toLowerCase().includes(texto) ||
      item.observaciones.toLowerCase().includes(texto)
    );
  });

  return (
    <div style={{ width: "100%", marginTop: "2rem" }}>
      <h2 style={{ color: "#050576" }}>{t(`departments.${departamento}`)}</h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "1rem", flexWrap: "wrap" }}>
        <button onClick={agregar} style={btnStyle}>+ {t("addEquipment")}</button>
        <InfoDepartamento departamento={departamento} mostrarAlerta={toast.success} />
        <input
          type="text"
          placeholder={t("search")}
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          style={{ ...inputEstilo, minWidth: "250px" }}
        />
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#e0e0e0" }}>
            <th>{t("type")}</th>
            <th>{t("brand")}</th>
            <th>{t("accessories")}</th>
            <th>{t("date")}</th>
            <th>{t("maintain")}</th>
            <th>{t("improve")}</th>
            <th>{t("replace")}</th>
            <th>{t("notes")}</th>
            <th>{t("delete")}</th>
          </tr>
        </thead>
        <tbody>
          {filtrados.map((item) => (
            <tr key={item.id}>
              <td>
                <input style={inputEstilo} value={item.tipo} onChange={(e) => actualizar(item.id, "tipo", e.target.value)} />
              </td>
              <td>
                <input style={inputEstilo} value={item.marca} onChange={(e) => actualizar(item.id, "marca", e.target.value)} />
              </td>
              <td>
                <input style={inputEstilo} value={item.complementos} onChange={(e) => actualizar(item.id, "complementos", e.target.value)} />
              </td>
              <td>{item.fecha}</td>
              <td>
                <input
                  type="number"
                  min="0"
                  style={{ ...inputEstilo, backgroundColor: getBgColor("mantener"), color: "white", fontSize: "1.2rem", fontWeight: "bold" }}
                  value={item.estados.mantener}
                  onChange={(e) => actualizarEstado(item.id, "mantener", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  min="0"
                  style={{ ...inputEstilo, backgroundColor: getBgColor("mejorar"), color: "white", fontSize: "1.2rem", fontWeight: "bold" }}
                  value={item.estados.mejorar}
                  onChange={(e) => actualizarEstado(item.id, "mejorar", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  min="0"
                  style={{ ...inputEstilo, backgroundColor: getBgColor("reemplazar"), color: "white", fontSize: "1.2rem", fontWeight: "bold" }}
                  value={item.estados.reemplazar}
                  onChange={(e) => actualizarEstado(item.id, "reemplazar", e.target.value)}
                />
              </td>
              <td>
                <input style={inputEstilo} value={item.observaciones} onChange={(e) => actualizar(item.id, "observaciones", e.target.value)} />
              </td>
              <td>
                <button
                  onClick={() => confirm(t("deleteConfirmation")) && eliminar(item.id)}
                  style={delBtn}
                >🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{ textAlign: "right", marginTop: "10px", fontWeight: "bold" }}>
        {t("total")}: {calcularTotal()}
      </p>
    </div>
  );
}

const inputEstilo = {
  padding: "10px",
  fontSize: "1.1rem",
  borderRadius: "6px",
  border: "1px solid #ccc",
  maxWidth: "200px",
  width: "100%",
  fontFamily: "Segoe UI, Tahoma, sans-serif",
  textAlign: "center",
  boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
  outlineColor: "#050576",
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

const delBtn = {
  ...btnStyle,
  backgroundColor: "#f44336",
};

export default InventarioTable;