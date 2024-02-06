import React from 'react';

function Tarjeta ( { data }) {
    const formatDate = (timestamp) => {
        // Explicación: Multiplicar por 1000 para convertir de segundos a milisegundos
        const date = new Date(timestamp * 1000);
        // Formatear la fecha en formato de fecha local
        return date.toLocaleDateString();
    };
    const toCelsius = (kelvin) => {
        // Resta para convertir a celsius
        const celsius = kelvin - 273.15;
        // Redondear el resultado a un decimal, ya que uno da error.
        return celsius.toFixed(2);
    };
    const imgSrc = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;


    return (
        <div id="tarjeta" style={{ border: "1px solid gray", paddingLeft: "10px", paddingRight: "10px", background: "#61DAFB"}}>
            <h3>{formatDate(data.dt)}</h3>
            <img className="tiempoimg" src={imgSrc}/>
            <p>Temp: {toCelsius(data.temp.day)}°C</p>
            <p>Humedad: {data.humidity}%</p>
            <p>Viento: {data.wind_speed}m/s</p>

        </div>
    );
}
export default Tarjeta;