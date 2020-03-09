import React from "react";
import "../styles/Hola.css";
import "../styles/fondo.css";
import logo from "../image/logo.png";
import cell from "../image/cell.png";
import cell2 from "../image/cell2.png";
import twitter from "../image/tw.png";
import face from "../image/f.png";

class Hola extends React.Component {
  render() {
    return (
      <div id="body">
        <div id="caja1">
          <div id="caja_logo">
            <img id="imagen2" alt="some value" src={logo}></img>
          </div>
          <div id="caja_iphone">
            <img id="iphone" alt="some value" src={cell}></img>
          </div>
          <div id="caja_inferior">
            <div id="caja_titulo">
              <div id="titulo">
                <h1>Iphone 11</h1>
              </div>
            </div>
            <div id="caja_frente">
              <img id="frente" alt="some value" src={cell2}></img>
            </div>
            <div id="caja_datos">
              <ul>
                <li>Tamañp 144 x 71,4 x 8,1 mm (188 g)</li>
                <li>Pantalla OLED 5,8 pulgadas</li>
                <li>Núcleos Hexa-core</li>
                <li>RAM 4 GB</li>
                <li>Mempria 64 / 256 / 512 GB </li>
                <li>software iOS 13</li>
                <li>GPU Apple de 4 núcleos</li>
                <li>Batería 3.179 mAh</li>
              </ul>
              <div id="caja_boton">
                <button>COMPRAR</button>
              </div>
            </div>
          </div>
          <div id="caja6">
            <div id="redes">
              <div id="red1">
                <img class="face1" alt="some value" src={face}></img>
              </div>
              <div id="red2">
                <img class="face1" alt="some value" src={twitter}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Hola;
