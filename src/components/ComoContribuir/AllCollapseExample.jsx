import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles2/Accordion.css";
import img from "../../assets/HowToContribute/FirstAccordion/Luz-led.png";
import headerImg from "../../assets/HowToContribute/HeaderImg/header-contribuir.jpg"
import img2 from "../../assets/HowToContribute/SeconSection/aire-acondicionado.jpg"

function AllCollapseExample() {
  return (
    <div className="accordion-container">
      <Accordion className="custom accordion">
        <header className='accordion-header'>
          <img src={headerImg} alt="Encabezado" className='header-image' />
          <div className='header-text'>
            ¿Cómo contribuir?
          </div>
        </header>

        <Accordion.Item eventKey="0">
          <Accordion.Header>Persona Natural</Accordion.Header>
          <Accordion.Body>
            <div className="content-wrapper">
              <img src={img} alt="Image not found" className="accordion-image" />
              <div className="accordion-text">
                <h4>Utiliza iluminación LED en casa o empresa.</h4>
                <h6>
                  Si dispones de grandes ventanales también puedes aprovechar las horas de luz natural y consultar la posibilidad de instalar placas fotovoltaicas para convertir la luz del sol en energía.
                </h6>
              </div>
              <img src={img2} alt="Image not found" className='accordion-image' />
              <div className='accordion-text'>
                <h4>Controla la temperatura de tu espacio.</h4>
                <h6>
                A veces, un aire acondicionado muy fuerte hace que sintamos frío en verano dentro de un establecimiento. Y lo mismo sucede en los hogares. Si controlas programas la calefacción y el aire acondicionado a temperaturas intermedias, el ambiente será más agradable y ahorrarás energía.
                </h6>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Empresas</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AllCollapseExample;
