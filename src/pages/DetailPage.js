import React from 'react';
import NotesDetail from "../components/NotesDetail";
import { getNote } from '../utils/local-data';
import { useParams } from 'react-router-dom';

function DetailPageWrapper() {
    const { id } = useParams();
    return <DetailPage id={(id)}/>;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id)
    }
  }

  render() {
    if (this.state.note === undefined) {
      return <p>Detail Note is not found!</p>;
    }

    return (
      <section>
        <NotesDetail {...this.state.note} />
      </section>
    );
  }
}

export default DetailPageWrapper;
