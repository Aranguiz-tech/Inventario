import { useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase-config";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";
import FullScreenNotification from "./components/FullScreenNotification";

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
        localStorage.setItem("usuario", JSON.stringify(resultado.user));
        InicioDeSesionExitoso(resultado.user);
      } else {
        setMensaje(t("correoNoAutorizado") || "Correo no autorizado");
      }
    } catch (error) {
      setMensaje(t("errorInicioSesion") || "Error al iniciar sesión. Inténtalo de nuevo.");
      console.error("Error al iniciar sesión:", error);
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
        padding: "clamp(20px, 5vw, 60px)",
        width: "100%",
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
          marginBottom: "clamp(1rem, 5vh, 2rem)",
          textAlign: "center",
        }}
      >
        {t("welcome")}
      </h1>

      <div style={{ width: "100%", maxWidth: "400px", textAlign: "center" }}>
        <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.3rem)", marginBottom: "1.5rem" }}>
          {t("loginPrompt")}
        </p>

        <button
          onClick={iniciarSesion}
          style={{
            padding: "clamp(10px, 2.5vw, 15px) clamp(20px, 5vw, 30px)",
            backgroundColor: "#050576",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            cursor: "pointer",
            transition: "background-color 0.3s",
            width: "100%",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#f44336")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#050576")}
        >
          {t("loginGoogle")}
        </button>
      </div>

      {mensaje && (
        <FullScreenNotification
          mensaje={mensaje}
          cerrar={() => setMensaje("")}
        />
      )}
    </div>
  );
}

export default Login;
