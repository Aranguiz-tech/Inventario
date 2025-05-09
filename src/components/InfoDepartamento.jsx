import { useEffect, useState, useRef } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase-config";
import { useTranslation } from "react-i18next";
import FullScreenNotification from "./FullScreenNotification";

function InfoDepartamento({ departamento, user }) {
  const { t } = useTranslation();
  const [mostrar, setMostrar] = useState(false);
  const [wifiList, setWifiList] = useState([]);
  const [personalList, setPersonalList] = useState([]);
  const [nuevoWifi, setNuevoWifi] = useState({ ssid: "", clave: "" });
  const [nuevoPersonal, setNuevoPersonal] = useState({ nombre: "", correo: "" });
  const [nuevoNombre, setNuevoNombre] = useState({ es: "", en: "" });
  const [eliminarConfirm, setEliminarConfirm] = useState(false);
  const [notificacion, setNotificacion] = useState("");
  const popupRef = useRef();

  const esAdmin = [
    "computacion@wessexschool.cl",
    "fbotasso@wessexschool.cl",
  ].includes(user?.email);

  useEffect(() => {
    if (mostrar) cargarInfo();
  }, [mostrar]);

  const cargarInfo = async () => {
    const wifiSnap = await getDocs(collection(db, "departamentos", departamento, "wifi"));
    const personalSnap = await getDocs(collection(db, "departamentos", departamento, "personal"));
    setWifiList(wifiSnap.docs.map((d) => ({ id: d.id, ...d.data() })));
    setPersonalList(personalSnap.docs.map((d) => ({ id: d.id, ...d.data() })));
  };

  const agregarWifi = async () => {
    if (!nuevoWifi.ssid || !nuevoWifi.clave) return;
    await addDoc(collection(db, "departamentos", departamento, "wifi"), nuevoWifi);
    setNuevoWifi({ ssid: "", clave: "" });
    setNotificacion(t("saved"));
    cargarInfo();
  };

  const eliminarWifi = async (id) => {
    await deleteDoc(doc(db, "departamentos", departamento, "wifi", id));
    setNotificacion(t("deleted"));
    cargarInfo();
  };

  const agregarPersonal = async () => {
    if (!nuevoPersonal.nombre || !nuevoPersonal.correo) return;
    await addDoc(collection(db, "departamentos", departamento, "personal"), nuevoPersonal);
    setNuevoPersonal({ nombre: "", correo: "" });
    setNotificacion(t("saved"));
    cargarInfo();
  };

  const eliminarPersonal = async (id) => {
    await deleteDoc(doc(db, "departamentos", departamento, "personal", id));
    setNotificacion(t("deleted"));
    cargarInfo();
  };

  const renombrarDepartamento = async () => {
    const { es, en } = nuevoNombre;
    if (!es || !en) {
      setNotificacion("❌ " + t("fillAllFields"));
      return;
    }

    await updateDoc(doc(db, "departamentos", departamento), {
      nombre_es: es,
      nombre_en: en,
    });

    setNotificacion("✅ " + t("renamed"));
    setNuevoNombre({ es: "", en: "" });
  };

  const eliminarDepartamento = async () => {
    await deleteDoc(doc(db, "departamentos", departamento));
    setNotificacion("🗑️ " + t("departmentDeleted"));
    setMostrar(false);
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
            <h2 style={titulo}>{t("departmentInfo")}</h2>

            {esAdmin && (
              <section style={bloque}>
                <h3>🏢 {t("editDepartment")}</h3>
                <input
                  value={nuevoNombre.es}
                  onChange={(e) => setNuevoNombre({ ...nuevoNombre, es: e.target.value })}
                  placeholder={t("newDepartmentName") + " (ES)"}
                  style={input}
                />
                <input
                  value={nuevoNombre.en}
                  onChange={(e) => setNuevoNombre({ ...nuevoNombre, en: e.target.value })}
                  placeholder={t("newDepartmentName") + " (EN)"}
                  style={input}
                />
                <button onClick={renombrarDepartamento} style={btn}>✏️ {t("rename")}</button>
                <button onClick={() => setEliminarConfirm(true)} style={btnBorrar}>🗑️ {t("deleteDepartment")}</button>
              </section>
            )}

            <section style={bloque}>
              <h3>📶 WiFi</h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {wifiList.map((wifi) => (
                  <li key={wifi.id} style={fila}>
                    <b>{wifi.ssid}</b> — {wifi.clave}
                    {esAdmin && (
                      <button onClick={() => eliminarWifi(wifi.id)} style={btnChico}>❌</button>
                    )}
                  </li>
                ))}
              </ul>
              {esAdmin && (
                <div style={campos}>
                  <input
                    value={nuevoWifi.ssid}
                    onChange={(e) => setNuevoWifi({ ...nuevoWifi, ssid: e.target.value })}
                    placeholder="SSID"
                    style={input}
                  />
                  <input
                    value={nuevoWifi.clave}
                    onChange={(e) => setNuevoWifi({ ...nuevoWifi, clave: e.target.value })}
                    placeholder={t("password")}
                    style={input}
                  />
                  <button onClick={agregarWifi} style={btn}>➕ {t("addWifi")}</button>
                </div>
              )}
            </section>

            <section style={bloque}>
              <h3>👥 {t("showStaff")}</h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {personalList.map((p) => (
                  <li key={p.id} style={fila}>
                    <b>{p.nombre}</b> — {p.correo}
                    {esAdmin && (
                      <button onClick={() => eliminarPersonal(p.id)} style={btnChico}>❌</button>
                    )}
                  </li>
                ))}
              </ul>
              {esAdmin && (
                <div style={campos}>
                  <input
                    value={nuevoPersonal.nombre}
                    onChange={(e) => setNuevoPersonal({ ...nuevoPersonal, nombre: e.target.value })}
                    placeholder={t("name")}
                    style={input}
                  />
                  <input
                    value={nuevoPersonal.correo}
                    onChange={(e) => setNuevoPersonal({ ...nuevoPersonal, correo: e.target.value })}
                    placeholder={t("email")}
                    style={input}
                  />
                  <button onClick={agregarPersonal} style={btn}>➕ {t("addStaff")}</button>
                </div>
              )}
            </section>

            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <button onClick={() => setMostrar(false)} style={btnCerrar}>❌ {t("cancel")}</button>
            </div>
          </div>
        </div>
      )}

      {eliminarConfirm && (
        <FullScreenNotification
          mensaje={t("confirmDeleteDepartment")}
          cerrar={() => setEliminarConfirm(false)}
          confirmar={eliminarDepartamento}
          cancelar={() => setEliminarConfirm(false)}
          esConfirmacion={true}
        />
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
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const popupContenido = {
  backgroundColor: "#fff",
  padding: "2rem",
  borderRadius: "10px",
  width: "95%",
  maxWidth: "600px",
  maxHeight: "90vh",
  overflowY: "auto",
};

const titulo = {
  textAlign: "center",
  color: "#050576",
  marginBottom: "1rem",
};

const input = {
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  width: "100%",
};

const btn = {
  marginTop: "10px",
  backgroundColor: "#050576",
  color: "white",
  border: "none",
  padding: "10px 16px",
  borderRadius: "6px",
  cursor: "pointer",
  display: "block",
};

const btnBorrar = {
  ...btn,
  backgroundColor: "#f44336",
};

const btnCerrar = {
  ...btn,
  backgroundColor: "#888",
};

const btnChico = {
  backgroundColor: "#f44336",
  color: "white",
  border: "none",
  padding: "4px 8px",
  borderRadius: "4px",
  marginLeft: "8px",
  cursor: "pointer",
};

const campos = {
  marginTop: "1rem",
};

const fila = {
  marginBottom: "6px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const bloque = {
  marginBottom: "2rem",
};

export default InfoDepartamento;
