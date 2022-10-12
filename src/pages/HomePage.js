import React from 'react';
import NotesList from "../components/NotesList"; /*
import SearchBar from "../components/SearchBar";*/
import { deleteNote, getAllNotes } from "../utils/local-data";

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getAllNotes(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    onDeleteHandler(id) {
        deleteNote(id);

        //update the contact state from local-data.js
        this.setState(() => {
            return {
                notes: getAllNotes(),
            }
        });
    }

    render() {
        return (
            <section>
                <h2>Note List</h2>
                <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} />
            </section>
        )
    }
}

export default HomePage;