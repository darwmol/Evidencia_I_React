import "./App.css";
import Encabezado from "./components/Encabezado";
import Contenido from "./components/Contenido";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Encabezado titulo="¡Bienvenido! " colorBoton={"#16A085"}>
      <div class = "links"> 
        <ul>
          <li>
            <a h  ref="#Inicio">Home</a>
          </li>
          <li>
            <a href="#Contacto">Contact</a>
          </li>
        </ul>
      </div>
      </Encabezado>

      <Contenido>
        <div>
          <h1>TiendaXpress</h1>
          <p>
            Tu destino en línea para una amplia gama de productos de calidad a
            precios competitivos. Compra fácil, envío rápido y las últimas
            tendencias, todo en un solo lugar.
          </p>
        </div>
      </Contenido>
      <Footer titulo="© 2024 TiendaXpress. Todos los derechos reservados. Términos y condiciones. Política de privacidad." />
    </>
  );
}

export default App;
