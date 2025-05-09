import { useEffect, useRef, useState } from "react";
import {
  getDocs,
  setDoc,
  deleteDoc,
  doc,
  collection,
} from "firebase/firestore";
import { db } from "../firebase-config";
import { useTranslation } from "react-i18next";
import FullScreenNotification from "./FullScreenNotification";

function EditarDepartamentos({ user, cerrar }) {
  const { t } = useTranslation();
  const [departamentos, setDepartamentos] = useState([]);
  const [nuevoEs, setNuevoEs] = useState("");
  const [nuevoEn, setNuevoEn] = useState("");
  const [selectRenombrar, setSelectRenombrar] = useState("");
  const [renombrarEs, setRenombrarEs] = useState("");
  const [renombrarEn, setRenombrarEn] = useState("");
  const [confirmarEliminar, setConfirmarEliminar] = useState(null);
  const [notificacion, setNotificacion] = useState("");
  const fondoRef = useRef();

  useEffect(() => {
    cargarDepartamentos();
    document.addEventListener("keydown", cerrarEscape);
    return () => document.removeEventListener("keydown", cerrarEscape);
  }, []);

  const cerrarEscape = (e) => {
    if (e.key === "Escape") cerrar();
  };

  const cerrarClicAfuera = (e) => {
    if (fondoRef.current && e.target === fondoRef.current) cerrar();
  };

  const cargarDepartamentos = async () => {
    const snap = await getDocs(collection(db, "departamentos"));
    const lista = snap.docs.map((doc) => {
      const d = doc.data();
      return { id: doc.id, nombre_es: d.nombre_es || doc.id, nombre_en: d.nombre_en || doc.id };
    });
    setDepartamentos(lista);
  };

  const crearDepartamento = async () => {
    if (!nuevoEs.trim() || !nuevoEn.trim()) return;
    const id = nuevoEs.toLowerCase().replace(/\s+/g, "_");
    await setDoc(doc(db, "departamentos", id), {
      nombre_es: nuevoEs,
      nombre_en: nuevoEn,
    });
    setNuevoEs("");
    setNuevoEn("");
    setNotificacion("✅ " + t("saved"));
    cargarDepartamentos();
  };

  const renombrar = async () => {
    if (!selectRenombrar || !renombrarEs.trim() || !renombrarEn.trim()) return;
    await setDoc(doc(db, "departamentos", selectRenombrar), {
      nombre_es: renombrarEs,
      nombre_en: renombrarEn,
    });
    setRenombrarEs("");
    setRenombrarEn("");
    setSelectRenombrar("");
    setNotificacion("✅ " + t("renamed"));
    cargarDepartamentos();
  };

  const eliminar = async () => {
    await deleteDoc(doc(db, "departamentos", confirmarEliminar));
    setConfirmarEliminar(null);
    setNotificacion("🗑️ " + t("deleted"));
    cargarDepartamentos();
  };

  return (
    <div
      ref={fondoRef}
      onClick={cerrarClicAfuera}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "10px",
          width: "100%",
          maxWidth: "600px",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <h2 style={{ color: "#050576", marginBottom: "1rem" }}>🛠️ {t("editDepartments")}</h2>

        <h4>{t("addDepartment")}</h4>
        <input
          value={nuevoEs}
          onChange={(e) => setNuevoEs(e.target.value)}
          placeholder={t("newDepartmentNameEs")}
          style={input}
        />
        <input
          value={nuevoEn}
          onChange={(e) => setNuevoEn(e.target.value)}
          placeholder={t("newDepartmentNameEn")}
          style={input}
        />
        <button onClick={crearDepartamento} style={btn}>➕ {t("add")}</button>

        <hr style={{ margin: "2rem 0" }} />

        <h4>{t("renameDepartment")}</h4>
        <select
          value={selectRenombrar}
          onChange={(e) => setSelectRenombrar(e.target.value)}
          style={{ ...input, fontWeight: "bold" }}
        >
          <option value="">{t("selectDepartment")}</option>
          {departamentos.map((d) => (
            <option key={d.id} value={d.id}>
              {d.nombre_es} ({d.nombre_en})
            </option>
          ))}
        </select>
        <input
          value={renombrarEs}
          onChange={(e) => setRenombrarEs(e.target.value)}
          placeholder={t("newDepartmentNameEs")}
          style={input}
        />
        <input
          value={renombrarEn}
          onChange={(e) => setRenombrarEn(e.target.value)}
          placeholder={t("newDepartmentNameEn")}
          style={input}
        />
        <button onClick={renombrar} style={btn}>✏️ {t("rename")}</button>

        <hr style={{ margin: "2rem 0" }} />

        <h4>🗑️ {t("deleteDepartment")}</h4>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {departamentos.map((d) => (
            <li key={d.id} style={fila}>
              {d.nombre_es} ({d.nombre_en})
              <button onClick={() => setConfirmarEliminar(d.id)} style={btnBorrar}>🗑️</button>
            </li>
          ))}
        </ul>

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <button onClick={cerrar} style={btnCancelar}>❌ {t("close")}</button>
        </div>
      </div>

      {confirmarEliminar && (
        <FullScreenNotification
          mensaje={t("confirmDeleteDepartment")}
          cerrar={() => setConfirmarEliminar(null)}
          confirmar={eliminar}
          cancelar={() => setConfirmarEliminar(null)}
          esConfirmacion={true}
        />
      )}

      {notificacion && (
        <FullScreenNotification mensaje={notificacion} cerrar={() => setNotificacion("")} />
      )}
    </div>
  );
}

const input = {
  padding: "10px",
  margin: "6px 0",
  borderRadius: "6px",
  border: "1px solid #ccc",
  width: "100%",
};

const btn = {
  marginTop: "10px",
  backgroundColor: "#050576",
  color: "white",
  border: "none",
  padding: "10px 16px",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold",
};

const btnCancelar = {
  ...btn,
  backgroundColor: "#999",
};

const btnBorrar = {
  backgroundColor: "#f44336",
  color: "white",
  border: "none",
  padding: "6px 12px",
  borderRadius: "6px",
  marginLeft: "10px",
  cursor: "pointer",
};

const fila = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "6px 0",
  borderBottom: "1px solid #eee",
};

export default EditarDepartamentos;
