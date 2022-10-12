import React from 'react';
import PropTypes from 'prop-types';
import NotesItemBody from './NotesItemBody';

 
function NotesDetail({ title, createdAt, body,id }) {
  return (
      <div className="note-item">
        <NotesItemBody id={id} title={title} createdAt={createdAt } body={body} />
      </div>
  );
}
 
NotesDetail.propTypes = {
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};
 
export default NotesDetail;