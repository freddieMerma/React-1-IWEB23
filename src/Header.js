export default Header; //0.0 Exportarlo
function Header(){ //0.1 Definir la función
    return(
        <div id="cabecera">
            <img src="../logo512.png"
                 style={{ width: '50px', height: 'auto',
            }} className="logo"/>
            <h3 className="mensaje">Bienvenido! by Freddie</h3>
        </div>
    );
}