import { useEffect, useState, useRef } from "react";
import {
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  setDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "../firebase-config";
import { useTranslation } from "react-i18next";
import FullScreenNotification from "./FullScreenNotification";
import i18n from "../i18n";

function InfoDepartamento({ departamento, user }) {
  const { t } = useTranslation();
  const [mostrar, setMostrar] = useState(false);
  const [mostrarEditor, setMostrarEditor] = useState(false);
  const [wifiList, setWifiList] = useState([]);
  const [personalList, setPersonalList] = useState([]);
  const [nuevoWifi, setNuevoWifi] = useState({ ssid: "", clave: "" });
  const [nuevoPersonal, setNuevoPersonal] = useState({ nombre: "", correo: "" });
  const [notificacion, setNotificacion] = useState("");
  const popupRef = useRef();
  const esAdmin = [
    "computacion@wessexschool.cl",
    "fbotasso@wessexschool.cl",
  ].includes(user?.email);

  useEffect(() => {
    if (mostrar) cargarInfoDepartamento();
  }, [mostrar]);

  const cargarInfoDepartamento = async () => {
    const wifiSnap = await getDocs(collection(db, "departamentos", departamento, "wifi"));
    const personalSnap = await getDocs(collection(db, "departamentos", departamento, "personal"));
    setWifiList(wifiSnap.docs.map((d) => ({ id: d.id, ...d.data() })));
    setPersonalList(personalSnap.docs.map((d) => ({ id: d.id, ...d.data() })));
  };

  const agregarWifi = async () => {
    if (!nuevoWifi.ssid || !nuevoWifi.clave) return;
    await addDoc(collection(db, "departamentos", departamento, "wifi"), nuevoWifi);
    setNuevoWifi({ ssid: "", clave: "" });
    setNotificacion("Guardado correctamente ✅");
    cargarInfoDepartamento();
  };

  const eliminarWifi = async (id) => {
    await deleteDoc(doc(db, "departamentos", departamento, "wifi", id));
    setNotificacion("Eliminado correctamente ✅");
    cargarInfoDepartamento();
  };

  const agregarPersonal = async () => {
    if (!nuevoPersonal.nombre || !nuevoPersonal.correo) return;
    await addDoc(collection(db, "departamentos", departamento, "personal"), nuevoPersonal);
    setNuevoPersonal({ nombre: "", correo: "" });
    setNotificacion("Guardado correctamente ✅");
    cargarInfoDepartamento();
  };

  const eliminarPersonal = async (id) => {
    await deleteDoc(doc(db, "departamentos", departamento, "personal", id));
    setNotificacion("Eliminado correctamente ✅");
    cargarInfoDepartamento();
  };

  const cerrarSiClicFuera = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setMostrar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", cerrarSiClicFuera);
    return () => document.removeEventListener("mousedown", cerrarSiClicFuera);
  }, []);

  return (
    <>
      <button onClick={() => setMostrar(true)} style={botonPrincipal}>
        ℹ️ {t("departmentInfo")}
      </button>

      {mostrar && (
        <div style={fondoModal}>
          <div ref={popupRef} style={popupContenido}>
            <h2 style={{ color: "#050576", textAlign: "center" }}>{t("departmentInfo")}</h2>

            <section>
              <h3>📶 WiFi</h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {wifiList.map((wifi) => (
                  <li key={wifi.id} style={{ marginBottom: "6px" }}>
                    <b>{wifi.ssid}</b> — {wifi.clave}
                    {esAdmin && (
                      <button onClick={() => eliminarWifi(wifi.id)} style={btnBorrar}>❌</button>
                    )}
                  </li>
                ))}
              </ul>
              {esAdmin && (
                <div style={{ marginTop: "1rem" }}>
                  <input
                    value={nuevoWifi.ssid}
                    onChange={(e) => setNuevoWifi({ ...nuevoWifi, ssid: e.target.value })}
                    placeholder={t("name") + " SSID"}
                    style={inputEstilo}
                  />
                  <input
                    value={nuevoWifi.clave}
                    onChange={(e) => setNuevoWifi({ ...nuevoWifi, clave: e.target.value })}
                    placeholder={t("password")}
                    style={inputEstilo}
                  />
                  <button onClick={agregarWifi} style={botonGuardar}>➕ {t("addWifi")}</button>
                </div>
              )}
            </section>

            <section style={{ marginTop: "1rem" }}>
              <h3>👩‍🏫 {t("showStaff")}</h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {personalList.map((p) => (
                  <li key={p.id} style={{ marginBottom: "6px" }}>
                    <b>{p.nombre}</b> — {p.correo}
                    {esAdmin && (
                      <button onClick={() => eliminarPersonal(p.id)} style={btnBorrar}>❌</button>
                    )}
                  </li>
                ))}
              </ul>
              {esAdmin && (
                <div style={{ marginTop: "1rem" }}>
                  <input
                    value={nuevoPersonal.nombre}
                    onChange={(e) => setNuevoPersonal({ ...nuevoPersonal, nombre: e.target.value })}
                    placeholder={t("name")}
                    style={inputEstilo}
                  />
                  <input
                    value={nuevoPersonal.correo}
                    onChange={(e) => setNuevoPersonal({ ...nuevoPersonal, correo: e.target.value })}
                    placeholder={t("email")}
                    style={inputEstilo}
                  />
                  <button onClick={agregarPersonal} style={botonGuardar}>➕ {t("addStaff")}</button>
                </div>
              )}
            </section>

            <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
              <button onClick={() => setMostrar(false)} style={botonCancelar}>❌ {t("cancel")}</button>
            </div>
          </div>
        </div>
      )}

      {notificacion && (
        <FullScreenNotification mensaje={notificacion} cerrar={() => setNotificacion("")} />
      )}
    </>
  );
}

const botonPrincipal = {
  padding: "10px 16px",
  backgroundColor: "#050576",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold",
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
  maxWidth: "600px",
  maxHeight: "90vh",
  overflowY: "auto",
  boxSizing: "border-box",
};

const inputEstilo = {
  padding: "10px",
  fontSize: "1rem",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontFamily: "Segoe UI, Tahoma, sans-serif",
  width: "100%",
  maxWidth: "200px",
};

const botonGuardar = {
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  padding: "10px 16px",
  fontWeight: "bold",
};

const botonCancelar = {
  ...botonGuardar,
  backgroundColor: "#f44336",
};

const btnBorrar = {
  marginLeft: "10px",
  background: "#f44336",
  color: "white",
  border: "none",
  borderRadius: "4px",
  padding: "4px 8px",
  cursor: "pointer",
};

export default InfoDepartamento;