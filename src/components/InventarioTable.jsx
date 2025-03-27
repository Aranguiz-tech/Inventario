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

function InventarioTable({ departamento }) {
  const [datos, setDatos] = useState([]);
  const [mensaje, setMensaje] = useState("");

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
      estado: "Desconocido",
      fecha: new Date().toISOString().split("T")[0],
      cantidad: 1,
      observaciones: "",
    };
    const ref = await addDoc(ruta, nuevo);
    setDatos([...datos, { ...nuevo, id: ref.id }]);
    mostrarAlerta("Equipo agregado");
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
    mostrarAlerta("Equipo eliminado");
  };

  const getColor = (estado) => {
    switch (estado) {
      case "Desconocido": return "gray";
      case "Reemplazar": return "red";
      case "Mejorar": return "orange";
      case "Mantener": return "green";
      default: return "black";
    }
  };

  const calcularTotal = () =>
    datos.reduce((suma, item) => suma + (parseInt(item.cantidad, 10) || 0), 0);

  return (
    <div style={{ width: "100%", marginTop: "2rem" }}>
      <AlertMessage mensaje={mensaje} />

      <h2 style={{ color: "#050576" }}>{departamento}</h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "1rem" }}>
        <button onClick={agregar} style={btnStyle}>+ Agregar equipo</button>
        <InfoDepartamento departamento={departamento} mostrarAlerta={mostrarAlerta} />
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#e0e0e0" }}>
            <th>Tipo</th><th>Marca</th><th>Complementos</th><th>Estado</th>
            <th>Fecha</th><th>Cantidad</th><th>Observaciones</th><th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((item) => (
            <tr key={item.id}>
              <td><input value={item.tipo} onChange={(e) => actualizar(item.id, "tipo", e.target.value)} /></td>
              <td><input value={item.marca} onChange={(e) => actualizar(item.id, "marca", e.target.value)} /></td>
              <td><input value={item.complementos} onChange={(e) => actualizar(item.id, "complementos", e.target.value)} /></td>
              <td>
                <select
                  value={item.estado}
                  onChange={(e) => actualizar(item.id, "estado", e.target.value)}
                  style={{ backgroundColor: getColor(item.estado), color: "white" }}
                >
                  <option value="Desconocido">Desconocido</option>
                  <option value="Reemplazar">Reemplazar</option>
                  <option value="Mejorar">Mejorar</option>
                  <option value="Mantener">Mantener</option>
                </select>
              </td>
              <td>{item.fecha}</td>
              <td><input type="number" min="1" value={item.cantidad} onChange={(e) => actualizar(item.id, "cantidad", e.target.value)} /></td>
              <td><input value={item.observaciones} onChange={(e) => actualizar(item.id, "observaciones", e.target.value)} /></td>
              <td>
  <button
    onClick={() => {
      if (confirm("¿Seguro que deseas eliminar este equipo?")) {
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
        Total: {calcularTotal()}
      </p>
    </div>
  );
}

const btnStyle = {
  padding: "8px 15px",
  backgroundColor: "#050576",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const delBtn = {
  backgroundColor: "#f44336",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  padding: "5px 10px",
};

export default InventarioTable;
