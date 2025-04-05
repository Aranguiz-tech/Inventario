import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase-config"; // Asegúrate que la ruta a tu config de Firebase sea correcta
import InfoDepartamento from "./InfoDepartamento"; // Asegúrate que la ruta sea correcta
import FullScreenNotification from "./FullScreenNotification"; // Asegúrate que la ruta sea correcta
import ResumenInventario from "./ResumenInventario"; // Asegúrate que la ruta sea correcta
import { useTranslation } from "react-i18next";

function InventarioTable({ departamento, user }) {
  const { t } = useTranslation();
  const [datos, setDatos] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [notificacion, setNotificacion] = useState(null);
  const [confirmarEliminacion, setConfirmarEliminacion] = useState(null);

  // --- Estados para Feedback Visual ---
  const [isLoading, setIsLoading] = useState(false); // Para la carga inicial
  const [isSavingId, setIsSavingId] = useState(null); // ID del item guardándose
  const [isDeletingId, setIsDeletingId] = useState(null); // ID del item eliminándose

  // Referencia a la colección de Firestore
  const ruta = collection(db, "departamentos", departamento, "equipos");

  // --- Cargar Datos (con manejo de errores y estado de carga) ---
  const cargarDatos = async () => {
    if (!departamento) return;
    setIsLoading(true);
    setNotificacion(null);
    try {
      const consulta = await getDocs(ruta);
      setDatos(
        consulta.docs
          .map((d) => ({
            ...d.data(),
            id: d.id,
            editado: false,
            editandoObservacion: false,
            estados: {
              mantener: parseInt(d.data().estados?.mantener) || 0,
              mejorar: parseInt(d.data().estados?.mejorar) || 0,
              reemplazar: parseInt(d.data().estados?.reemplazar) || 0,
            },
          }))
          .sort((a, b) => (a.sala || "").localeCompare(b.sala || ""))
      );
    } catch (error) {
      console.error("Error al cargar datos:", error);
      mostrarNotificacion(t("errorFetchingData") + " ❌");
    } finally {
      setIsLoading(false);
    }
  };

  // Efecto para cargar datos cuando cambia el departamento
  useEffect(() => {
    cargarDatos();
  }, [departamento]);

  // --- Agregar Nuevo Equipo (con manejo de errores) ---
  const agregar = async () => {
    const nuevo = {
      sala: "",
      tipo: "",
      marca: "",
      fecha: new Date().toISOString().split("T")[0],
      observaciones: "",
      estados: { mantener: 0, mejorar: 0, reemplazar: 0 },
    };
    try {
      const ref = await addDoc(ruta, nuevo);
      setDatos((prev) =>
        [...prev, { ...nuevo, id: ref.id, editado: false, editandoObservacion: false }].sort((a, b) =>
          (a.sala || "").localeCompare(b.sala || "")
        )
      );
      mostrarNotificacion(t("addEquipment") + " ✅");
    } catch (error) {
      console.error("Error al agregar equipo:", error);
      mostrarNotificacion(t("errorAdding") + " ❌");
    }
  };

  // --- Mostrar Notificación Temporal ---
  const mostrarNotificacion = (mensaje) => {
    setNotificacion(mensaje);
    setTimeout(() => setNotificacion(null), 2000);
  };

  // --- Marcar Campo como Editado (actualiza estado local) ---
  const marcarEditado = (id, campo, valor) => {
    setDatos((prev) =>
      prev.map((d) =>
        d.id === id
          ? {
              ...d,
              [campo]: ["sala", "tipo", "marca", "fecha", "observaciones"].includes(campo)
                ? valor
                : d[campo],
              estados: ["mantener", "mejorar", "reemplazar"].includes(campo)
                ? { ...d.estados, [campo]: parseInt(valor) || 0 }
                : d.estados,
              editandoObservacion: campo === "editandoObservacion" ? valor : d.editandoObservacion,
              editado: true,
            }
          : d
      )
    );
  };

  // --- Guardar Cambios (con manejo de errores y estado de carga) ---
  const guardar = async (id) => {
    const equipo = datos.find((d) => d.id === id);
    if (!equipo || !equipo.editado) return;

    setIsSavingId(id);
    setNotificacion(null);
    try {
      const datosParaGuardar = {
        sala: equipo.sala,
        tipo: equipo.tipo,
        marca: equipo.marca,
        fecha: equipo.fecha,
        observaciones: equipo.observaciones, // Asegura que las observaciones se incluyan
        estados: {
          mantener: equipo.estados.mantener || 0,
          mejorar: equipo.estados.mejorar || 0,
          reemplazar: equipo.estados.reemplazar || 0,
        },
      };

      await updateDoc(doc(db, "departamentos", departamento, "equipos", id), datosParaGuardar);

      setDatos((prev) =>
        prev.map((d) =>
          d.id === id ? { ...d, editado: false, editandoObservacion: false } : d // Resetea editado y editandoObservacion
        ).sort((a, b) => (a.sala || "").localeCompare(b.sala || ""))
      );

      mostrarNotificacion(t("saved") + " ✅");
    } catch (error) {
      console.error("Error al guardar:", error);
      mostrarNotificacion(t("errorSaving") + " ❌");
    } finally {
      setIsSavingId(null);
    }
  };

  // --- Iniciar Proceso de Eliminación (muestra confirmación) ---
  const confirmarEliminar = (id) => {
    if (isDeletingId) return;
    setConfirmarEliminacion(id);
  };

  // --- Eliminar Equipo (con manejo de errores y estado de carga) ---
  const eliminar = async () => {
    if (!confirmarEliminacion) return;

    setIsDeletingId(confirmarEliminacion);
    setNotificacion(null);
    try {
      await deleteDoc(doc(db, "departamentos", departamento, "equipos", confirmarEliminacion));
      setDatos((prev) => prev.filter((d) => d.id !== confirmarEliminacion));
      mostrarNotificacion(t("deleted") + " ✅");
    } catch (error) {
      console.error("Error al eliminar:", error);
      mostrarNotificacion(t("errorDeleting") + " ❌");
    } finally {
      setIsDeletingId(null);
      setConfirmarEliminacion(null);
    }
  };

  // --- Calcular Total de Equipos ---
  const calcularTotal = () =>
    datos.reduce(
      (suma, item) =>
        suma +
        Object.values(item.estados || {}).reduce(
          (a, b) => a + (parseInt(b) || 0),
          0
        ),
      0
    );

  // --- Obtener Color de Fondo para Inputs de Estado ---
  const getBgColor = (estado) => {
    switch (estado) {
      case "mantener": return "#4CAF50";
      case "mejorar": return "#FF9800";
      case "reemplazar": return "#F44336";
      default: return "white";
    }
  };

  // --- Filtrar Datos según Input de Búsqueda ---
  const filtrados = datos.filter((item) => {
    const texto = filtro.toLowerCase();
    return (
      (item.tipo || "").toLowerCase().includes(texto) ||
      (item.marca || "").toLowerCase().includes(texto) ||
      (item.observaciones || "").toLowerCase().includes(texto) ||
      (item.sala || "").toLowerCase().includes(texto)
    );
  });

  // --- Renderizado del Componente ---
  return (
    <div style={{ width: "100%", marginTop: "2rem", padding: "1rem", overflowX: "auto" }}>
      <h2 style={{ color: "#050576", textAlign: "center", fontSize: "clamp(1.2rem, 3vw, 2rem)" }}>
        {departamento ? t(`departments.${departamento}`) : t('selectDepartment')}
      </h2>

      {/* Barra de Acciones */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center", alignItems: "center", marginBottom: "1rem" }}>
        <button onClick={agregar} style={btnStyle} disabled={isLoading || !departamento}>
          + {t("addEquipment")}
        </button>
        {departamento && <InfoDepartamento departamento={departamento} user={user} />}
        <input
          type="text"
          placeholder={t("search")}
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          style={{ ...inputEstilo, minWidth: "180px", flex: "1 1 250px" }}
          disabled={isLoading || !departamento}
        />
      </div>

      {/* Indicador de Carga Inicial */}
      {isLoading && <p style={{ textAlign: 'center', margin: '20px', color: '#050576' }}>{t('loadingData')}...</p>}

      {/* Tabla de Inventario */}
      {!isLoading && departamento && (
        <>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "1000px" }}>
              <thead>
                <tr style={{ backgroundColor: "#e0e0e0" }}>
                  {["room", "type", "brand", "date", "maintain", "improve", "replace", "notes", "quantity", "save", "delete"].map((clave) => (
                    <th key={clave} style={thStyle}>{t(clave)}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtrados.map((item) => {
                  const cantidad = Object.values(item.estados).reduce((a, b) => a + (parseInt(b) || 0), 0);
                  const guardandoEsteItem = isSavingId === item.id;
                  const eliminandoEsteItem = isDeletingId === item.id;
                  const operacionEnCurso = guardandoEsteItem || eliminandoEsteItem;

                  return (
                    <tr key={item.id} style={{ fontSize: "clamp(0.8rem, 1.2vw, 1rem)", opacity: operacionEnCurso ? 0.6 : 1 }}>
                      {/* Celdas Editables */}
                      {["sala", "tipo", "marca"].map((campo) => (
                        <td key={campo} style={tdStyle}>
                          <input
                            style={inputEstilo}
                            value={item[campo]}
                            onChange={(e) => marcarEditado(item.id, campo, e.target.value)}
                            placeholder={t(campo)}
                            disabled={operacionEnCurso}
                          />
                        </td>
                      ))}
                      {/* Celda Fecha */}
                      <td style={tdStyle}>{item.fecha}</td>
                      {/* Celdas Estados */}
                      {["mantener", "mejorar", "reemplazar"].map((estado) => (
                        <td key={estado} style={tdStyle}>
                          <input
                            type="number"
                            min={0}
                            style={{
                              ...inputEstilo,
                              backgroundColor: getBgColor(estado),
                              color: "white",
                              fontWeight: "bold",
                              width: "60px",
                            }}
                            value={item.estados[estado]}
                            onChange={(e) => {
                              const val = parseInt(e.target.value);
                              if (!isNaN(val) && val >= 0) {
                                marcarEditado(item.id, estado, val);
                              } else if (e.target.value === "") {
                                marcarEditado(item.id, estado, 0);
                              }
                            }}
                            disabled={operacionEnCurso}
                          />
                        </td>
                      ))}
                      {/* Celda Observaciones (SIN botón guardar extra) */}
                      <td style={tdStyle}>
                        {item.editandoObservacion ? (
                          <>
                            <textarea
                              value={item.observaciones}
                              onChange={(e) => marcarEditado(item.id, "observaciones", e.target.value)}
                              placeholder={t("enterNotes")}
                              style={{
                                width: "100%",
                                minHeight: "60px",
                                padding: "6px",
                                borderRadius: "6px",
                                border: "1px solid #ccc",
                                resize: "vertical",
                                fontFamily: "inherit",
                              }}
                              disabled={operacionEnCurso}
                            />
                            {/* Botón Guardar eliminado de aquí */}
                          </>
                        ) : (
                          <>
                            <p style={{ margin: 0, whiteSpace: "pre-wrap", minHeight: '40px', textAlign: 'left' }}>
                              {item.observaciones?.trim() ? item.observaciones : <span style={{color: '#888'}}>{t("noObservations")}</span>}
                            </p>
                            <button
                              onClick={() => marcarEditado(item.id, "editandoObservacion", true)}
                              style={{ ...btnStyle, marginTop: "6px", backgroundColor: "#ffc107", color: "#333" }}
                              disabled={operacionEnCurso}
                            >
                              ✍️ {t("edit")}
                            </button>
                          </>
                        )}
                      </td>
                      {/* Celda Cantidad */}
                      <td style={tdStyle}><strong>{cantidad}</strong></td>
                      {/* Celda Botón Guardar Principal */}
                      <td style={tdStyle}>
                        <button
                          onClick={() => guardar(item.id)}
                          style={{
                            ...guardarBtn,
                            opacity: item.editado && !guardandoEsteItem ? 1 : 0.4,
                            cursor: item.editado && !guardandoEsteItem ? "pointer" : "not-allowed",
                          }}
                          disabled={!item.editado || operacionEnCurso}
                          title={!item.editado ? t("errorNoChanges") : (guardandoEsteItem ? t("saving") : t("save"))}
                        >
                          {guardandoEsteItem ? t("saving") + "..." : '💾'}
                        </button>
                      </td>
                      {/* Celda Botón Eliminar */}
                      <td style={tdStyle}>
                        <button
                          onClick={() => confirmarEliminar(item.id)}
                          style={{
                            ...delBtn,
                             opacity: !eliminandoEsteItem ? 1 : 0.4,
                             cursor: !eliminandoEsteItem ? "pointer" : "not-allowed",
                          }}
                          disabled={operacionEnCurso}
                          title={eliminandoEsteItem ? t("deleting") : t("delete")}
                        >
                          {eliminandoEsteItem ? t("deleting") + "..." : '🗑️'}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Total General y Resumen */}
          <p style={{ textAlign: "right", marginTop: "10px", fontWeight: "bold" }}>
            {t("total")}: {calcularTotal()}
          </p>
          <ResumenInventario datos={datos} />
        </>
      )}

      {/* Notificaciones y Confirmación */}
      {notificacion && (
        <FullScreenNotification mensaje={notificacion} cerrar={() => setNotificacion(null)} />
      )}
      {confirmarEliminacion && !isDeletingId && (
        <FullScreenNotification
          mensaje={t("deleteConfirmation")}
          confirmar={eliminar}
          cancelar={() => setConfirmarEliminacion(null)}
          esConfirmacion
        />
      )}
    </div>
  );
}

// --- Estilos (sin cambios) ---
const inputEstilo = {
  padding: "6px",
  fontSize: "1rem",
  borderRadius: "6px",
  border: "1px solid #ccc",
  textAlign: "center",
  fontFamily: "inherit",
  width: "100%",
  boxSizing: 'border-box',
};

const thStyle = {
  padding: "8px",
  fontSize: "0.9rem",
  textAlign: "center",
  whiteSpace: "nowrap",
  borderBottom: '2px solid #ccc',
};

const tdStyle = {
  padding: "8px",
  textAlign: "center",
  verticalAlign: "middle",
  borderBottom: '1px solid #eee',
};

const btnStyle = {
  padding: "8px 16px",
  fontSize: "1rem",
  borderRadius: "6px",
  backgroundColor: "#050576",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  transition: 'opacity 0.2s ease-in-out, background-color 0.2s ease-in-out',
};

const guardarBtn = {
  ...btnStyle,
  backgroundColor: "#2e7d32",
};

const delBtn = {
  ...btnStyle,
  backgroundColor: "#f44336",
};

export default InventarioTable;
