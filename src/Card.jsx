import { useState } from "react";
import "./Card.css";

export default function Card() {
  const gradienteAzul = "linear-gradient(to left, #7f83e2, #a5a8eb)";
  const gradienteCinza = "linear-gradient(to left, white, white)";

  const corbackground =" #959aec";
  const corbackground2 = "white";


const cortextor ="white";
const cortextorBlack ="black";
const cortextinho  = "#959aec"

  const [cor, setCor] = useState(gradienteCinza);
  const [corTexto, setCorTexto] = useState(cortextorBlack);
   
  const [cor1, setCor1] = useState(corbackground);
  const [corTexto1, setCorTexto1] = useState(cortextor); 


  const alteraCor2 = () =>{
    setCor1(cor1 === corbackground ? corbackground2 : corbackground)

   setCorTexto1 ( corTexto1 === cortextor ? cortextinho: cortextor )


  }


  const alterarCor = () => {
    setCor(cor === gradienteCinza ? gradienteAzul:gradienteCinza);
    setCorTexto( corTexto === cortextorBlack? cortextor : cortextorBlack   )

  };

  return (
    <div>
      <div className="divmaior">  
        {/* Switch */}
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onChange={() => {
              alterarCor();
              alteraCor2();
            }}
          />

            
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
        </div>

<div className= "divMaior2">
        {/* Card */}
        <div className="card2">
          <div className="card-body">
            <div className="container">
              <p  className="professional1">Professional</p>
              <h2 className="Cardcor">$24.99</h2>
              <div className="Linha1"></div>
              <p>1TB Storage</p>
              <div className="Linha1"></div>
              <p>5 Users Allowed</p>
              <div className="Linha1"></div>
              <p>Send up to 10 GB</p>
              <div className="Linha1"></div>
            </div>

            {/* Botão que muda de cor */}
            <div className="buttoContainer">
              <button id="botao" className="button" style={{ background: cor1, color:corTexto1}}>clique aqui</button>
            </div>
          </div>
        </div>


        <div className="card1">
          <div className="card-body">
            <div className="container">
              <p className="professional">Professional</p>
              <h2 className="Card">$24.99</h2>
              <div className="Linha1"></div>
              <p>1TB Storage</p>
              <div className="Linha1"></div>
              <p>5 Users Allowed</p>
              <div className="Linha1"></div>
              <p>Send up to 10 GB</p>
              <div className="Linha1"></div>
            </div>

            {/* Botão que muda de cor */}
            <div className="buttoContainer1">
              <button id="botao" className="button1" style={{ background: cor, color:corTexto}}>clique aqui</button>
            </div>
          </div>
        </div>



        <div className="card2">
          <div className="card-body">
            <div className="container">
              <p className="professional">Professional</p>
              <h2 className="Card2  ">$24.99</h2>
              <div className="Linha1"></div>
              <p>1TB Storage</p>
              <div className="Linha1"></div>
              <p>5 Users Allowed</p>
              <div className="Linha1"></div>
              <p>Send up to 10 GB</p>
              <div className="Linha1"></div>
            </div>

            {/* Botão que muda de cor */}
            <div className="buttoContainer">
              <button id="botao" className="button" style={{ background: cor1, color:corTexto1}}>clique aqui</button>
            </div>
          </div>
        </div>
      </div>


      </div>

      
    </div>
  );
}
