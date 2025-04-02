import { useEffect, useState, useRef } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase-config";
import { useTranslation } from "react-i18next";
import FullScreenNotification from "./FullScreenNotification";

function InfoDepartamento({ departamento }) {
  const { t } = useTranslation();
  const [mostrar, setMostrar] = useState(false);
  const [wifi, setWifi] = useState([]);
  const [personal, setPersonal] = useState([]);
  const [verWifi, setVerWifi] = useState(false);
  const [verPersonal, setVerPersonal] = useState(false);
  const [notificacion, setNotificacion] = useState("");
  const popupRef = useRef();

  const rutaWifi = collection(db, "departamentos", departamento, "wifi");
  const rutaPersonal = collection(db, "departamentos", departamento, "personal");

  const cargarDatos = async () => {
    const w = await getDocs(rutaWifi);
    setWifi(w.docs.map((d) => ({ ...d.data(), id: d.id, editado: false })));

    const p = await getDocs(rutaPersonal);
    setPersonal(p.docs.map((d) => ({ ...d.data(), id: d.id, editado: false })));
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

  const toggleVerWifi = () => {
    setVerWifi((prev) => !prev);
    if (!verWifi) setVerPersonal(false);
  };

  const toggleVerPersonal = () => {
    setVerPersonal((prev) => !prev);
    if (!verPersonal) setVerWifi(false);
  };

  const agregarWifi = async () => {
    const docRef = await addDoc(rutaWifi, { nombre: "", clave: "" });
    setWifi([...wifi, { id: docRef.id, nombre: "", clave: "", editado: false }]);
    setNotificacion("WiFi agregado");
  };

  const marcarEditadoWifi = (id, campo, valor) => {
    setWifi((prev) =>
      prev.map((w) => (w.id === id ? { ...w, [campo]: valor, editado: true } : w))
    );
  };

  const guardarWifi = async (id) => {
    const item = wifi.find((w) => w.id === id);
    await updateDoc(doc(db, "departamentos", departamento, "wifi", id), {
      nombre: item.nombre,
      clave: item.clave,
    });
    setWifi((prev) => prev.map((w) => (w.id === id ? { ...w, editado: false } : w)));
    setNotificacion("WiFi guardado correctamente");
  };

  const eliminarWifi = async (id) => {
    await deleteDoc(doc(db, "departamentos", departamento, "wifi", id));
    setWifi((prev) => prev.filter((w) => w.id !== id));
    setNotificacion("WiFi eliminado");
  };

  const agregarPersonal = async () => {
    const docRef = await addDoc(rutaPersonal, { nombre: "", correo: "", cargo: "" });
    setPersonal([...personal, { id: docRef.id, nombre: "", correo: "", cargo: "", editado: false }]);
    setNotificacion("Personal agregado");
  };

  const marcarEditadoPersonal = (id, campo, valor) => {
    setPersonal((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [campo]: valor, editado: true } : p))
    );
  };

  const guardarPersonal = async (id) => {
    const item = personal.find((p) => p.id === id);
    await updateDoc(doc(db, "departamentos", departamento, "personal", id), {
      nombre: item.nombre,
      correo: item.correo,
      cargo: item.cargo,
    });
    setPersonal((prev) => prev.map((p) => (p.id === id ? { ...p, editado: false } : p)));
    setNotificacion("Personal guardado correctamente");
  };

  const eliminarPersonal = async (id) => {
    await deleteDoc(doc(db, "departamentos", departamento, "personal", id));
    setPersonal((prev) => prev.filter((p) => p.id !== id));
    setNotificacion("Personal eliminado");
  };

  return (
    <>
      <button onClick={() => setMostrar(true)} style={botonPrincipal}>
        {t("departmentInfo")}
      </button>

      {mostrar && (
        <div style={fondoModal}>
          <div ref={popupRef} style={popupContenido}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2 style={{ marginBottom: "1rem" }}>{t("departmentInfo")}</h2>
              <button
                onClick={() => setMostrar(false)}
                style={{ background: "transparent", border: "none", fontSize: "1.5rem", cursor: "pointer", color: "#888" }}
                title={t("close")}
              >
                ❌
              </button>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <button onClick={toggleVerWifi} style={verWifi ? botonOcultar : botonVer}>
                {verWifi ? t("hideWifi") : t("showWifi")}
              </button>
              {verWifi && (
                <>
                  {wifi.map((w) => (
                    <div key={w.id} style={filaInput}>
                      <input style={inputEstilo} value={w.nombre} placeholder={t("name")} onChange={(e) => marcarEditadoWifi(w.id, "nombre", e.target.value)} />
                      <input style={inputEstilo} value={w.clave} placeholder={t("password")} onChange={(e) => marcarEditadoWifi(w.id, "clave", e.target.value)} />
                      {w.editado && <button onClick={() => guardarWifi(w.id)} style={botonGuardar}>{t("save")}</button>}
                      <button onClick={() => eliminarWifi(w.id)} style={delBtn}>❌</button>
                    </div>
                  ))}
                  <button onClick={agregarWifi} style={botonSecundario}>{t("addWifi")}</button>
                </>
              )}
            </div>

            <div>
              <button onClick={toggleVerPersonal} style={verPersonal ? botonOcultar : botonVer}>
                {verPersonal ? t("hideStaff") : t("showStaff")}
              </button>
              {verPersonal && (
                <>
                  {personal.map((p) => (
                    <div key={p.id} style={filaInput}>
                      <input style={inputEstilo} value={p.nombre} placeholder={t("name")} onChange={(e) => marcarEditadoPersonal(p.id, "nombre", e.target.value)} />
                      <input style={inputEstilo} value={p.correo} placeholder={t("email")} onChange={(e) => marcarEditadoPersonal(p.id, "correo", e.target.value)} />
                      <input style={inputEstilo} value={p.cargo} placeholder={t("role")} onChange={(e) => marcarEditadoPersonal(p.id, "cargo", e.target.value)} />
                      {p.editado && <button onClick={() => guardarPersonal(p.id)} style={botonGuardar}>{t("save")}</button>}
                      <button onClick={() => eliminarPersonal(p.id)} style={delBtn}>❌</button>
                    </div>
                  ))}
                  <button onClick={agregarPersonal} style={botonSecundario}>{t("addStaff")}</button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {notificacion && <FullScreenNotification mensaje={notificacion} cerrar={() => setNotificacion("")} />}
    </>
  );
}

const botonPrincipal = {
  padding: "clamp(10px, 1.5vw, 14px) clamp(20px, 3vw, 28px)",
  backgroundColor: "#2196f3",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
};

const botonSecundario = {
  ...botonPrincipal,
  backgroundColor: "#050576",
  marginTop: "10px",
};

const botonGuardar = {
  backgroundColor: "#28a745",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  padding: "10px 16px",
  fontWeight: "bold",
  fontSize: "clamp(0.9rem, 1.3vw, 1rem)",
};

const botonVer = {
  backgroundColor: "#050576",
  color: "white",
  padding: "10px 16px",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "clamp(0.9rem, 1.3vw, 1rem)",
};

const botonOcultar = {
  ...botonVer,
  backgroundColor: "#b71c1c",
};

const delBtn = {
  backgroundColor: "#f44336",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  padding: "6px 12px",
  fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
};

const filaInput = {
  display: "flex",
  gap: "10px",
  marginBottom: "10px",
  flexWrap: "wrap",
  justifyContent: "center",
};

const inputEstilo = {
  padding: "10px",
  fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontFamily: "Segoe UI, Tahoma, sans-serif",
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
  zIndex: 1000,
  padding: "10px",
  boxSizing: "border-box",
};

const popupContenido = {
  backgroundColor: "white",
  padding: "clamp(20px, 4vw, 30px)",
  borderRadius: "10px",
  width: "95%",
  maxWidth: "700px",
  maxHeight: "90vh",
  overflowY: "auto",
  boxSizing: "border-box",
};

export default InfoDepartamento;