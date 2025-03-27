import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import InventarioTable from "./components/InventarioTable";
import logo from "./assets/logo.png";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";

function Inicio({ user, cerrarSesion }) {
  const [depSeleccionado, setDepSeleccionado] = useState(null);
  const [departamentoCargado, setDepartamentoCargado] = useState(false);
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
      alert("Error al cerrar sesión");
    }
  };

  const departamentos = [
    "Materiales",
    "Computación",
    "Biblioteca",
    "Lenguaje",
    "Ciencias",
    "Matemáticas",
    "JR",
    "Infant",
    "PE",
    "Inglés",
    "Administración",
    "Profesores",
  ];

  const seleccionarDepartamento = (departamento) => {
    setDepSeleccionado(departamento);
    localStorage.setItem("departamento_activo", departamento);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100dvh",
        width: "100vw",
        backgroundColor: "white",
        position: "relative",
        overflow: "hidden",
        padding: "5vw",
        boxSizing: "border-box",
      }}
    >
      <img
        src={logo}
        alt="Logo del colegio"
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          width: "clamp(80px, 10vw, 120px)",
          height: "auto",
          objectFit: "contain",
          zIndex: 40,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "160px",
          zIndex: 50,
        }}
      >
        <LanguageSwitcher />
      </div>

      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          maxWidth: "180px",
          pointerEvents: "none",
        }}
      >
        <h4
          style={{
            margin: 0,
            color: "#050576",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
          }}
        >
          {t("greeting")}, {user.displayName}
        </h4>
      </div>

      <h1
        style={{
          color: "#050576",
          marginTop: "10vh",
          marginBottom: "5vh",
          textAlign: "center",
          fontSize: "clamp(1.5rem, 5vw, 3rem)",
          lineHeight: "1.2",
          wordWrap: "break-word",
          maxWidth: "90%",
        }}
      >
        {t("departmentQuestion")}
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2vw",
          justifyContent: "center",
          width: "100%",
          maxWidth: "800px",
        }}
      >
        {departamentos.map((departamento) => (
          <button
            key={departamento}
            onClick={() => seleccionarDepartamento(departamento)}
            style={{
              flex: "1 1 150px",
              maxWidth: "200px",
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

      <button
        onClick={cerrar}
        style={{
          marginTop: "5vh",
          padding: "clamp(10px, 2vw, 15px) clamp(20px, 4vw, 30px)",
          backgroundColor: "#f44336",
          color: "white",
          border: "none",
          borderRadius: "5px",
          fontSize: "clamp(1rem, 2vw, 1.2rem)",
          cursor: "pointer",
        }}
      >
        {t("logout")}
      </button>

      {departamentoCargado && depSeleccionado && (
        <InventarioTable departamento={depSeleccionado} />
      )}
    </div>
  );
}

export default Inicio;
