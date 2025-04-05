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
  const [departamentos, setDepartamentos] = useState([]);
  const [nuevo, setNuevo] = useState({ nombre_es: "", nombre_en: "" });
  const [nuevoWifi, setNuevoWifi] = useState({ ssid: "", clave: "" });
  const [nuevoPersonal, setNuevoPersonal] = useState({ nombre: "", correo: "" });
  const [wifiList, setWifiList] = useState([]);
  const [personalList, setPersonalList] = useState([]);
  const [notificacion, setNotificacion] = useState("");
  const popupRef = useRef();
  const esAdmin = [
    "computacion@wessexschool.cl",
    "fbotasso@wessexschool.cl",
  ].includes(user?.email);

  useEffect(() => {
    if (mostrarEditor) cargarDepartamentos();
  }, [mostrarEditor]);

  useEffect(() => {
    if (mostrar) cargarInfoDepartamento();
  }, [mostrar]);

  const cargarDepartamentos = async () => {
    const snapshot = await getDocs(collection(db, "departamentos"));
    const data = snapshot.docs.map((d) => ({ ...d.data(), id: d.id }));
    setDepartamentos(data);
  };

  const cargarInfoDepartamento = async () => {
    const wifiSnap = await getDocs(collection(db, "departamentos", departamento, "wifi"));
    const personalSnap = await getDocs(collection(db, "departamentos", departamento, "personal"));
    setWifiList(wifiSnap.docs.map((d) => ({ id: d.id, ...d.data() })));
    setPersonalList(personalSnap.docs.map((d) => ({ id: d.id, ...d.data() })));
  };

  const agregarDepartamento = async () => {
    if (!nuevo.nombre_es || !nuevo.nombre_en) return;
    const docRef = doc(db, "departamentos", nuevo.nombre_es);
    await setDoc(docRef, {
      nombre_es: nuevo.nombre_es,
      nombre_en: nuevo.nombre_en,
    });
    i18n.addResource("es", "translation", `departments.${nuevo.nombre_es}`, nuevo.nombre_es);
    i18n.addResource("en", "translation", `departments.${nuevo.nombre_es}`, nuevo.nombre_en);
    setNuevo({ nombre_es: "", nombre_en: "" });
    setNotificacion(t("saved"));
    cargarDepartamentos();
  };

  const eliminarDepartamento = async (id) => {
    const confirmar = window.confirm(t("deleteConfirmation"));
    if (!confirmar) return;
    await deleteDoc(doc(db, "departamentos", id));
    setNotificacion(t("deleted"));
    cargarDepartamentos();
  };

  const agregarWifi = async () => {
    if (!nuevoWifi.ssid || !nuevoWifi.clave) return;
    await addDoc(collection(db, "departamentos", departamento, "wifi"), nuevoWifi);
    setNuevoWifi({ ssid: "", clave: "" });
    setNotificacion(t("saved"));
    cargarInfoDepartamento();
  };

  const eliminarWifi = async (id) => {
    const confirmar = window.confirm(t("deleteWifiConfirmation"));
    if (!confirmar) return;
    await deleteDoc(doc(db, "departamentos", departamento, "wifi", id));
    setNotificacion(t("deleted"));
    cargarInfoDepartamento();
  };

  const agregarPersonal = async () => {
    if (!nuevoPersonal.nombre || !nuevoPersonal.correo) return;
    await addDoc(collection(db, "departamentos", departamento, "personal"), nuevoPersonal);
    setNuevoPersonal({ nombre: "", correo: "" });
    setNotificacion(t("saved"));
    cargarInfoDepartamento();
  };

  const eliminarPersonal = async (id) => {
    const confirmar = window.confirm(t("deleteStaffConfirmation"));
    if (!confirmar) return;
    await deleteDoc(doc(db, "departamentos", departamento, "personal", id));
    setNotificacion(t("deleted"));
    cargarInfoDepartamento();
  };

  const marcarCambio = (id, campo, valor) => {
    setDepartamentos((prev) =>
      prev.map((d) => (d.id === id ? { ...d, [campo]: valor, editado: true } : d))
    );
  };

  const guardarCambios = async () => {
    for (const d of departamentos) {
      if (d.editado) {
        await updateDoc(doc(db, "departamentos", d.id), {
          nombre_es: d.nombre_es,
          nombre_en: d.nombre_en,
        });
        i18n.addResource("es", "translation", `departments.${d.nombre_es}`, d.nombre_es);
        i18n.addResource("en", "translation", `departments.${d.nombre_es}`, d.nombre_en);
      }
    }
    setNotificacion(t("saved"));
    cargarDepartamentos();
  };

  const cerrarSiClicFuera = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setMostrar(false);
      setMostrarEditor(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", cerrarSiClicFuera);
    return () => document.removeEventListener("mousedown", cerrarSiClicFuera);
  }, []);

  return (
    <>
      <button onClick={() => setMostrar(true)} style={botonPrincipal}>
        {t("departmentInfo")}
      </button>

      {esAdmin && (
        <button
          onClick={() => setMostrarEditor(true)}
          style={{ ...botonPrincipal, backgroundColor: "#888" }}
        >
          ⚙️ {t("edit")}
        </button>
      )}

      {(mostrar || mostrarEditor) && (
        <div style={fondoModal}>
          <div ref={popupRef} style={popupContenido}>
            {mostrar && (
              <div style={{ textAlign: "center" }}>
                <h2 style={{ color: "#050576" }}>{t("departmentInfo")}</h2>
                <section style={{ marginBottom: "1rem" }}>
                  <h3>📶 WiFi</h3>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {wifiList.map((wifi) => (
                      <li key={wifi.id} style={{ marginBottom: "6px" }}>
                        <b>{wifi.ssid}</b> — {wifi.clave}
                        {esAdmin && (
                          <button
                            onClick={() => eliminarWifi(wifi.id)}
                            style={{ marginLeft: "10px", background: "#f44336", color: "white", border: "none", borderRadius: "4px", padding: "4px 8px" }}
                          >
                            ❌
                          </button>
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
                <section>
                  <h3>👩‍🏫 {t("showStaff")}</h3>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {personalList.map((p) => (
                      <li key={p.id} style={{ marginBottom: "6px" }}>
                        <b>{p.nombre}</b> — {p.correo}
                        {esAdmin && (
                          <button
                            onClick={() => eliminarPersonal(p.id)}
                            style={{ marginLeft: "10px", background: "#f44336", color: "white", border: "none", borderRadius: "4px", padding: "4px 8px" }}
                          >
                            ❌
                          </button>
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
                <div style={{ marginTop: "1.5rem" }}>
                  <button onClick={() => setMostrar(false)} style={botonCancelar}>❌ {t("cancel")}</button>
                </div>
              </div>
            )}

            {mostrarEditor && (
              <>
                <h2 style={{ color: "#050576", textAlign: "center" }}>{t("departmentInfo")}</h2>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                  {departamentos.map((d) => (
                    <div key={d.id} style={filaInput}>
                      <input
                        value={d.nombre_es}
                        onChange={(e) => marcarCambio(d.id, "nombre_es", e.target.value)}
                        placeholder="Español"
                        style={inputEstilo}
                      />
                      <input
                        value={d.nombre_en}
                        onChange={(e) => marcarCambio(d.id, "nombre_en", e.target.value)}
                        placeholder="English"
                        style={inputEstilo}
                      />
                      <button onClick={() => eliminarDepartamento(d.id)} style={delBtn}>🗑️</button>
                    </div>
                  ))}

                  <div style={{ marginTop: "1rem", textAlign: "center" }}>
                    <h3>{t("addEquipment")}</h3>
                    <input
                      value={nuevo.nombre_es}
                      onChange={(e) => setNuevo({ ...nuevo, nombre_es: e.target.value })}
                      placeholder="Español"
                      style={inputEstilo}
                    />
                    <input
                      value={nuevo.nombre_en}
                      onChange={(e) => setNuevo({ ...nuevo, nombre_en: e.target.value })}
                      placeholder="English"
                      style={inputEstilo}
                    />
                    <button onClick={agregarDepartamento} style={botonGuardar}>➕ {t("addEquipment")}</button>
                  </div>

                  <div style={{ marginTop: "1rem", display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
                    <button onClick={guardarCambios} style={botonGuardar}>💾 {t("save")}</button>
                    <button onClick={() => setMostrarEditor(false)} style={botonCancelar}>❌ {t("cancel")}</button>
                  </div>
                </div>
              </>
            )}
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
  maxWidth: "700px",
  maxHeight: "90vh",
  overflowY: "auto",
  boxSizing: "border-box",
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

const delBtn = {
  backgroundColor: "#f44336",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  padding: "6px 12px",
  fontSize: "1rem",
};

export default InfoDepartamento;