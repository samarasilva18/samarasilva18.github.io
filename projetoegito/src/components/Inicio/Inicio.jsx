import React from "react"
import tut from "./tutmask.jpeg"
import './Inicio.css'

export default function Inicio() {
    return (
        <div className="container">
            <section id="indexbody">
            <img src={tut} alt="Busto Farao" className="imafara"/>
                <h2>Bem-Vindo</h2>
                Bem-vindo a Segredos Milenares! Um canto da internet dedicado a tudo sobre o Egito Antigo.
            </section>
        </div>
    )
}