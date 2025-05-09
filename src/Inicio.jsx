import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "./firebase-config";
import InventarioTable from "./components/InventarioTable";
import FullScreenNotification from "./components/FullScreenNotification";
import LanguageSwitcher from "./components/LanguageSwitcher";
import EditarDepartamentos from "./components/editarDepartamentos";
import logo from "./assets/logo.png";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";

function Inicio({ user, cerrarSesion }) {
  const { t } = useTranslation();
  const [departamentos, setDepartamentos] = useState([]);
  const [depSeleccionado, setDepSeleccionado] = useState(null);
  const [departamentoCargado, setDepartamentoCargado] = useState(false);
  const [mostrarEdicion, setMostrarEdicion] = useState(false);
  const [notificacion, setNotificacion] = useState("");

  const esAdmin = [
    "computacion@wessexschool.cl",
    "fbotasso@wessexschool.cl",
  ].includes(user?.email);

  useEffect(() => {
    const cargarDepartamentos = async () => {
      const snapshot = await getDocs(collection(db, "departamentos"));
      const lista = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          nombre_es: data.nombre_es || doc.id,
          nombre_en: data.nombre_en || doc.id,
        };
      });

      lista.forEach((d) => {
        i18n.addResource("es", "translation", `departments.${d.id}`, d.nombre_es);
        i18n.addResource("en", "translation", `departments.${d.id}`, d.nombre_en);
      });

      setDepartamentos(lista);

      const ultimo = localStorage.getItem("departamento_activo");
      if (ultimo && lista.some((d) => d.id === ultimo)) {
        setDepSeleccionado(ultimo);
      }

      setDepartamentoCargado(true);
    };

    cargarDepartamentos();
  }, []);

  const cerrar = async () => {
    try {
      await signOut(auth);
      cerrarSesion();
    } catch {
      setNotificacion("❌ " + t("errorClosingSession"));
    }
  };

  const seleccionarDepartamento = (id) => {
    setDepSeleccionado(id);
    localStorage.setItem("departamento_activo", id);
    setNotificacion(t(`departments.${id}`));
    setTimeout(() => setNotificacion(""), 600);
  };

  return (
    <div
      style={{
        minHeight: "100dvh",
        width: "100vw",
        background: "linear-gradient(135deg, #f5f8ff, #e6ecff)",
        fontFamily: "'Merriweather', serif",
        padding: "5vw 3vw",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          maxWidth: "1200px",
          width: "100%",
          borderRadius: "16px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
          padding: "3vw",
        }}
      >
        {/* CABECERA */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "3vh",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "clamp(100px, 20vw, 200px)",
              height: "auto",
              objectFit: "contain",
            }}
          />

          <div style={{ display: "flex", alignItems: "center", gap: "15px", flexWrap: "wrap" }}>
            <h4 style={{ margin: 0, color: "#050576", fontSize: "1.1rem" }}>
              {t("greeting")}, {user.displayName}
            </h4>

            <LanguageSwitcher />

            {esAdmin && (
              <button
                title={t("editDepartments")}
                onClick={() => setMostrarEdicion(!mostrarEdicion)}
                style={{
                  padding: "10px",
                  backgroundColor: "#050576",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  fontSize: "1.2rem",
                  cursor: "pointer",
                }}
              >
                ⚙️
              </button>
            )}

            <button
              onClick={cerrar}
              style={{
                padding: "10px 20px",
                backgroundColor: "#f44336",
                color: "white",
                border: "none",
                borderRadius: "5px",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              {t("logout")}
            </button>
          </div>
        </div>

        {/* PANEL DE EDICIÓN DEPARTAMENTOS */}
 {esAdmin && mostrarEdicion && (
  <EditarDepartamentos user={user} cerrar={() => setMostrarEdicion(false)} />
)}

        {/* SELECCIÓN DE DEPARTAMENTO */}
        <h1
          style={{
            color: "#050576",
            marginBottom: "4vh",
            textAlign: "center",
            fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
          }}
        >
          {t("departmentQuestion")}
        </h1>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
            maxWidth: "1100px",
            marginBottom: "5vh",
          }}
        >
          {departamentos.map(({ id }) => (
            <button
              key={id}
              onClick={() => seleccionarDepartamento(id)}
              style={{
                flex: "1 1 140px",
                maxWidth: "180px",
                padding: "clamp(10px, 2vw, 15px) clamp(20px, 4vw, 30px)",
                backgroundColor: depSeleccionado === id ? "#4CAF50" : "#050576",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
                cursor: "pointer",
                transition: "background-color 0.3s",
                textAlign: "center",
                boxShadow: depSeleccionado === id
                  ? "0 0 10px rgba(0, 0, 0, 0.3)"
                  : "none",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor =
                  depSeleccionado === id ? "#4CAF50" : "#f44336";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor =
                  depSeleccionado === id ? "#4CAF50" : "#050576";
              }}
            >
              {t(`departments.${id}`)}
            </button>
          ))}
        </div>

        {/* TABLA DEL INVENTARIO */}
        {departamentoCargado && depSeleccionado && (
          <InventarioTable departamento={depSeleccionado} user={user} />
        )}
      </div>

      {notificacion && (
        <FullScreenNotification mensaje={notificacion} cerrar={() => setNotificacion("")} />
      )}
    </div>
  );
}

export default Inicio;
