import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import { useTranslation } from "react-i18next";

function InventarioAgrupado({ departamento }) {
  const { t } = useTranslation();
  const [equipos, setEquipos] = useState([]);
  const [expandido, setExpandido] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!departamento) return;

    const cargarEquipos = async () => {
      setIsLoading(true);
      try {
        const ruta = collection(db, "departamentos", departamento, "equipos");
        const snap = await getDocs(ruta);
        const lista = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          estados: {
            mantener: parseInt(doc.data().estados?.mantener) || 0,
            mejorar: parseInt(doc.data().estados?.mejorar) || 0,
            reemplazar: parseInt(doc.data().estados?.reemplazar) || 0,
          },
        }));
        setEquipos(lista);
      } catch (e) {
        console.error("Error al cargar equipos:", e);
      } finally {
        setIsLoading(false);
      }
    };

    cargarEquipos();
  }, [departamento]);

  const agruparPorSala = () => {
    const agrupado = {};
    for (const item of equipos) {
      const sala = item.sala?.trim() || "Sin sala";
      if (!agrupado[sala]) agrupado[sala] = [];
      agrupado[sala].push(item);
    }
    return agrupado;
  };

  const totalEstados = (lista, estado) =>
    lista.reduce((sum, item) => sum + (parseInt(item.estados?.[estado]) || 0), 0);

  const toggleSala = (sala) => {
    setExpandido((prev) => ({ ...prev, [sala]: !prev[sala] }));
  };

  const agrupados = agruparPorSala();

  return (
    <div style={{ padding: "1rem" }}>
      <h2 style={{ textAlign: "center", color: "#050576" }}>{t("groupedInventory")}</h2>

      {isLoading ? (
        <p style={{ textAlign: "center" }}>{t("loadingData")}...</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#f0f0f0" }}>
              <th style={th}>{t("room")}</th>
              <th style={th}>{t("maintain")}</th>
              <th style={th}>{t("improve")}</th>
              <th style={th}>{t("replace")}</th>
              <th style={th}>{t("details")}</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(agrupados).map(([sala, items]) => {
              const mantener = totalEstados(items, "mantener");
              const mejorar = totalEstados(items, "mejorar");
              const reemplazar = totalEstados(items, "reemplazar");

              return (
                <tbody key={sala}>
                  <tr>
                    <td style={td}>{sala}</td>
                    <td style={{ ...td, backgroundColor: "#4CAF50", color: "white" }}>{mantener}</td>
                    <td style={{ ...td, backgroundColor: "#FF9800", color: "white" }}>{mejorar}</td>
                    <td style={{ ...td, backgroundColor: "#F44336", color: "white" }}>{reemplazar}</td>
                    <td style={td}>
                      <button onClick={() => toggleSala(sala)} style={btnStyle}>
                        {expandido[sala] ? "🔽" : "▶️"}
                      </button>
                    </td>
                  </tr>
                  {expandido[sala] && (
                    <tr>
                      <td colSpan="5">
                        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
                          <thead>
                            <tr style={{ backgroundColor: "#eee" }}>
                              <th style={th}>{t("type")}</th>
                              <th style={th}>{t("brand")}</th>
                              <th style={th}>{t("maintain")}</th>
                              <th style={th}>{t("improve")}</th>
                              <th style={th}>{t("replace")}</th>
                              <th style={th}>{t("notes")}</th>
                            </tr>
                          </thead>
                          <tbody>
                            {items.map((item) => (
                              <tr key={item.id}>
                                <td style={td}>{item.tipo}</td>
                                <td style={td}>{item.marca}</td>
                                <td style={{ ...td, backgroundColor: "#4CAF50", color: "white" }}>{item.estados.mantener}</td>
                                <td style={{ ...td, backgroundColor: "#FF9800", color: "white" }}>{item.estados.mejorar}</td>
                                <td style={{ ...td, backgroundColor: "#F44336", color: "white" }}>{item.estados.reemplazar}</td>
                                <td style={td}>{item.observaciones}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  )}
                </tbody>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

const th = {
  padding: "8px",
  borderBottom: "1px solid #ccc",
  textAlign: "left",
};

const td = {
  padding: "8px",
  borderBottom: "1px solid #eee",
};

const btnStyle = {
  backgroundColor: "#050576",
  color: "white",
  border: "none",
  padding: "6px 12px",
  borderRadius: "6px",
  cursor: "pointer",
};

export default InventarioAgrupado;
