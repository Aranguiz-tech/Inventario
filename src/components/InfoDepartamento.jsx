import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase-config";

function InfoDepartamento({ departamento, mostrarAlerta }) {
  const [wifi, setWifi] = useState([]);
  const [personal, setPersonal] = useState([]);
  const [visible, setVisible] = useState(false);

  const rutaWifi = collection(db, "departamentos", departamento, "wifi");
  const rutaPersonal = collection(db, "departamentos", departamento, "personal");

  const cargarDatos = async () => {
    const w = await getDocs(rutaWifi);
    setWifi(w.docs.map((d) => ({ ...d.data(), id: d.id })));

    const p = await getDocs(rutaPersonal);
    setPersonal(p.docs.map((d) => ({ ...d.data(), id: d.id })));
  };

  useEffect(() => {
    if (visible) cargarDatos();
  }, [visible]);

  const agregarWifi = async () => {
    const docRef = await addDoc(rutaWifi, { nombre: "", clave: "" });
    setWifi([...wifi, { id: docRef.id, nombre: "", clave: "" }]);
  };

  const actualizarWifi = async (id, campo, valor) => {
    const ref = doc(db, "departamentos", departamento, "wifi", id);
    await updateDoc(ref, { [campo]: valor });
    setWifi((prev) =>
      prev.map((w) => (w.id === id ? { ...w, [campo]: valor } : w))
    );
    mostrarAlerta("WiFi actualizado");
  };

  const eliminarWifi = async (id) => {
    await deleteDoc(doc(db, "departamentos", departamento, "wifi", id));
    setWifi(wifi.filter((w) => w.id !== id));
    mostrarAlerta("WiFi eliminado");
  };

  const agregarPersonal = async () => {
    const docRef = await addDoc(rutaPersonal, { nombre: "", correo: "" });
    setPersonal([...personal, { id: docRef.id, nombre: "", correo: "" }]);
  };

  const actualizarPersonal = async (id, campo, valor) => {
    const ref = doc(db, "departamentos", departamento, "personal", id);
    await updateDoc(ref, { [campo]: valor });
    setPersonal((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [campo]: valor } : p))
    );
    mostrarAlerta("Personal actualizado");
  };

  const eliminarPersonal = async (id) => {
    await deleteDoc(doc(db, "departamentos", departamento, "personal", id));
    setPersonal(personal.filter((p) => p.id !== id));
    mostrarAlerta("Personal eliminado");
  };

  return (
    <>
      <button
        onClick={() => setVisible(!visible)}
        style={{
          marginLeft: "10px",
          backgroundColor: "#2196f3",
          color: "white",
          padding: "8px 15px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {visible ? "Ocultar info" : "Info del Departamento"}
      </button>

      {visible && (
        <div style={{ marginTop: "1rem", background: "#f0f0f0", padding: "15px", borderRadius: "8px" }}>
          <h3>WiFi</h3>
          {wifi.map((w) => (
            <div key={w.id} style={{ display: "flex", gap: "10px", marginBottom: "5px" }}>
              <input placeholder="Nombre" value={w.nombre} onChange={(e) => actualizarWifi(w.id, "nombre", e.target.value)} />
              <input placeholder="Clave" value={w.clave} onChange={(e) => actualizarWifi(w.id, "clave", e.target.value)} />
              <button onClick={() => eliminarWifi(w.id)} style={delBtn}>❌</button>
            </div>
          ))}
          <button onClick={agregarWifi} style={{ ...btnStyle, backgroundColor: "gray" }}>+ Agregar WiFi</button>

          <h3 style={{ marginTop: "1rem" }}>Personal</h3>
          {personal.map((p) => (
            <div key={p.id} style={{ display: "flex", gap: "10px", marginBottom: "5px" }}>
              <input placeholder="Nombre" value={p.nombre} onChange={(e) => actualizarPersonal(p.id, "nombre", e.target.value)} />
              <input placeholder="Correo" value={p.correo} onChange={(e) => actualizarPersonal(p.id, "correo", e.target.value)} />
              <button onClick={() => eliminarPersonal(p.id)} style={delBtn}>❌</button>
            </div>
          ))}
          <button onClick={agregarPersonal} style={{ ...btnStyle, backgroundColor: "gray" }}>+ Agregar Personal</button>
        </div>
      )}
    </>
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

export default InfoDepartamento;