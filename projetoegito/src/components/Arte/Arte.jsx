import React from "react"
import ceiling from "./ceiling.jpg"
import './Arte.css'

export default function Arte() {
    return (
        <div className="container">
            <section id="artebody">
                <div className="arteentry">
                    <h2>Teto de camara do tumulo de Ramses</h2>
                    <img src={ceiling} alt="Teto do tumulo" className="imateto"/>
                    <div>
                    Bem-vindo a Segredos Milenares! Um canto da internet dedicado a tudo sobre o Egito Antigo.
                    </div>
                </div>
                <div className="arteentry">
                    <h2>Teto de camara do tumulo de Ramses</h2>
                    <img src={ceiling} alt="Teto do tumulo" className="imateto"/>
                    <div>
                    Bem-vindo a Segredos Milenares! Um canto da internet dedicado a tudo sobre o Egito Antigo.
                    </div>
                </div>
            </section>
        </div>
    )
}