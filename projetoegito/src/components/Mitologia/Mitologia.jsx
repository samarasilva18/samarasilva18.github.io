import React from "react"
import horus from "./myth.jpg"
import './Mitologia.css'

export default function Mitologia() {
    return (
        <div className="container">
            <section id="mitobody">
            <h2>As Contendas de Horus e Seth</h2>
            <img src={horus} alt="Horus vs Seth" className="imamito"/>
            <h2>Sobre o Mito:</h2>
              <div className="texto">  
                "As contendas de Hórus e Seth" é uma história mitológica da Vigésima Dinastia do Egito, encontrada nas primeiras dezesseis páginas do papiro Chester Beatty. A lenda lida com as batalhas entre Horus e Seth para determinar quem será o sucessor de Osiris.
               </div>
            </section>
        </div>
    )
}