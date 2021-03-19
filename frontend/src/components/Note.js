import React, { Component } from 'react'
// import axios from 'axios'
import RelatedNotes from './RelatedNotes'
import Footer from './Footer'

export default class Note extends Component {

    // state = {
    //     notas: []
    // }

    // async componentDidMount() {
    //     let resto = window.location.pathname;
    //     const res = await axios.get('http://localhost:4000' + resto);
    //     this.setState({ notas: res.data });

    // }

    render() {
        return (
            <>
                {/* {
                    this.state.notas.find(note => (

                        <div className="container" key={note._id}>
                            <h2 className="title_note_card">{note.title}</h2>
                            <img className="img-fluid" src={note.URLimage} alt="Card cap" />

                            <p>
                                {note.content}
                            </p>
                            <p className="text_autor">
                                Por {note.author}
                            </p>
                        </div>


                    ))
                } */}

                <RelatedNotes />
                <Footer />
            </>
        )
    }
}