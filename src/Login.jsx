import { useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase-config";

function Login({ onLoginSuccess }) {
  const [mensaje, setMensaje] = useState("");

  const iniciarSesion = async () => {
    const proveedor = new GoogleAuthProvider();
    try {
      const resultado = await signInWithPopup(auth, proveedor);
      const correo = resultado.user.email;

      if (correo === "computacion@wessexschool.cl") {
        setMensaje("");
        onLoginSuccess(resultado.user);
      } else {
        setMensaje("Correo no autorizado");
      }
    } catch (error) {
      setMensaje("Error al iniciar sesión. Inténtalo de nuevo.");
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
      }}
    >
      <h1
        style={{
          color: "#050576",
          fontSize: "clamp(1.5rem, 5vw, 3rem)",
          marginBottom: "20px",
        }}
      >
        Bienvenido al Inventario
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
            Cerrar
          </button>
        </div>
      )}

      <div>
        <p style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)", marginBottom: "20px" }}>
          Por favor, inicia sesión para continuar.
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
          Iniciar sesión con Google
        </button>
      </div>
    </div>
  );
}

export default Login;