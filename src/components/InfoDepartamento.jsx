// src/components/InfoDepartamento.jsx
import { useEffect, useState, useRef } from "react";
import {
  collection, getDocs, addDoc, updateDoc, deleteDoc, doc
} from "firebase/firestore";
import { db } from "../firebase-config";

function InfoDepartamento({ departamento, mostrarAlerta }) {
  const [mostrar, setMostrar] = useState(false);
  const [wifi, setWifi] = useState([]);
  const [personal, setPersonal] = useState([]);
  const [verWifi, setVerWifi] = useState(false);
  const [verPersonal, setVerPersonal] = useState(false);
  const popupRef = useRef();

  const rutaWifi = collection(db, "departamentos", departamento, "wifi");
  const rutaPersonal = collection(db, "departamentos", departamento, "personal");

  const cargarDatos = async () => {
    const w = await getDocs(rutaWifi);
    setWifi(w.docs.map((d) => ({ ...d.data(), id: d.id })));

    const p = await getDocs(rutaPersonal);
    setPersonal(p.docs.map((d) => ({ ...d.data(), id: d.id })));
  };

  useEffect(() => {
    if (mostrar) cargarDatos();
  }, [mostrar]);

  const cerrarSiClicFuera = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setMostrar(false);
    }
  };

  useEffect(() => {
    if (mostrar) {
      document.addEventListener("mousedown", cerrarSiClicFuera);
    } else {
      document.removeEventListener("mousedown", cerrarSiClicFuera);
    }
    return () => document.removeEventListener("mousedown", cerrarSiClicFuera);
  }, [mostrar]);

  const agregarWifi = async () => {
    const docRef = await addDoc(rutaWifi, { nombre: "", clave: "" });
    setWifi([...wifi, { id: docRef.id, nombre: "", clave: "" }]);
  };

  const actualizarWifi = async (id, campo, valor) => {
    await updateDoc(doc(db, "departamentos", departamento, "wifi", id), { [campo]: valor });
    setWifi((prev) => prev.map((w) => (w.id === id ? { ...w, [campo]: valor } : w)));
    mostrarAlerta("WiFi actualizado");
  };

  const eliminarWifi = async (id) => {
    await deleteDoc(doc(db, "departamentos", departamento, "wifi", id));
    setWifi((prev) => prev.filter((w) => w.id !== id));
    mostrarAlerta("WiFi eliminado");
  };

  const agregarPersonal = async () => {
    const docRef = await addDoc(rutaPersonal, { nombre: "", correo: "" });
    setPersonal([...personal, { id: docRef.id, nombre: "", correo: "" }]);
  };

  const actualizarPersonal = async (id, campo, valor) => {
    await updateDoc(doc(db, "departamentos", departamento, "personal", id), { [campo]: valor });
    setPersonal((prev) => prev.map((p) => (p.id === id ? { ...p, [campo]: valor } : p)));
    mostrarAlerta("Personal actualizado");
  };

  const eliminarPersonal = async (id) => {
    await deleteDoc(doc(db, "departamentos", departamento, "personal", id));
    setPersonal((prev) => prev.filter((p) => p.id !== id));
    mostrarAlerta("Personal eliminado");
  };

  return (
    <>
      <button
        onClick={() => setMostrar(!mostrar)}
        style={btnStyleSecundario}
      >
        Info del Departamento
      </button>

      {mostrar && (
        <div style={fondoModal}>
          <div ref={popupRef} style={popupContenido}>
            <h2>Información del Departamento</h2>

            <div style={{ marginBottom: "1rem" }}>
              <button onClick={() => setVerWifi(!verWifi)} style={btnStyleSecundario}>
                {verWifi ? "Ocultar WiFi" : "Ver WiFi"}
              </button>
              {verWifi && (
                <>
                  {wifi.map((w) => (
                    <div key={w.id} style={filaInput}>
                      <input value={w.nombre} placeholder="Nombre" onChange={(e) => actualizarWifi(w.id, "nombre", e.target.value)} />
                      <input value={w.clave} placeholder="Clave" onChange={(e) => actualizarWifi(w.id, "clave", e.target.value)} />
                      <button onClick={() => eliminarWifi(w.id)} style={delBtn}>❌</button>
                    </div>
                  ))}
                  <button onClick={agregarWifi} style={btnStyleSecundario}>+ Agregar WiFi</button>
                </>
              )}
            </div>

            <div>
              <button onClick={() => setVerPersonal(!verPersonal)} style={btnStyleSecundario}>
                {verPersonal ? "Ocultar Personal" : "Ver Personal"}
              </button>
              {verPersonal && (
                <>
                  {personal.map((p) => (
                    <div key={p.id} style={filaInput}>
                      <input value={p.nombre} placeholder="Nombre" onChange={(e) => actualizarPersonal(p.id, "nombre", e.target.value)} />
                      <input value={p.correo} placeholder="Correo" onChange={(e) => actualizarPersonal(p.id, "correo", e.target.value)} />
                      <button onClick={() => eliminarPersonal(p.id)} style={delBtn}>❌</button>
                    </div>
                  ))}
                  <button onClick={agregarPersonal} style={btnStyleSecundario}>+ Agregar Personal</button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const btnStyleSecundario = {
  padding: "8px 15px",
  backgroundColor: "#2196f3",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginLeft: "10px",
};

const delBtn = {
  backgroundColor: "#f44336",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  padding: "5px 10px",
};

const filaInput = {
  display: "flex",
  gap: "10px",
  marginBottom: "5px",
  alignItems: "center",
};

const fondoModal = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 999,
};

const popupContenido = {
  backgroundColor: "white",
  padding: "30px",
  borderRadius: "10px",
  maxWidth: "600px",
  width: "90%",
  maxHeight: "90vh",
  overflowY: "auto",
};

export default InfoDepartamento;
