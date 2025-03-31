import { useState } from "react";
import Login from "./Login";
import Inicio from "./Inicio";
import { Toaster } from 'react-hot-toast';

function App() {
  const [usuario, setUsuario] = useState(null);

  return (
    <div>
      <div style={{ position: "absolute", top: 10, right: 10 }}>
        <Toaster position="top-center" reverseOrder={false} />
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
