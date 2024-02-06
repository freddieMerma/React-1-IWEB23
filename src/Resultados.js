import React from 'react';
import Tarjeta from "./Tarjeta";
function Resultados ({ numitems, items }) {

    return (
        <div id="resultados" style={{backgroundColor: "#282c34", color: "white", }}>
            <h2>Timezone: <span style={{color: "#61DAFB"}}>{items.timezone}</span></h2>
            <h4>El tiempo en los próximos días será:</h4>
            <div style={{display: "grid", justifyContent: "center"}}>
                <div style={{display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "10px", paddingLeft: "150px"
            , paddingBottom: "10px"}}>
                    {items.daily.slice(0, numitems).map((day, index) => (
                        <Tarjeta key={index} data={day} />
                    ))}
                </div>
            </div>
            
        </div>

    );
}

export default Resultados;