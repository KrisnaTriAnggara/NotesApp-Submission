import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NotesItemBody({id, title, createdAt, body}) {
    return (
        <div className="note-item__body">
            <h3 className="note-item__title">
                <Link to={`/notes/${id}`}>{title}</Link>
            </h3>
            <p className="note-item__notename">{createdAt}</p>
            <p className="note-item__notename">{body}</p>
        </div>
    );
}

NotesItemBody.propTypes = {
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default NotesItemBody;