import React from "react";
import NotesItem from "./NotesItem";
import PropTypes from 'prop-types';

function NotesList({ notes, onDelete }) {
    return (
        notes.length === 0 ?
        <p className="notes-list__empty-message">No Record</p> :
        <div className="notes-list">
            {
                notes.map((note) => (
                    <NotesItem key={note.id} id={note.id} onDelete={onDelete} {...note} />
                ))
            }
        </div>
    );
}

NotesList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default NotesList;