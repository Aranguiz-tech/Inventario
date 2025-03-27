import { useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase-config";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";

function Login({ InicioDeSesionExitoso }) {
  const [mensaje, setMensaje] = useState("");
  const { t } = useTranslation();

  const correosAutorizados = [
    "computacion@wessexschool.cl",
    "dilan.aranguiz2201@alumnos.ubiobio.cl",
    "asanhueza@wessexschool.cl",
    "nmurphy@wessexschool.cl",
    "fbotasso@wessexschool.cl",
  ];

  const iniciarSesion = async () => {
    const proveedor = new GoogleAuthProvider();
    try {
      const resultado = await signInWithPopup(auth, proveedor);
      const correo = resultado.user.email;

      if (correosAutorizados.includes(correo)) {
        setMensaje("");
        InicioDeSesionExitoso(resultado.user);
      } else {
        setMensaje(t("correoNoAutorizado") || "Correo no autorizado");
      }
    } catch (error) {
      setMensaje(t("errorInicioSesion") || "Error al iniciar sesión. Inténtalo de nuevo.");
      console.log("Error al iniciar sesión:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100dvh",
        backgroundColor: "white",
        textAlign: "center",
        padding: "20px",
        maxWidth: "10000px",
        margin: "0 auto",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", top: "20px", right: "20px", zIndex: 50 }}>
        <LanguageSwitcher />
      </div>

      <h1
        style={{
          color: "#050576",
          fontSize: "clamp(1.5rem, 5vw, 3rem)",
          marginBottom: "20px",
        }}
      >
        {t("welcome")}
      </h1>

      {mensaje && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            zIndex: 1000,
            textAlign: "center",
            maxWidth: "90%",
            boxSizing: "border-box",
          }}
        >
          <p style={{ margin: 0, fontSize: "clamp(1rem, 2vw, 1.5rem)" }}>{mensaje}</p>
          <button
            onClick={() => setMensaje("")}
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              cursor: "pointer",
            }}
          >
            {t("cancel")}
          </button>
        </div>
      )}

      <div>
        <p style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)", marginBottom: "20px" }}>
          {t("loginPrompt")}
        </p>
        <button
          onClick={iniciarSesion}
          style={{
            padding: "10px 20px",
            backgroundColor: "#050576",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#f44336")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#050576")}
        >
          {t("loginGoogle")}
        </button>
      </div>
    </div>
  );
}

export default Login;
