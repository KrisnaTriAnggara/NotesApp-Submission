import React from 'react';
import PropTypes from 'prop-types';

class NotesInput extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <form className='note-input' onSubmit={this.onSubmitEventHandler}>
                <input type='text' placeholder='Masukkan judul ' value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
                <input type='text' placeholder='Masukkan note ' value={this.state.body} onChange={this.onBodyChangeEventHandler}/>
                <button type='submit'>Create Note</button>
            </form>
        )
    }
}

NotesInput.propTypes = {
    addNote: PropTypes.func.isRequired,
}

export default NotesInput;