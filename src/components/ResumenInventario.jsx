import { useEffect, useRef } from "react";
import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, Legend
} from "recharts";
import { useTranslation } from "react-i18next";

function ResumenInventario({ datos }) {
  const { t } = useTranslation();
  const resumenRef = useRef();

  const colores = {
    mantener: "#4CAF50",
    mejorar: "#FF9800",
    reemplazar: "#F44336",
  };

  const resumenPorEstado = () => {
    const res = { mantener: 0, mejorar: 0, reemplazar: 0 };
    datos.forEach((item) => {
      Object.entries(item.estados || {}).forEach(([clave, valor]) => {
        res[clave] += parseInt(valor || 0);
      });
    });
    return Object.entries(res)
      .filter(([_, cantidad]) => cantidad > 0)
      .map(([estado, cantidad]) => ({
        estado: t(estado),
        cantidad,
        color: colores[estado],
      }));
  };

  const resumenPorTipo = () => {
    const tipos = {};
    datos.forEach((item) => {
      const tipo = item.tipo?.trim();
      if (!tipo) return;
      const total = Object.values(item.estados || {}).reduce((a, b) => a + (parseInt(b) || 0), 0);
      if (total > 0) {
        tipos[tipo] = (tipos[tipo] || 0) + total;
      }
    });

    return Object.entries(tipos)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([tipo, cantidad]) => ({ tipo, cantidad }));
  };

  const resumenAgrupadoPorSala = () => {
    const mapa = {};

    datos.forEach((item) => {
      const sala = item.sala?.trim();
      const tipo = item.tipo?.trim();
      if (!sala || !tipo) return;

      const total = Object.values(item.estados || {}).reduce((a, b) => a + (parseInt(b) || 0), 0);
      if (total <= 0) return;

      if (!mapa[sala]) mapa[sala] = {};
      mapa[sala][tipo] = (mapa[sala][tipo] || 0) + total;
    });

    return Object.entries(mapa)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([sala, tipos]) => ({
        sala,
        ...tipos,
      }));
  };

  const tiposUnicos = Array.from(
    new Set(datos.map(d => d.tipo?.trim()).filter(Boolean))
  ).sort((a, b) => a.localeCompare(b));

  useEffect(() => {
    if (resumenRef.current) {
      resumenRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const dataEstado = resumenPorEstado();
  const dataTipo = resumenPorTipo();
  const dataPorSala = resumenAgrupadoPorSala();

  if (dataEstado.length === 0 && dataTipo.length === 0 && dataPorSala.length === 0) {
    return null;
  }

  return (
    <div ref={resumenRef} style={panelResumen}>
      <h3 style={titulo}>{t("summary")}</h3>
      <div style={contenedorGraficos}>
        {dataEstado.length > 0 && (
          <div style={contenedorGrafico}>
            <h4 style={titulo}>{t("equipmentByState")}</h4>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dataEstado}
                  dataKey="cantidad"
                  nameKey="estado"
                  outerRadius={80}
                  label
                >
                  {dataEstado.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}

        {dataTipo.length > 0 && (
          <div style={{ ...contenedorGrafico, height: "350px" }}>
            <h4 style={titulo}>{t("equipmentByType")}</h4>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={dataTipo}
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
        )}

        {dataPorSala.length > 0 && (
          <div style={{ ...contenedorGrafico, height: "400px" }}>
            <h4 style={titulo}>{t("equipmentByRoomAndType")}</h4>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={dataPorSala}
                layout="vertical"
                margin={{ left: 100, right: 20, top: 10, bottom: 10 }}
              >
                <XAxis type="number" />
                <YAxis type="category" dataKey="sala" />
                <Tooltip />
                <Legend />
                {tiposUnicos.map((tipo, index) => (
                  <Bar
                    key={tipo}
                    dataKey={tipo}
                    fill={`hsl(${(index * 37) % 360}, 70%, 50%)`}
                    barSize={24}
                    radius={[0, 4, 4, 0]}
                  />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
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
