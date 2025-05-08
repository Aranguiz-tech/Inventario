import { useEffect, useRef } from "react";
import {
  PieChart, Pie, Cell, BarChart, Bar,
  XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";
import { useTranslation } from "react-i18next";

function ResumenInventario({ datos }) {
  const { t } = useTranslation();
  const resumenRef = useRef();

  const resumenPorEstado = () => {
    const res = { mantener: 0, mejorar: 0, reemplazar: 0 };
    datos.forEach((item) => {
      Object.entries(item.estados || {}).forEach(([clave, valor]) => {
        res[clave] += parseInt(valor || 0);
      });
    });
    return Object.entries(res).map(([estado, cantidad]) => ({ estado: t(estado), cantidad }));
  };

  const resumenPorTipo = () => {
    const tipos = {};
    datos.forEach((item) => {
      const tipo = item.tipo?.trim();
      if (!tipo) return;
      const total = Object.values(item.estados || {}).reduce((a, b) => a + (parseInt(b) || 0), 0);
      tipos[tipo] = (tipos[tipo] || 0) + total;
    });
    return Object.entries(tipos).map(([tipo, cantidad]) => ({ tipo, cantidad }));
  };

  const colores = {
    mantener: "#4CAF50",
    mejorar: "#FF9800",
    reemplazar: "#F44336",
  };

  useEffect(() => {
    if (resumenRef.current) {
      resumenRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div ref={resumenRef} style={panelResumen}>
      <h3 style={titulo}>{t("summary")}</h3>
      <div style={contenedorGraficos}>
        <div style={contenedorGrafico}>
          <h4 style={titulo}>{t("equipmentByState")}</h4>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={resumenPorEstado()}
                dataKey="cantidad"
                nameKey="estado"
                outerRadius={80}
                label
              >
                {resumenPorEstado().map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={Object.values(colores)[index % 3]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div style={{ ...contenedorGrafico, height: "350px" }}>
          <h4 style={titulo}>{t("equipmentByType")}</h4>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={resumenPorTipo()}
              layout="vertical"
              margin={{ left: 100, right: 20, top: 10, bottom: 10 }}
            >
              <XAxis type="number" />
              <YAxis type="category" dataKey="tipo" />
              <Tooltip />
              <Bar dataKey="cantidad" fill="#050576" barSize={28} radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

const panelResumen = {
  marginTop: "2rem",
  backgroundColor: "#f9f9f9",
  borderRadius: "12px",
  padding: "2rem 1rem",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
};

const titulo = {
  textAlign: "center",
  color: "#050576",
};

const contenedorGraficos = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "40px",
};

const contenedorGrafico = {
  flex: "1 1 300px",
  maxWidth: "500px",
  height: "300px",
};

export default ResumenInventario;
