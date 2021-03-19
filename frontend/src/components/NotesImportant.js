import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../components/css/NotesImportant.css'


export default class NotesImportant extends Component {
    render() {
        return (
            <div className="mycarousel">
                <Carousel >
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://okdiario.com/img/2020/10/28/rashford-tira-ante-gulacsi.-afp.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="\images\messi.jpg"
                            alt="Second slide"

                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://caracol.com.co/radio/imagenes/2020/10/29/el_alargue/1603946095_249287_1603946661_miniatura_normal.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
