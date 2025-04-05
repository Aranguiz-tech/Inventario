import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase-config";
import InfoDepartamento from "./InfoDepartamento";
import FullScreenNotification from "./FullScreenNotification";
import ResumenInventario from "./ResumenInventario";
import { useTranslation } from "react-i18next";

function InventarioTable({ departamento, user }) {
  const { t } = useTranslation();
  const [datos, setDatos] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [notificacion, setNotificacion] = useState(null);
  const [confirmarEliminacion, setConfirmarEliminacion] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSavingId, setIsSavingId] = useState(null);
  const [isDeletingId, setIsDeletingId] = useState(null);

  const ruta = collection(db, "departamentos", departamento, "equipos");

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

  useEffect(() => {
    cargarDatos();
  }, [departamento]);

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

  const mostrarNotificacion = (mensaje) => {
    setNotificacion(mensaje);
    setTimeout(() => setNotificacion(null), 2000);
  };

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
        observaciones: equipo.observaciones,
        estados: {
          mantener: equipo.estados.mantener || 0,
          mejorar: equipo.estados.mejorar || 0,
          reemplazar: equipo.estados.reemplazar || 0,
        },
      };

      await updateDoc(doc(db, "departamentos", departamento, "equipos", id), datosParaGuardar);

      setDatos((prev) =>
        prev.map((d) =>
          d.id === id ? { ...d, editado: false, editandoObservacion: false } : d
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

  const confirmarEliminar = (id) => {
    if (isDeletingId) return;
    setConfirmarEliminacion(id);
  };

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

  const getBgColor = (estado) => {
    switch (estado) {
      case "mantener": return "#4CAF50";
      case "mejorar": return "#FF9800";
      case "reemplazar": return "#F44336";
      default: return "white";
    }
  };

  const filtrados = datos.filter((item) => {
    const texto = filtro.toLowerCase();
    return (
      (item.tipo || "").toLowerCase().includes(texto) ||
      (item.marca || "").toLowerCase().includes(texto) ||
      (item.observaciones || "").toLowerCase().includes(texto) ||
      (item.sala || "").toLowerCase().includes(texto)
    );
  });

  return (
    <div style={{ width: "100%", marginTop: "2rem", padding: "1rem", overflowX: "auto" }}>
      <h2 style={{ color: "#050576", textAlign: "center", fontSize: "clamp(1.2rem, 3vw, 2rem)" }}>
        {departamento ? t(`departments.${departamento}`) : t('selectDepartment')}
      </h2>

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

      {isLoading && <p style={{ textAlign: 'center', margin: '20px', color: '#050576' }}>{t('loadingData')}...</p>}

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
                      <td style={tdStyle}>{item.fecha}</td>
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
                                resize: "none", // <--- Cambio aplicado aquí
                                fontFamily: "inherit",
                              }}
                              disabled={operacionEnCurso}
                            />
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
                      <td style={tdStyle}><strong>{cantidad}</strong></td>
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

          <p style={{ textAlign: "right", marginTop: "10px", fontWeight: "bold" }}>
            {t("total")}: {calcularTotal()}
          </p>
          <ResumenInventario datos={datos} />
        </>
      )}

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
