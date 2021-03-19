import React, { Component } from 'react'

import Footer from './Footer'
import NotesImportant from './NotesImportant'
import NotesList from './NotesList'
import RelatedNotes from './RelatedNotes'

export default class Home extends Component {
    render() {
        return (
            <div>

                <NotesImportant />
                <NotesList />
                <RelatedNotes />
                <Footer />
            </div>
        )
    }
}
