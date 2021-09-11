import React from "react"
import curvada from "./curva.jpg"
import './Monumentos.css'

export default function Monumentos() {
    return (
        <div className="container">
            <section id="monubody">
            <h2>A Piramide Curvada</h2>
            <img src={curvada} alt="Piramide Curvada" className="imacurva"/>
            <h2>Sobre o Monumento:</h2>
                Bem-vindo a Segredos Milenares! Um canto da internet dedicado a tudo sobre o Egito Antigo.
            </section>
        </div>
    )
}