import React, { Component } from 'react'
import '../components/css/Header.css'


export default class Header extends Component {
    render() {
        return (

            <div className="cabecerapcipal">
                <div className="cabecerapcipal__contenedor__publicidad">
                </div>
                <div className="cabecerapcipal__contenedor">
                   <a className="titulo__page" href="/"><img className="logo__eldiez" src="images\logos\logo_pagina.png" alt="logo el diez"/>CANAL EL DIEZ</a>
                    <img className="cabecerapcipal__imgportada" src="images/portada/Portada.jpg" alt="portada diez" />
                </div>
            </div>

        )
    }
}
