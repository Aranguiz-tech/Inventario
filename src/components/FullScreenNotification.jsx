import React, { useEffect, useRef } from "react";

function FullScreenNotification({
  mensaje,
  cerrar,
  confirmar,
  cancelar,
  esConfirmacion = false,
}) {
  const confirmarRef = useRef(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") cerrar();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [cerrar]);

  useEffect(() => {
    if (!esConfirmacion) {
      const timeout = setTimeout(cerrar, 500);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        confirmarRef.current?.focus();
      }, 100);
    }
  }, [cerrar, esConfirmacion]);

  const handleFondoClick = () => {
    if (!esConfirmacion) cerrar();
  };

  return (
    <div style={fondo} onClick={handleFondoClick}>
      <div style={caja} onClick={(e) => e.stopPropagation()}>
        <p style={texto}>{mensaje}</p>
        {esConfirmacion && (
          <div style={botones}>
            <button
              ref={confirmarRef}
              onClick={confirmar}
              style={botonConfirmar}
            >
              ✅ Sí
            </button>
            <button onClick={cancelar} style={botonCancelar}>
              ❌ No
            </button>
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
  padding: "clamp(10px, 4vw, 40px)",
  boxSizing: "border-box",
};

const caja = {
  backgroundColor: "white",
  padding: "clamp(20px, 5vw, 40px)",
  borderRadius: "16px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
  width: "100%",
  maxWidth: "clamp(280px, 80vw, 480px)",
  textAlign: "center",
  boxSizing: "border-box",
  transform: "scale(1)",
  animation: "aparecer 0.25s ease-in-out",
};

const texto = {
  fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
  color: "#050576",
  fontWeight: "bold",
  marginBottom: "clamp(16px, 3vw, 24px)",
};

const botones = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "clamp(10px, 3vw, 20px)",
};

const botonBase = {
  padding: "clamp(10px, 2.5vw, 14px) clamp(20px, 4vw, 32px)",
  fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "background-color 0.3s",
  minWidth: "120px",
};

const botonConfirmar = {
  ...botonBase,
  backgroundColor: "#4CAF50",
  color: "white",
};

const botonCancelar = {
  ...botonBase,
  backgroundColor: "#f44336",
  color: "white",
};

export default FullScreenNotification;
