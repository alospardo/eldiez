import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './css/RelatedNotes.css'

export default class RelatedNotes extends Component {

    state = {
        notes: []
    }

    async componentDidMount() {
        const res = await axios.get('/');
        this.setState({ notes: res.data.slice(0, 4) });
    }

    render() {
        return (
            <div className="container ">
                <div className="title_notes">La voz del editor</div>
                <div className="row">
                    {
                        this.state.notes.map(notes => (
                            <div className="col-md-3 p-2" key={notes._id}>
                               
                                <div className="card m-0">
                                    
                                    <div className="card-header img_card">
                                        <h5>{notes.title}</h5>
                                    </div>
                                   
                                    <div className="card-body class_appart">
                                        <p>
                                            {notes.caption}
                                        </p>
                                        <Link to={"/"+ notes.category + "/" + notes.tournament + "/" + notes._id} className="btn btn-link class_alz">
                                        <p className="text_autor">
                                            Seguir leyendo...
                                        </p>
                                        </Link>
                                    </div>

                                </div>
                                
                            </div>

                        ))
                    }
                </div>
            </div>
        )
    }
}