import { useEffect, useState, useRef } from "react";
import {
  collection, getDocs, addDoc, updateDoc, deleteDoc, doc
} from "firebase/firestore";
import { db } from "../firebase-config";
import { useTranslation } from "react-i18next";

function InfoDepartamento({ departamento, mostrarAlerta }) {
  const { t } = useTranslation();

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
    const docRef = await addDoc(rutaPersonal, { nombre: "", correo: "", cargo: "" });
    setPersonal([...personal, { id: docRef.id, nombre: "", correo: "", cargo: "" }]);
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
        style={{ ...btnStyleSecundario, transition: "all 0.3s ease" }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#1976d2")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#2196f3")}
      >
        {t("departmentInfo")}
      </button>

      {mostrar && (
        <div style={fondoModal}>
          <div ref={popupRef} style={popupContenido}>
            <h2>{t("departmentInfo")}</h2>

            {/* --- WiFi --- */}
            <div style={{ marginBottom: "1rem" }}>
              <button
                onClick={() => setVerWifi(!verWifi)}
                style={{ ...btnStyleSecundario, transition: "all 0.3s ease" }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#1976d2")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#2196f3")}
              >
                {verWifi ? t("hideWifi") : t("showWifi")}
              </button>
              {verWifi && (
                <>
                  {wifi.map((w) => (
                    <div key={w.id} style={filaInput}>
                      <input style={inputEstilo} value={w.nombre} placeholder={t("name")} onChange={(e) => actualizarWifi(w.id, "nombre", e.target.value)} />
                      <input style={inputEstilo} value={w.clave} placeholder={t("password")} onChange={(e) => actualizarWifi(w.id, "clave", e.target.value)} />
                      <button
                        onClick={() => {
                          if (confirm(t("deleteWifiConfirmation"))) {
                            eliminarWifi(w.id);
                          }
                        }}
                        style={delBtn}
                      >❌</button>
                    </div>
                  ))}
                  <button onClick={agregarWifi} style={btnStyleSecundario}>
                    {t("addWifi")}
                  </button>
                </>
              )}
            </div>

            {/* --- Personal --- */}
            <div>
              <button
                onClick={() => setVerPersonal(!verPersonal)}
                style={{ ...btnStyleSecundario, transition: "all 0.3s ease" }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#1976d2")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#2196f3")}
              >
                {verPersonal ? t("hideStaff") : t("showStaff")}
              </button>
              {verPersonal && (
                <>
                  {personal.map((p) => (
                    <div key={p.id} style={filaInput}>
                      <input style={inputEstilo} value={p.nombre} placeholder={t("name")} onChange={(e) => actualizarPersonal(p.id, "nombre", e.target.value)} />
                      <input style={inputEstilo} value={p.correo} placeholder={t("email")} onChange={(e) => actualizarPersonal(p.id, "correo", e.target.value)} />
                      <input style={inputEstilo} value={p.cargo} placeholder={t("role")} onChange={(e) => actualizarPersonal(p.id, "cargo", e.target.value)} />
                      <button
                        onClick={() => {
                          if (confirm(t("deleteStaffConfirmation"))) {
                            eliminarPersonal(p.id);
                          }
                        }}
                        style={delBtn}
                      >❌</button>
                    </div>
                  ))}
                  <button onClick={agregarPersonal} style={btnStyleSecundario}>
                    {t("addStaff")}
                  </button>
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
  padding: "10px 20px",
  backgroundColor: "#2196f3",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  marginLeft: "10px",
  fontFamily: "Segoe UI, Tahoma, sans-serif",
};

const delBtn = {
  backgroundColor: "#f44336",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  padding: "6px 12px",
  fontFamily: "Segoe UI, Tahoma, sans-serif",
};

const filaInput = {
  display: "flex",
  gap: "10px",
  marginBottom: "5px",
  alignItems: "center",
  flexWrap: "wrap",
};

const inputEstilo = {
  padding: "10px",
  fontSize: "1rem",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontFamily: "Segoe UI, Tahoma, sans-serif",
  textAlign: "center",
  boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
  outlineColor: "#2196f3",
  width: "100%",
  maxWidth: "200px",
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
  fontFamily: "Segoe UI, Tahoma, sans-serif",
};

export default InfoDepartamento;
