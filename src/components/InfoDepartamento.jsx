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
  const [mostrarWifi, setMostrarWifi] = useState(false);
  const [mostrarPersonal, setMostrarPersonal] = useState(false);

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
    mostrarAlerta("WiFi agregado");
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
    mostrarAlerta("Personal agregado");
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
        onClick={() => {
          setVisible(true);
          setMostrarWifi(false);
          setMostrarPersonal(false);
        }}
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
        Info del Departamento
      </button>

      {visible && (
        <div style={{
          position: "fixed",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 20px rgba(0,0,0,0.3)",
          zIndex: 10000,
          width: "90%",
          maxWidth: "600px",
        }}>
          <h2 style={{ color: "#050576" }}>Información del Departamento</h2>

          <button onClick={() => setVisible(false)} style={cerrarBtn}>
            Cerrar ✖
          </button>

          <div style={{ marginTop: "10px" }}>
            <button onClick={() => setMostrarWifi((v) => !v)} style={btnStyle}>
              {mostrarWifi ? "Ocultar WiFi" : "Ver WiFi"}
            </button>
            {mostrarWifi && (
              <>
                {wifi.map((w) => (
                  <div key={w.id} style={fila}>
                    <input
                      placeholder="Nombre"
                      value={w.nombre}
                      onChange={(e) =>
                        actualizarWifi(w.id, "nombre", e.target.value)
                      }
                    />
                    <input
                      placeholder="Clave"
                      value={w.clave}
                      onChange={(e) =>
                        actualizarWifi(w.id, "clave", e.target.value)
                      }
                    />
                    <button onClick={() => eliminarWifi(w.id)} style={delBtn}>
                      ❌
                    </button>
                  </div>
                ))}
                <button onClick={agregarWifi} style={{ ...btnStyle, backgroundColor: "gray" }}>
                  + Agregar WiFi
                </button>
              </>
            )}
          </div>

          <div style={{ marginTop: "20px" }}>
            <button onClick={() => setMostrarPersonal((v) => !v)} style={btnStyle}>
              {mostrarPersonal ? "Ocultar Personal" : "Ver Personal"}
            </button>
            {mostrarPersonal && (
              <>
                {personal.map((p) => (
                  <div key={p.id} style={fila}>
                    <input
                      placeholder="Nombre"
                      value={p.nombre}
                      onChange={(e) =>
                        actualizarPersonal(p.id, "nombre", e.target.value)
                      }
                    />
                    <input
                      placeholder="Correo"
                      value={p.correo}
                      onChange={(e) =>
                        actualizarPersonal(p.id, "correo", e.target.value)
                      }
                    />
                    <button onClick={() => eliminarPersonal(p.id)} style={delBtn}>
                      ❌
                    </button>
                  </div>
                ))}
                <button onClick={agregarPersonal} style={{ ...btnStyle, backgroundColor: "gray" }}>
                  + Agregar Personal
                </button>
              </>
            )}
          </div>
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
  marginTop: "10px",
};

const cerrarBtn = {
  ...btnStyle,
  backgroundColor: "#f44336",
  float: "right",
};

const delBtn = {
  backgroundColor: "#f44336",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  padding: "5px 10px",
};

const fila = {
  display: "flex",
  gap: "10px",
  marginBottom: "8px",
  alignItems: "center",
};

export default InfoDepartamento;
