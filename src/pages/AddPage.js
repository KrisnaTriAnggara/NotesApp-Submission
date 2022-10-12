import React from 'react';
import { addNote } from '../utils/local-data';
import NotesInput from "../components/NotesInput";
import { useNavigate } from 'react-router-dom';

function AddPage() {
    const navigate = useNavigate();

    function onAddNoteHandler(Note) {
        addNote(Note);
        navigate('/');
    }

    return (
        <section>
            <h2>Add Note</h2>
            <NotesInput addNote={onAddNoteHandler} />
        </section>
    )
}

export default AddPage;