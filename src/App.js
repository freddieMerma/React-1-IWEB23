import './App.css';
import Header from './Header';
import Resultados from './Resultados';
import CONFIG from './config/config.js';
import React, { useState } from "react";
import { mock1 } from './constants/mock.js';


function App() {
    const [latitud, setLatitud] = useState(CONFIG.default_lat);
    const [longitud, setLongitud] = useState(CONFIG.default_lon);

    const [datos, setDatos] = useState({});
    const [apiDatos, setApiDatos] = useState(false);

    //Manejo de errores
    const [errorMessage, setErrorMessage] = React.useState("");

    const handleDatos = async () => {
        const url = `${CONFIG.server_url}?lat=${latitud}&lon=${longitud}&appid=${CONFIG.api_key}`;
        if (CONFIG.use_server) {
            try {
                const response = await fetch(url);
                if (response.status === 200) {
                    const data = await response.json();
                    setDatos(data);
                    setApiDatos(true);
                    setErrorMessage('');
                } else {
                    const data = await response.json();
                    if (data.cod && data.message) {
                        const errorMessage = `Descripción: Obtenido error al llamar al API. Código ${data.cod} 
                        Mensaje del servidor: ${data.message}`;
                        setErrorMessage(errorMessage);
                    } else {
                        setErrorMessage('Error desconocido');
                    }
                    setApiDatos(false);
                }
            } catch (error) {
                const errorMessage = `Descripción: Error en la solicitud al servidor. Mensaje de error: ${error.message}`;
                setErrorMessage(errorMessage);
                setApiDatos(false);
            }
        } else {
            setDatos(mock1);
            setApiDatos(true);
            setErrorMessage('');
        }
    };


    const handleLatitudChange = (event) => {
        setLatitud(event.target.value);
        //Asignamos valor de input
    };

    const handleLongitudChange = (event) => {
        setLongitud(event.target.value);
    };


  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Header/>
        </div>
      </header>
        <h2 id="titulo">El tiempo</h2>
        <label>Latitud: </label>
        <input id="latitud" type="number" value={latitud} onChange={handleLatitudChange} />
        <br/>
        <label>Longitud: </label>
        <input id="longitud" type="number" value={longitud} onChange={handleLongitudChange}/>
        <br/>
        <button id="buscar" onClick={handleDatos}>Buscar</button>
        <div>
            {errorMessage && <div id="error" style={{ color: 'darkred' }}>
                <h2>Error</h2>
                <h4>Se ha producido un error.</h4>
                {errorMessage}
                </div>}
            {apiDatos && <Resultados numitems={CONFIG.num_items} items={datos} />}
        </div>

    </div>
  );
}

export default App;
