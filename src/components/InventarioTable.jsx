// InventarioTable.jsx
import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase-config";
import FullScreenNotification from "./FullScreenNotification";
import InfoDepartamento from "./InfoDepartamento";
import ResumenInventario from "./ResumenInventario";
import html2canvas from "html2canvas";
import * as XLSX from "xlsx";
import { useTranslation } from "react-i18next";

function InventarioTable({ departamento, user }) {
  const { t } = useTranslation();
  const [salas, setSalas] = useState([]);
  const [datos, setDatos] = useState([]);
  const [notificacion, setNotificacion] = useState(null);
  const [expandido, setExpandido] = useState({});
  const [mostrarResumen, setMostrarResumen] = useState(false);
  const [mostrarModalSala, setMostrarModalSala] = useState(false);
  const [nuevaSalaNombre, setNuevaSalaNombre] = useState("");
  const [salaAEliminar, setSalaAEliminar] = useState(null);
  const [equipoAEliminar, setEquipoAEliminar] = useState(null);

  useEffect(() => {
    if (!departamento) return;
    const cargarDatos = async () => {
      const snapEquipos = await getDocs(collection(db, "departamentos", departamento, "equipos"));
      const equipos = snapEquipos.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          editado: false,
          estados: {
            mantener: parseInt(data.estados?.mantener || 0),
            mejorar: parseInt(data.estados?.mejorar || 0),
            reemplazar: parseInt(data.estados?.reemplazar || 0),
          },
        };
      });
      setDatos(equipos);

      const snapSalas = await getDocs(collection(db, "departamentos", departamento, "salas"));
      const nombresSalas = snapSalas.docs.map((doc) => doc.id);
      setSalas(nombresSalas.sort((a, b) => a.localeCompare(b)));

      setMostrarResumen(false);
    };
    cargarDatos();
  }, [departamento]);

  const editar = (id) => {
    setDatos((prev) => prev.map((d) => (d.id === id ? { ...d, editado: true } : d)));
  };

  const agregarSala = () => setMostrarModalSala(true);

  const confirmarAgregarSala = async () => {
    const nombre = nuevaSalaNombre.trim();
    if (nombre && !salas.includes(nombre)) {
      await setDoc(doc(db, "departamentos", departamento, "salas", nombre), { nombre });
      setSalas([...salas, nombre].sort((a, b) => a.localeCompare(b)));
      setNotificacion(t("saved"));
    }
    setNuevaSalaNombre("");
    setMostrarModalSala(false);
  };

  const confirmarEliminarSala = async () => {
    const equiposEnSala = datos.filter((d) => d.sala === salaAEliminar);
    for (const equipo of equiposEnSala) {
      await deleteDoc(doc(db, "departamentos", departamento, "equipos", equipo.id));
    }
    await deleteDoc(doc(db, "departamentos", departamento, "salas", salaAEliminar));
    setDatos(datos.filter((d) => d.sala !== salaAEliminar));
    setSalas(salas.filter((s) => s !== salaAEliminar));
    setSalaAEliminar(null);
    setNotificacion(t("deleted"));
  };

  const confirmarEliminarEquipo = async () => {
    if (!equipoAEliminar) return;
    await deleteDoc(doc(db, "departamentos", departamento, "equipos", equipoAEliminar));
    setDatos(datos.filter((d) => d.id !== equipoAEliminar));
    setEquipoAEliminar(null);
    setNotificacion(t("deleted"));
  };

  const agregarEquipo = async (sala) => {
    const nuevo = {
      sala,
      tipo: "",
      marca: "",
      observaciones: "",
      estados: { mantener: 0, mejorar: 0, reemplazar: 0 },
    };
    const ref = await addDoc(collection(db, "departamentos", departamento, "equipos"), nuevo);
    setDatos([...datos, { ...nuevo, id: ref.id, editado: true }]);
  };

  const guardar = async (id) => {
    const item = datos.find((d) => d.id === id);
    if (!item) return;
    await updateDoc(doc(db, "departamentos", departamento, "equipos", id), item);
    setDatos((prev) => prev.map((d) => (d.id === id ? { ...d, editado: false } : d)));
    setNotificacion(t("saved"));
  };

  const setEstado = (id, estado) => {
    setDatos((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        const nuevosEstados = { mantener: 0, mejorar: 0, reemplazar: 0 };
        nuevosEstados[estado] = 1;
        return { ...item, estados: nuevosEstados, editado: true };
      })
    );
  };

  const exportarExcel = () => {
    const datosLimpios = datos.map(({ id, editado, ...rest }) => {
      const cantidad = Object.values(rest.estados || {}).reduce((a, b) => a + (parseInt(b) || 0), 0);
      return {
        [t("total")]: cantidad,
        [t("type")]: rest.tipo,
        [t("brand")]: rest.marca,
        [t("notes")]: rest.observaciones,
        [t("maintain")]: rest.estados?.mantener || 0,
        [t("improve")]: rest.estados?.mejorar || 0,
        [t("replace")]: rest.estados?.reemplazar || 0,
      };
    });
    const ws = XLSX.utils.json_to_sheet(datosLimpios);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Inventario");
    XLSX.writeFile(wb, "inventario.xlsx");
    setNotificacion("✅ " + t("exportExcel"));
  };

  const exportarImagen = async () => {
    const activas = Object.entries(expandido).filter(([_, val]) => val);
    if (activas.length === 0) {
      setNotificacion("❌ " + t("errorNoQuantity"));
      return;
    }
    try {
      const nodo = document.querySelector(`[data-sala="${activas[0][0]}"]`);
      if (!nodo) throw new Error("No se encontró la sala expandida");
      const canvas = await html2canvas(nodo, { scale: 2 });
      const link = document.createElement("a");
      link.download = "inventario.png";
      link.href = canvas.toDataURL();
      link.click();
      setNotificacion("✅ " + t("downloadImage"));
    } catch (err) {
      console.error("Error:", err);
      setNotificacion("❌ Error al generar imagen");
    }
  };

  const colores = {
    mantener: "#4CAF50",
    mejorar: "#FF9800",
    reemplazar: "#F44336",
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2 style={{ color: "#050576", textAlign: "center" }}>{t("summary")}</h2>

      <div style={{ marginBottom: "1.5rem", display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        <button onClick={agregarSala} style={btn}>➕ {t("addRoom")}</button>
        <button onClick={exportarExcel} style={btn}>{t("exportExcel")} 📁</button>
        <button onClick={exportarImagen} style={btn}>{t("downloadImage")} 🖼️</button>
        <button onClick={() => setMostrarResumen(!mostrarResumen)} style={btn}>
          {mostrarResumen ? t("hideMetrics") : t("showMetrics")} 📊
        </button>
      </div>

      {salas.map((sala) => {
        const items = datos.filter((d) => d.sala === sala).sort((a, b) => a.tipo.localeCompare(b.tipo));
        return (
          <div key={sala} style={bloqueSala} data-sala={sala}>
            <div style={cabeceraSala}>
              <h3>{sala}</h3>
              <div style={{ display: "flex", gap: "10px" }}>
                <InfoDepartamento departamento={sala} user={user} />
                <button onClick={() => setExpandido((prev) => ({ ...prev, [sala]: !prev[sala] }))} style={btnToggle}>
                  {expandido[sala] ? "🔼" : "🔽"}
                </button>
                <button onClick={() => setSalaAEliminar(sala)} style={btnBorrar}>🗑️</button>
              </div>
            </div>
            {expandido[sala] && (
              <div>
                {items.map((item) => (
                  <div key={item.id} style={filaEquipo}>
                    <input
                      disabled={!item.editado}
                      value={item.tipo}
                      onChange={(e) => setDatos((prev) => prev.map((d) => (d.id === item.id ? { ...d, tipo: e.target.value } : d)))}
                      placeholder={t("type")}
                      style={input}
                    />
                    <input
                      disabled={!item.editado}
                      value={item.marca}
                      onChange={(e) => setDatos((prev) => prev.map((d) => (d.id === item.id ? { ...d, marca: e.target.value } : d)))}
                      placeholder={t("brand")}
                      style={input}
                    />
                    <div style={estados}>
                      {Object.keys(colores).map((estado) => (
                        <button
                          key={estado}
                          onClick={() => setEstado(item.id, estado)}
                          style={{ ...btnEstado, backgroundColor: item.estados[estado] === 1 ? colores[estado] : "#ccc" }}
                          disabled={!item.editado}
                        >
                          {t(estado)}
                        </button>
                      ))}
                    </div>
                    <textarea
                      disabled={!item.editado}
                      value={item.observaciones}
                      onChange={(e) => setDatos((prev) => prev.map((d) => (d.id === item.id ? { ...d, observaciones: e.target.value } : d)))}
                      placeholder={t("notes")}
                      style={input}
                    />
                    {!item.editado ? (
                      <button onClick={() => editar(item.id)} style={btn}>✏️</button>
                    ) : (
                      <button onClick={() => guardar(item.id)} style={btn}>💾</button>
                    )}
                    <button onClick={() => setEquipoAEliminar(item.id)} style={btnBorrar}>🗑️</button>
                  </div>
                ))}
                <button onClick={() => agregarEquipo(sala)} style={{ ...btn, marginTop: "10px" }}>
                  ➕ {t("addEquipment")}
                </button>
              </div>
            )}
          </div>
        );
      })}

      {mostrarResumen && <ResumenInventario datos={datos} />}

      {mostrarModalSala && (
        <FullScreenNotification autodestructiva={false} cerrar={() => setMostrarModalSala(false)} mensaje={
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <p style={{ fontSize: "1.1rem" }}>{t("Nombre de la nueva sala:")}</p>
            <input
              value={nuevaSalaNombre}
              onChange={(e) => setNuevaSalaNombre(e.target.value)}
              style={{ padding: "10px", fontSize: "1rem", border: "1px solid #ccc", borderRadius: "6px" }}
            />
            <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
              <button style={btn} onClick={confirmarAgregarSala}>{t("addRoom")}</button>
              <button style={btnBorrar} onClick={() => setMostrarModalSala(false)}>{t("cancel")}</button>
            </div>
          </div>
        } />
      )}

      {salaAEliminar && (
        <FullScreenNotification
          mensaje={t("¿Seguro que deseas eliminar esta sala y todos sus equipos?")}
          cerrar={() => setSalaAEliminar(null)}
          confirmar={confirmarEliminarSala}
          cancelar={() => setSalaAEliminar(null)}
          esConfirmacion={true}
          autodestructiva={false}
        />
      )}

      {equipoAEliminar && (
        <FullScreenNotification
          mensaje={t("¿Seguro que deseas eliminar este equipo?")}
          cerrar={() => setEquipoAEliminar(null)}
          confirmar={confirmarEliminarEquipo}
          cancelar={() => setEquipoAEliminar(null)}
          esConfirmacion={true}
          autodestructiva={false}
        />
      )}

      {notificacion && (
        <FullScreenNotification mensaje={notificacion} cerrar={() => setNotificacion(null)} />
      )}
    </div>
  );
}

const btn = {
  backgroundColor: "#050576",
  color: "white",
  padding: "8px 12px",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
};

const btnToggle = {
  backgroundColor: "#ccc",
  color: "#000",
  border: "none",
  borderRadius: "6px",
  padding: "8px 12px",
  fontSize: "1.1rem",
  cursor: "pointer",
  fontWeight: "bold",
  minWidth: "40px",
  height: "40px",
};

const btnBorrar = {
  ...btn,
  backgroundColor: "#f44336",
};

const bloqueSala = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "10px",
  marginBottom: "20px",
};

const cabeceraSala = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "10px",
};

const filaEquipo = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  marginBottom: "10px",
};

const input = {
  padding: "6px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontFamily: "inherit",
  flex: "1",
};

const estados = {
  display: "flex",
  gap: "5px",
};

const btnEstado = {
  border: "none",
  padding: "6px 10px",
  borderRadius: "6px",
  color: "white",
  cursor: "pointer",
};

export default InventarioTable;