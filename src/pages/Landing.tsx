import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom'

import '../styles/pages/landing.css'
import logoImg from '../images/logo.png'

function Landing() {
    return (
        <div id="page_landing">
            <div className="content-wrapper">
                <img src={logoImg} alt="Garage CF" />

                <main>
                    <h1>TOGETHER</h1>
                    <span>we are stronger!</span>
                </main>

                <div className="location">
                    <strong>Duque de Caxias</strong>
                    <span>Rio de Janeiro</span>
                </div>

                <Link to="/map" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
                </Link>
            </div>
        </div>
    )
}

export default Landing