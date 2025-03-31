import { useState } from "react";
import Login from "./Login";
import Inicio from "./Inicio";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
import { Toaster } from 'react-hot-toast';

function App() {
  const [usuario, setUsuario] = useState(null);
  const { t } = useTranslation();

  const cambiarIdioma = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div>
      
      <div style={{ position: "absolute", top: 10, right: 10 }}>
        <Toaster position="top-center" reverseOrder={false} />
        <select onChange={cambiarIdioma} defaultValue={i18n.language}>
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </div>
     
      {usuario ? (
        <Inicio user={usuario} cerrarSesion={() => setUsuario(null)} />
      ) : (
        <Login InicioDeSesionExitoso={(user) => setUsuario(user)} />
      )}
    </div>
  );
}

export default App;
