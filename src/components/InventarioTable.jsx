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
import AlertMessage from "./AlertMessage";
import InfoDepartamento from "./InfoDepartamento";
import { useTranslation } from "react-i18next";

function InventarioTable({ departamento }) {
  const [datos, setDatos] = useState([]);
  const [mensaje, setMensaje] = useState("");
  const { t } = useTranslation();

  const ruta = collection(db, "departamentos", departamento, "equipos");

  const cargarDatos = async () => {
    const consulta = await getDocs(ruta);
    setDatos(consulta.docs.map((d) => ({ ...d.data(), id: d.id })));
  };

  useEffect(() => {
    if (departamento) {
      cargarDatos();
    }
  }, [departamento]);

  const mostrarAlerta = (msg) => {
    setMensaje(msg);
    setTimeout(() => setMensaje(""), 3000);
  };

  const agregar = async () => {
    const nuevo = {
      tipo: "",
      marca: "",
      complementos: "",
      estado: "unknown",
      fecha: new Date().toISOString().split("T")[0],
      cantidad: 1,
      observaciones: "",
    };
    const ref = await addDoc(ruta, nuevo);
    setDatos([...datos, { ...nuevo, id: ref.id }]);
    mostrarAlerta(`${t("addEquipment")} ✅`);
  };

  const actualizar = async (id, campo, valor) => {
    const ref = doc(db, "departamentos", departamento, "equipos", id);
    await updateDoc(ref, { [campo]: campo === "cantidad" ? parseInt(valor, 10) : valor });
    setDatos((prev) =>
      prev.map((d) => (d.id === id ? { ...d, [campo]: valor } : d))
    );
  };

  const eliminar = async (id) => {
    await deleteDoc(doc(db, "departamentos", departamento, "equipos", id));
    setDatos(datos.filter((d) => d.id !== id));
    mostrarAlerta(`${t("delete")} ✅`);
  };

  const getColor = (estado) => {
    switch (estado) {
      case "unknown": return "gray";
      case "replace": return "red";
      case "improve": return "orange";
      case "maintain": return "green";
      default: return "black";
    }
  };

  const calcularTotal = () =>
    datos.reduce((suma, item) => suma + (parseInt(item.cantidad, 10) || 0), 0);

  return (
    <div style={{ width: "100%", marginTop: "2rem" }}>
      <AlertMessage mensaje={mensaje} />

      <h2 style={{ color: "#050576" }}>{t(`departments.${departamento}`)}</h2>


      <div style={{ display: "flex", gap: "10px", marginBottom: "1rem" }}>
        <button onClick={agregar} style={btnStyle}>
          + {t("addEquipment")}
        </button>
        <InfoDepartamento departamento={departamento} mostrarAlerta={mostrarAlerta} />
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#e0e0e0" }}>
            <th>{t("type")}</th>
            <th>{t("brand")}</th>
            <th>{t("accessories")}</th>
            <th>{t("state")}</th>
            <th>{t("date")}</th>
            <th>{t("quantity")}</th>
            <th>{t("notes")}</th>
            <th>{t("delete")}</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((item) => (
            <tr key={item.id}>
              <td>
                <input
                  style={inputEstilo}
                  value={item.tipo}
                  onChange={(e) => actualizar(item.id, "tipo", e.target.value)}
                />
              </td>
              <td>
                <input
                  style={inputEstilo}
                  value={item.marca}
                  onChange={(e) => actualizar(item.id, "marca", e.target.value)}
                />
              </td>
              <td>
                <input
                  style={inputEstilo}
                  value={item.complementos}
                  onChange={(e) => actualizar(item.id, "complementos", e.target.value)}
                />
              </td>
              <td>
                <select
                  value={item.estado}
                  onChange={(e) => actualizar(item.id, "estado", e.target.value)}
                  style={{
                    ...selectEstilo,
                    backgroundColor: getColor(item.estado),
                  }}
                >
                  <option value="unknown">{t("unknown")}</option>
                  <option value="replace">{t("replace")}</option>
                  <option value="improve">{t("improve")}</option>
                  <option value="maintain">{t("maintain")}</option>
                </select>
              </td>
              <td>{item.fecha}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  style={inputEstilo}
                  value={item.cantidad}
                  onChange={(e) => actualizar(item.id, "cantidad", e.target.value)}
                />
              </td>
              <td>
                <input
                  style={inputEstilo}
                  value={item.observaciones}
                  onChange={(e) => actualizar(item.id, "observaciones", e.target.value)}
                />
              </td>
              <td>
                <button
                  onClick={() => {
                    if (confirm(t("deleteConfirmation"))) {
                      eliminar(item.id);
                    }
                  }}
                  style={delBtn}
                >
                  🗑️
                </button>
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
  fontSize: "1.05rem",
  borderRadius: "6px",
  border: "1px solid #ccc",
  maxWidth: "200px",
  width: "100%",
  fontFamily: "Segoe UI, Tahoma, sans-serif",
  textAlign: "center",
  boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
  outlineColor: "#050576",
};

const selectEstilo = {
  ...inputEstilo,
  color: "white",
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
