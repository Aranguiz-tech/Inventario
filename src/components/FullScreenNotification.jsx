import React, { useEffect } from "react";

function FullScreenNotification({ mensaje, cerrar, confirmar, cancelar, esConfirmacion = false }) {
  useEffect(() => {
    if (!esConfirmacion) {
      const timeout = setTimeout(cerrar, 500);
      return () => clearTimeout(timeout);
    }
  }, [cerrar, esConfirmacion]);

  return (
    <div style={fondo}>
      <div style={caja}>
        <p style={texto}>{mensaje}</p>
        {esConfirmacion && (
          <div style={botones}>
            <button onClick={confirmar} style={botonConfirmar}>Sí</button>
            <button onClick={cancelar} style={botonCancelar}>No</button>
          </div>
        )}
      </div>
    </div>
  );
}

const fondo = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};

const caja = {
  backgroundColor: "white",
  padding: "30px 40px",
  borderRadius: "15px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
  maxWidth: "90%",
  width: "clamp(300px, 80%, 500px)",
  textAlign: "center",
};

const texto = {
  fontSize: "1.3rem",
  color: "#050576",
  fontWeight: "bold",
  marginBottom: "20px",
};

const botones = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
};

const botonConfirmar = {
  backgroundColor: "#4CAF50",
  color: "white",
  padding: "10px 20px",
  fontSize: "1rem",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

const botonCancelar = {
  backgroundColor: "#f44336",
  color: "white",
  padding: "10px 20px",
  fontSize: "1rem",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

export default FullScreenNotification;
