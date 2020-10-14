import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiPlus, FiSun } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet'

import logoImg from '../images/logo.png'
import 'leaflet/dist/leaflet.css'
import '../styles/pages/garage-map.css'

function GarageMap() {
    // DARK MODE FUNCTION - START
    const [map, setMap] = useState('dark-v10')

    function darkMode() {
        if (map === 'light-v10') {
            setMap('dark-v10')
        } else {
            setMap('light-v10')
        }
    }
    // DARK MODE FUNCTION - END

    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={logoImg} alt="Happy" className="logo_img" />

                    <h2>Nossa localização</h2>
                    <p>Passando o carro!</p>
                </header>

                <footer>
                    <strong>Duque de Caxias</strong>
                    <span>Rio de Janeiro</span>
                </footer>
            </aside>

            <Map
                center={[-22.639118,-43.272232]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                {/* {<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />} */}
                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/${map}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
            </Map>

            {/** DARK MODE MAP */}
            <div className="dark-mode" onClick={darkMode}>
                <FiSun color="#fff" size={32} />
            </div>

            <Link to="" className="create-orphanage">
                <FiPlus color="#fff" size={32} />
            </Link>
        </div>
    )
}

export default GarageMap;