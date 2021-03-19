import React, { Component } from 'react'
import './css/Footer.css'

export default class Footer extends Component {
    render() {
        return (

            <div className="footer_diez">

                <div className="logo_diez">
                    <img src="images\logos\logo_pagina.png" alt="" />
                </div>

                <div className="social_page">
                    <a 
                    className="btn btn-social-icon btn-facebook" 
                    href="https://facebook.com/Canaleldiez" 
                    target="_blanck"
                    rel="nofollow">
                        <span className="fa fa-facebook"></span>Siguenos en Facebook!
                    </a>
                </div>

                <div>
                    <p>© Canal el Diez. All rights reserved</p>
                </div>
            </div>
        )
    }
}
