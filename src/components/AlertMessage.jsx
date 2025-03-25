function AlertMessage({ mensaje }) {
  if (!mensaje) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "10%",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "#050576",
        color: "white",
        padding: "10px 20px",
        borderRadius: "8px",
        zIndex: 9999,
        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
        fontWeight: "bold",
      }}
    >
      {mensaje}
    </div>
  );
}

export default AlertMessage;
