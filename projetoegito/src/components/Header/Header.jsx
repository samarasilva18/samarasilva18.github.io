import React from "react"
import { Link } from "react-router-dom"

import './Header.css';
import piramides from './indexbanner.png';

export default function Header() {
    return (
        <header className="image-container">
        <img src={piramides} alt="Banner de Piramides" className="imapirami"/>
            <div className="menu">
                <nav className="navMenu">
                    <ul>
                        <li> <Link to = "/"> Inicio </Link> </li>
                        <li> <Link to = "/arte"> Arte </Link> </li>
                        <li> <Link to = "/mitologia"> Mitologia </Link> </li>
                        <li> <Link to = "/realeza"> Realeza </Link> </li>
                        <li> <Link to = "/monumentos"> Monumentos </Link> </li>
                        <li> <Link to = "/cadastro"> Cadastro </Link> </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}