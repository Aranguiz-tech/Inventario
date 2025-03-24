import { useEffect, useState } from "react";

function TablaInventario({ departamento }) {
  const inventarioKey = `inventario_${departamento}`;
  const wifiKey = `wifi_${departamento}`;
  const personalKey = `personal_${departamento}`;

  const [datos, setDatos] = useState([]);
  const [mostrarInfo, setMostrarInfo] = useState(false);
  const [wifi, setWifi] = useState([]);
  const [personal, setPersonal] = useState([]);
  const [mensaje, setMensaje] = useState("");
  
  const guardarLocalStorageDirecto = (clave, datos) => {
    try {
      const json = JSON.stringify(datos);
      localStorage.setItem(clave, json);
    } catch (e) {
      console.error("❌ Error al guardar localStorage:", e);
    }
  };
 
  useEffect(() => {
    if (!departamento) return;

    try {
      const inv = localStorage.getItem(inventarioKey);
      const w = localStorage.getItem(wifiKey);
      const p = localStorage.getItem(personalKey);

      setDatos(inv ? JSON.parse(inv) : []);
      setWifi(w ? JSON.parse(w) : []);
      setPersonal(p ? JSON.parse(p) : []);
    } catch (error) {
      console.error("Error al cargar datos:", error);
      setDatos([]);
      setWifi([]);
      setPersonal([]);
    }
  }, [departamento]);

  const calcularTotal = () => datos.reduce((acc, item) => acc + (parseInt(item.cantidad, 10) || 0), 0);

  const actualizarDato = (id, campo, valor) => {
    const nuevosDatos = datos.map((item) =>
      item.id === id
        ? { ...item, [campo]: campo === "cantidad" ? parseInt(valor, 10) || "" : valor }
        : item
    );
    setDatos(nuevosDatos);
    guardarLocalStorageDirecto(inventarioKey, nuevosDatos);
  };

  const agregarEquipo = () => {
    const nuevoId = datos.length > 0 ? Math.max(...datos.map((d) => d.id)) + 1 : 1;
    const nuevo = {
      id: nuevoId,
      tipo: "",
      marca: "",
      complementos: "",
      estado: "Desconocido",
      fecha: new Date().toISOString().split("T")[0],
      cantidad: 1,
      observaciones: "",
      guardado: false,
    };
    const nuevosDatos = [...datos, nuevo];
    setDatos(nuevosDatos);
    guardarLocalStorageDirecto(inventarioKey, nuevosDatos);
  };

  const eliminarEquipo = (id) => {
    const nuevosDatos = datos.filter((d) => d.id !== id);
    setDatos(nuevosDatos);
    guardarLocalStorageDirecto(inventarioKey, nuevosDatos);
    mostrarAlerta("Eliminado");
  };

  const guardarEquipo = (id) => {
    const equipo = datos.find((d) => d.id === id);
    const completo = ["tipo", "marca", "complementos", "estado", "observaciones"].every(
      (c) => equipo[c] && equipo[c].toString().trim() !== ""
    );

    if (completo && equipo.cantidad > 0) {
      const nuevosDatos = datos.map((item) =>
        item.id === id ? { ...item, guardado: true } : item
      );
      setDatos(nuevosDatos);
      guardarLocalStorageDirecto(inventarioKey, nuevosDatos);
      mostrarAlerta("Guardado exitosamente");
    } else {
      mostrarAlerta("Completa todos los campos y asegúrate de que la cantidad sea mayor a 0.");
    }
  };

  const actualizarEquipo = (id) => {
    const equipo = datos.find((item) => item.id === id);
    const completo = ["tipo", "marca", "complementos", "estado", "observaciones"].every(
      (c) => equipo[c] && equipo[c].toString().trim() !== ""
    );

    if (completo && equipo.cantidad > 0) {
      const nuevosDatos = datos.map((item) => (item.id === id ? { ...item } : item));
      setDatos(nuevosDatos);
      guardarLocalStorageDirecto(inventarioKey, nuevosDatos);
      mostrarAlerta("Actualizado correctamente");
    } else {
      mostrarAlerta("Completa todos los campos correctamente.");
    }
  };

  const mostrarAlerta = (texto) => {
    setMensaje(texto);
    setTimeout(() => setMensaje(""), 3000);
  };

  const getColor = (estado) => {
    switch (estado) {
      case "Desconocido": return "gray";
      case "Reemplazar": return "red";
      case "Mejorar": return "orange";
      case "Mantener": return "green";
      default: return "black";
    }
  };

  const agregarWifi = () => {
    const nuevosWifi = [...wifi, { id: Date.now(), nombre: "", clave: "" }];
    setWifi(nuevosWifi);
    guardarLocalStorageDirecto(wifiKey, nuevosWifi);
  };

  const actualizarWifi = (id, campo, valor) => {
    const nuevosWifi = wifi.map((w) => (w.id === id ? { ...w, [campo]: valor } : w));
    setWifi(nuevosWifi);
    guardarLocalStorageDirecto(wifiKey, nuevosWifi);
  };

  const eliminarWifi = (id) => {
    const nuevosWifi = wifi.filter((w) => w.id !== id);
    setWifi(nuevosWifi);
    guardarLocalStorageDirecto(wifiKey, nuevosWifi);
  };

  const agregarPersonal = () => {
    const nuevosPersonal = [...personal, { id: Date.now(), nombre: "", correo: "" }];
    setPersonal(nuevosPersonal);
    guardarLocalStorageDirecto(personalKey, nuevosPersonal);
  };

  const actualizarPersonal = (id, campo, valor) => {
    const nuevosPersonal = personal.map((p) => (p.id === id ? { ...p, [campo]: valor } : p));
    setPersonal(nuevosPersonal);
    guardarLocalStorageDirecto(personalKey, nuevosPersonal);
  };

  const eliminarPersonal = (id) => {
    const nuevosPersonal = personal.filter((p) => p.id !== id);
    setPersonal(nuevosPersonal);
    guardarLocalStorageDirecto(personalKey, nuevosPersonal);
  };

  if (!departamento) return <p style={{ color: "red" }}>⚠️ No se ha seleccionado ningún departamento.</p>;

  return (
    <div style={{ width: "100%", marginTop: "2rem", position: "relative" }}>
      <h2 style={{ color: "#050576" }}>{departamento}</h2>

      {mensaje && (
        <div style={{
          position: "fixed",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#050576",
          color: "white",
          padding: "10px 20px",
          borderRadius: "8px",
          zIndex: 999,
        }}>
          {mensaje}
        </div>
      )}

      <button onClick={agregarEquipo} style={btnStyle}>+ Agregar equipo</button>
      <button onClick={() => setMostrarInfo(!mostrarInfo)} style={{ ...btnStyle, backgroundColor: "#2196f3", marginLeft: "10px" }}>
        {mostrarInfo ? "Ocultar info" : "Info del Departamento"}
      </button>

      {mostrarInfo && (
        <div style={{ marginTop: "1rem", background: "#f0f0f0", padding: "15px", borderRadius: "8px" }}>
          <h3>WiFi</h3>
          {wifi.map((w) => (
            <div key={w.id} style={{ display: "flex", gap: "10px", marginBottom: "5px" }}>
              <input placeholder="Nombre" value={w.nombre} onChange={(e) => actualizarWifi(w.id, "nombre", e.target.value)} />
              <input placeholder="Clave" value={w.clave} onChange={(e) => actualizarWifi(w.id, "clave", e.target.value)} />
              <button onClick={() => eliminarWifi(w.id)} style={delBtn}>❌</button>
            </div>
          ))}
          <button onClick={agregarWifi} style={{ ...btnStyle, backgroundColor: "gray" }}>+ Agregar WiFi</button>

          <h3 style={{ marginTop: "1rem" }}>Personal</h3>
          {personal.map((p) => (
            <div key={p.id} style={{ display: "flex", gap: "10px", marginBottom: "5px" }}>
              <input placeholder="Nombre" value={p.nombre} onChange={(e) => actualizarPersonal(p.id, "nombre", e.target.value)} />
              <input placeholder="Correo" value={p.correo} onChange={(e) => actualizarPersonal(p.id, "correo", e.target.value)} />
              <button onClick={() => eliminarPersonal(p.id)} style={delBtn}>❌</button>
            </div>
          ))}
          <button onClick={agregarPersonal} style={{ ...btnStyle, backgroundColor: "gray" }}>+ Agregar Personal</button>
        </div>
      )}

      <table style={{ width: "100%", marginTop: "1rem", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#e0e0e0" }}>
            <th>ID</th><th>Tipo</th><th>Marca</th><th>Complementos</th><th>Estado</th><th>Fecha</th><th>Cantidad</th><th>Observaciones</th><th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td><input value={item.tipo} onChange={(e) => actualizarDato(item.id, "tipo", e.target.value)} /></td>
              <td><input value={item.marca} onChange={(e) => actualizarDato(item.id, "marca", e.target.value)} /></td>
              <td><input value={item.complementos} onChange={(e) => actualizarDato(item.id, "complementos", e.target.value)} /></td>
              <td>
                <select
                  value={item.estado}
                  onChange={(e) => actualizarDato(item.id, "estado", e.target.value)}
                  style={{ backgroundColor: getColor(item.estado), color: "white" }}
                >
                  <option value="Desconocido">Desconocido</option>
                  <option value="Reemplazar">Reemplazar</option>
                  <option value="Mejorar">Mejorar</option>
                  <option value="Mantener">Mantener</option>
                </select>
              </td>
              <td>{item.fecha}</td>
              <td><input type="number" min="1" value={item.cantidad} onChange={(e) => actualizarDato(item.id, "cantidad", e.target.value)} /></td>
              <td><input value={item.observaciones} onChange={(e) => actualizarDato(item.id, "observaciones", e.target.value)} /></td>
              <td>
                {item.guardado ? (
                  <>
                    <button onClick={() => actualizarEquipo(item.id)} style={{ ...btnStyle, backgroundColor: "#2196f3", marginBottom: "5px" }}>Actualizar</button>
                    <br />
                    <button onClick={() => eliminarEquipo(item.id)} style={delBtn}>🗑️</button>
                  </>
                ) : (
                  <button onClick={() => guardarEquipo(item.id)} style={{ ...btnStyle, backgroundColor: "green" }}>Guardar</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{ textAlign: "right", marginTop: "10px", fontWeight: "bold" }}>
        Total: {calcularTotal()}
      </p>

      <button
        title="Volver al inicio"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "10px 20px",
          backgroundColor: "#050576",
          color: "white",
          border: "none",
          borderRadius: "50%",
          fontSize: "1.5rem",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        ↑
      </button>
    </div>
  );
}

const btnStyle = {
  padding: "8px 15px",
  backgroundColor: "#050576",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const delBtn = {
  backgroundColor: "#f44336",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  padding: "5px 10px",
};

export default TablaInventario;