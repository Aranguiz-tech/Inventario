import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import InventarioTable from "./components/InventarioTable";
import logo from "./assets/logo.png";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";
import FullScreenNotification from "./components/FullScreenNotification";

function Inicio({ user, cerrarSesion }) {
  const [depSeleccionado, setDepSeleccionado] = useState(null);
  const [departamentoCargado, setDepartamentoCargado] = useState(false);
  const [notificacion, setNotificacion] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    const ultimoDepartamento = localStorage.getItem("departamento_activo");
    if (ultimoDepartamento) {
      setDepSeleccionado(ultimoDepartamento);
    }
    setDepartamentoCargado(true);
  }, []);

  const cerrar = async () => {
    try {
      await signOut(auth);
      cerrarSesion();
    } catch (error) {
      setNotificacion("Error al cerrar sesión");
    }
  };

  const departamentos = [
    "Computación",
    "Biblioteca",
    "Lenguaje",
    "Ciencias",
    "Matemáticas",
    "JR",
    "Infant",
    "EducaciónFísica",
    "Inglés",
    "Administración",
    "Profesores",
  ];

  const seleccionarDepartamento = (departamento) => {
    setDepSeleccionado(departamento);
    localStorage.setItem("departamento_activo", departamento);
    setNotificacion(`${t(`departments.${departamento}`)}`);
    setTimeout(() => setNotificacion(""), 1000);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100dvh",
        width: "100vw",
        backgroundColor: "#f9f9f9",
        padding: "5vw 3vw",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
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
          alt="Logo del colegio"
          style={{
            width: "clamp(100px, 20vw, 200px)",
            height: "auto",
            objectFit: "contain",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
          <h4
            style={{
              margin: 0,
              color: "#050576",
              fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
              fontWeight: "500",
            }}
          >
            {t("greeting")}, {user.displayName}
          </h4>

          <LanguageSwitcher />

          <button
            onClick={cerrar}
            style={{
              padding: "10px 20px",
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
              cursor: "pointer",
            }}
          >
            {t("logout")}
          </button>
        </div>
      </div>

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
          width: "100%",
          maxWidth: "1100px",
          marginBottom: "5vh",
        }}
      >
        {departamentos.map((departamento) => (
          <button
            key={departamento}
            onClick={() => seleccionarDepartamento(departamento)}
            style={{
              flex: "1 1 140px",
              maxWidth: "180px",
              padding: "clamp(10px, 2vw, 15px) clamp(20px, 4vw, 30px)",
              backgroundColor:
                depSeleccionado === departamento ? "#4CAF50" : "#050576",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
              cursor: "pointer",
              transition: "background-color 0.3s",
              textAlign: "center",
              boxShadow:
                depSeleccionado === departamento
                  ? "0 0 10px rgba(0, 0, 0, 0.3)"
                  : "none",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor =
                depSeleccionado === departamento ? "#4CAF50" : "#f44336";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor =
                depSeleccionado === departamento ? "#4CAF50" : "#050576";
            }}
          >
            {t(`departments.${departamento}`)}
          </button>
        ))}
      </div>

      {departamentoCargado && depSeleccionado && (
        <InventarioTable departamento={depSeleccionado} />
      )}

      {notificacion && <FullScreenNotification mensaje={notificacion} cerrar={() => setNotificacion("")} />}
    </div>
  );
}

export default Inicio;