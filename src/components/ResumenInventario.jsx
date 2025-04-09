import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import * as XLSX from "xlsx";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTranslation } from "react-i18next";
import FullScreenNotification from "./FullScreenNotification";

function ResumenInventario({ datos }) {
  const { t } = useTranslation();
  const refTabla = useRef();
  const resumenRef = useRef();
  const [mostrarResumen, setMostrarResumen] = useState(false);
  const [notificacion, setNotificacion] = useState("");

  const exportarExcel = () => {
    const datosLimpios = datos.map(({ id, editado, editandoObservacion, ...item }) => {
      const cantidad = Object.values(item.estados || {}).reduce((a, b) => a + (parseInt(b) || 0), 0);
      return {
        Sala: item.sala,
        Tipo: item.tipo,
        Marca: item.marca,
        Fecha: item.fecha,
        Mantener: item.estados?.mantener || 0,
        Mejorar: item.estados?.mejorar || 0,
        Reemplazar: item.estados?.reemplazar || 0,
        Observaciones: item.observaciones,
        Cantidad: cantidad,
      };
    });
    const ws = XLSX.utils.json_to_sheet(datosLimpios);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Inventario");
    XLSX.writeFile(wb, "inventario.xlsx");
    setNotificacion(t("exportExcel") + " ✅");
  };

  const exportarImagen = async () => {
    const tabla = document.querySelector("table");
    if (!tabla) return;
    try {
      const canvas = await html2canvas(tabla, {
        scale: 2,
        useCORS: true,
      });
      const link = document.createElement("a");
      link.download = "inventario.png";
      link.href = canvas.toDataURL();
      link.click();
      setNotificacion(t("downloadImage") + " ✅");
    } catch (error) {
      console.error("Error al exportar imagen:", error);
      setNotificacion("Error al exportar imagen ❌");
    }
  };

  const resumenEstados = () => {
    const estados = { mantener: 0, mejorar: 0, reemplazar: 0 };
    datos.forEach((item) => {
      Object.entries(item.estados || {}).forEach(([clave, valor]) => {
        estados[clave] += parseInt(valor || 0);
      });
    });
    return Object.entries(estados)
      .map(([estado, cantidad]) => ({ estado: t(estado), cantidad }))
      .filter((e) => e.cantidad > 0);
  };

  const resumenTipos = () => {
    const tipos = {};
    datos.forEach((item) => {
      if (!item.tipo) return;
      const tipo = item.tipo.trim();
      if (!tipo) return;
      const cantidad = Object.values(item.estados || {}).reduce(
        (a, b) => a + (parseInt(b) || 0), 0
      );
      if (cantidad > 0) {
        tipos[tipo] = (tipos[tipo] || 0) + cantidad;
      }
    });
    return Object.entries(tipos)
      .map(([tipo, cantidad]) => ({ tipo, cantidad }))
      .sort((a, b) => b.cantidad - a.cantidad);
  };

  const colores = {
    mantener: "#4CAF50",
    mejorar: "#FF9800",
    reemplazar: "#F44336"
  };

  const colorArray = [colores.mantener, colores.mejorar, colores.reemplazar];

  useEffect(() => {
    if (mostrarResumen && resumenRef.current) {
      resumenRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [mostrarResumen]);

  const calcularAltoGrafica = () => {
    const tiposData = resumenTipos();
    return Math.max(300, Math.min(tiposData.length * 50, 600));
  };

  return (
    <div style={{ marginTop: "2rem", padding: "0 1rem" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <button onClick={exportarExcel} style={boton} aria-label={t("exportExcel")}>
          📁 {t("exportExcel")}
        </button>
        <button onClick={exportarImagen} style={boton} aria-label={t("downloadImage")}>
          🖼️ {t("downloadImage")}
        </button>
        <button
          onClick={() => setMostrarResumen(!mostrarResumen)}
          style={boton}
          aria-label={t("summary")}
        >
          📊 {mostrarResumen ? t("hideMetrics") : t("showMetrics")}
        </button>
      </div>

      {mostrarResumen && (
        <div
          ref={(el) => {
            refTabla.current = el;
            resumenRef.current = el;
          }}
          style={{
            marginTop: "2rem",
            backgroundColor: "#f9f9f9",
            borderRadius: "12px",
            padding: "2rem 1rem",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            overflow: "hidden",
          }}
        >
          <h3 style={{ textAlign: "center", color: "#050576" }}>{t("summary")}</h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "40px",
              width: "100%",
              marginBottom: "20px",
            }}
          >
            <div style={{ flex: "1 1 300px", maxWidth: "400px", height: "300px" }}>
              <h4 style={{ textAlign: "center" }}>{t("equipmentByState")}</h4>
              {resumenEstados().length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={resumenEstados()}
                      dataKey="cantidad"
                      nameKey="estado"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {resumenEstados().map((entry, index) => {
                        const colorKey = entry.estado.toLowerCase();
                        return (
                          <Cell
                            key={`cell-${index}`}
                            fill={colores[colorKey] || colorArray[index % colorArray.length]}
                          />
                        );
                      })}
                    </Pie>
                    <Tooltip formatter={(value) => [value, t("quantity")]} />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <p style={{ textAlign: "center", color: "#666" }}>{t("noData")}</p>
              )}
            </div>

            <div style={{ flex: "1 1 400px", maxWidth: "600px", height: `${calcularAltoGrafica()}px` }}>
              <h4 style={{ textAlign: "center" }}>{t("equipmentByType")}</h4>
              {resumenTipos().length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={resumenTipos()}
                    layout="vertical"
                    margin={{ left: 100, right: 20, top: 10, bottom: 10 }}
                  >
                    <XAxis type="number" />
                    <YAxis
                      type="category"
                      dataKey="tipo"
                      width={90}
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip formatter={(value) => [value, t("quantity")]} />
                    <Bar
                      dataKey="cantidad"
                      fill="#050576"
                      barSize={24}
                      radius={[0, 4, 4, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <p style={{ textAlign: "center", color: "#666" }}>{t("noData")}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {notificacion && (
        <FullScreenNotification mensaje={notificacion} cerrar={() => setNotificacion("")} />
      )}
    </div>
  );
}

const boton = {
  padding: "10px 15px",
  borderRadius: "6px",
  backgroundColor: "#050576",
  color: "white",
  border: "none",
  cursor: "pointer",
  fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
  fontFamily: "Segoe UI, Tahoma, sans-serif",
  flex: "1 1 auto",
  transition: "background-color 0.3s",
};

export default ResumenInventario;
