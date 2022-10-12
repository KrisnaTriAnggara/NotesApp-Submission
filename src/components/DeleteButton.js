import React from 'react';
import PropTypes from 'prop-types';
import { MdDeleteForever } from 'react-icons/md';

function DeleteButton({id, onDelete}){
    return <button className='note-item__delete' onClick={() => onDelete(id)}><MdDeleteForever /></button>
}

DeleteButton.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default DeleteButton;