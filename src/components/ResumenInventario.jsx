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
    const datosLimpios = datos.map(({ id, ...item }) => {
      const cantidad = Object.values(item.estados || {}).reduce((a, b) => a + (parseInt(b) || 0), 0);
      return {
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
    setNotificacion("Excel exportado correctamente");
  };

  const exportarImagen = async () => {
    const tabla = document.querySelector("table");
    if (!tabla) return;
    const canvas = await html2canvas(tabla, {
      scale: 2,
      useCORS: true,
    });
    const link = document.createElement("a");
    link.download = "inventario.png";
    link.href = canvas.toDataURL();
    link.click();
    setNotificacion("Imagen exportada correctamente");
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
      .filter((e) => !isNaN(e.cantidad) && e.cantidad > 0);
  };

  const resumenTipos = () => {
    const tipos = {};
    datos.forEach((item) => {
      const tipo = item.tipo || "";
      const cantidad = Object.values(item.estados || {}).reduce((a, b) => a + (parseInt(b) || 0), 0);
      tipos[tipo] = (tipos[tipo] || 0) + cantidad;
    });
    return Object.entries(tipos).map(([tipo, cantidad]) => ({ tipo, cantidad }));
  };

  const colores = ["#4CAF50", "#FFA726", "#EF5350"];

  useEffect(() => {
    if (mostrarResumen && resumenRef.current) {
      resumenRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [mostrarResumen]);

  return (
    <div style={{ marginTop: "2rem" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
        <button onClick={exportarExcel} style={boton}>📁 {t("exportExcel")}</button>
        <button onClick={exportarImagen} style={boton}>🖼️ {t("downloadImage")}</button>
        <button onClick={() => setMostrarResumen(!mostrarResumen)} style={boton}>
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
            padding: "2rem",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            maxHeight: "auto",
            overflow: "hidden",
          }}
        >
          <h3 style={{ textAlign: "center", color: "#050576" }}>{t("summary")}</h3>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "40px" }}>
            <div style={{ width: "300px", height: "300px" }}>
              <h4 style={{ textAlign: "center" }}>{t("equipmentByState")}</h4>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={resumenEstados()}
                    dataKey="cantidad"
                    nameKey="estado"
                    outerRadius={100}
                    label
                  >
                    {resumenEstados().map((_, i) => (
                      <Cell key={i} fill={colores[i]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div style={{ width: "500px", height: `${Math.max(300, resumenTipos().length * 30)}px` }}>
              <h4 style={{ textAlign: "center" }}>{t("equipmentByType")}</h4>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={resumenTipos()} layout="vertical" margin={{ left: 40 }}>
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="tipo" width={120} />
                  <Tooltip />
                  <Bar dataKey="cantidad" fill="#050576" barSize={24} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      {notificacion && <FullScreenNotification mensaje={notificacion} cerrar={() => setNotificacion("")} />}
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
  fontSize: "1rem",
  fontFamily: "Segoe UI, Tahoma, sans-serif",
};

export default ResumenInventario;
