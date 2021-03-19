import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './css/NotesList.css'

export default class NotesList extends Component {

    state = {
        notes: []
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000');
        this.setState({ notes: res.data.slice(0, 6) });
    }

    render() {
        return (
            <div className="container p-5">
                <div className="title_notes">Últimas Noticias</div>
                <div className="row">
                    {
                        this.state.notes.map(notes => (
                            <div className="col-md-4 p-2" key={notes._id}>
                                <Link to={"/"+ notes.category + "/" + notes.tournament + "/" + notes._id} className="btn btn-link class_alz">
                                <div className="card border-0">
                                    
                                    <div className="card-header img_card">
                                        <h5 className="title_note_card">{notes.title}</h5>
                                        <img className="img-fluid img_card" src="/images/messi.jpg" alt="Card cap" />
                                       
                                    </div>
                                   
                                    <div className="card-body class_appart">
                                        <p>
                                            {notes.caption}
                                        </p>
                                        <p className="text_autor">
                                            Por {notes.author}
                                        </p>
                                    </div>

                                </div>
                                </Link>
                            </div>

                        ))
                    }
                </div>
            </div>
        )
    }
}
