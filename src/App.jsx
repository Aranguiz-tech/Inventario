import { useState } from "react";
import Login from "./Login";
import Inicio from "./Inicio";


function App() {
  const [usuario, setUsuario] = useState(null);

  return (
    <div>
      {usuario ? (
        <Inicio user={usuario} cerrarSesion={() => setUsuario(null)} />
      ) : (
        <Login onLoginSuccess={(user) => setUsuario(user)} />
      )}
    </div>
  );
}

export default App;
