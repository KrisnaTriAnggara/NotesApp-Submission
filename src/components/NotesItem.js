import React from 'react';
import NotesItemBody from './NotesItemBody';
import DeleteButton from './DeleteButton';
import PropType from 'prop-types';


function NotesItem({ title, createdAt, body, id,onDelete}) {
    return (
        <div className="note-item">
            <NotesItemBody id={id} title={title} createdAt={createdAt } body={body} />
            <DeleteButton id={id} onDelete={onDelete} />
        </div>
    );
}

NotesItem.propType = {
    title: PropType.string.isRequired,
    createdAt: PropType.string.isRequired,
    body: PropType.string.isRequired,
    id: PropType.string.isRequired,
    onDelete: PropType.func.isRequired,
};

export default NotesItem;