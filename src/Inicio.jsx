import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import InventarioTable from "./components/InventarioTable";


function Inicio({ user, cerrarSesion }) {
  const [depSeleccionado, setDepSeleccionado] = useState(null);
  const [departamentoCargado, setDepartamentoCargado] = useState(false);

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
    "Biblioteca",
    "Computación",
    "Lenguaje",
    "Ciencias",
    "Matemáticas",
    "Infant",
    "PE",
    "Inglés",
    "Administración",
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
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100dvh",
        width: "100vw",
        backgroundColor: "white",
        position: "relative",
        overflow: "hidden",
        padding: "5vw",
        maxWidth: "10000px",
        margin: "0 auto",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "2%",
          left: "2%",
          width: "fit-content",
          maxWidth: "180px",
          zIndex: 10,
          pointerEvents: "none",
          overflowWrap: "break-word",
          lineHeight: "1.2",
        }}
      >
        <h4
          style={{
            margin: 0,
            color: "#050576",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            wordWrap: "break-word",
          }}
        >
          Hola, {user.displayName}
        </h4>
      </div>

      <h1
        style={{
          color: "#050576",
          marginTop: "6vh",
          marginBottom: "5vh",
          textAlign: "center",
          fontSize: "clamp(1.5rem, 5vw, 3rem)",
          lineHeight: "1.2",
          wordWrap: "break-word",
          maxWidth: "90%",
        }}
      >
        ¿A qué departamento quieres ingresar?
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
            {departamento}
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
        Cerrar sesión
      </button>

      {departamentoCargado && depSeleccionado && (
        <InventarioTable departamento={depSeleccionado} />
      )}
    </div>
  );
}

export default Inicio;
