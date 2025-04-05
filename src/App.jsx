import { useEffect, useState } from "react";
import Login from "./Login";
import Inicio from "./Inicio";
import { Toaster } from "react-hot-toast";

function App() {
  console.log("✅ App.jsx se está ejecutando");
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang) {
      import("./i18n").then((module) => {
        module.default.changeLanguage(lang);
      });
    }

    const savedUser = localStorage.getItem("usuario");
    if (savedUser) {
      setUsuario(JSON.parse(savedUser));
    }
  }, []);

  const guardarUsuario = (user) => {
    localStorage.setItem("usuario", JSON.stringify(user));
    setUsuario(user);
  };

  const cerrarSesion = () => {
    localStorage.removeItem("usuario");
    setUsuario(null);
  };

  return (
    <div>
      <div style={{ position: "absolute", top: 10, right: 10 }}>
        <Toaster position="top-center" reverseOrder={false} />
      </div>

      {usuario ? (
        <Inicio user={usuario} cerrarSesion={cerrarSesion} />
      ) : (
        <Login InicioDeSesionExitoso={guardarUsuario} />
      )}
    </div>
  );
}

export default App;