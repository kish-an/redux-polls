import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddPoll } from '../actions/polls';
import LoadingBar from 'react-redux-loading';

class AddPoll extends Component {
    state = {
        question: '',
        a: '',
        b: '',
        c: '',
        d: '',
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.dispatch(handleAddPoll(this.state));
    }

    render() {
        const { question, a, b, c, d } = this.state;

        return (
            <React.Fragment>
                <LoadingBar />
                <form className='add-form' onSubmit={this.handleSubmit}>
                    <h3 style={{marginBottom: 5}}>What is your question?</h3>
                    <input
                        value={question}
                        name='question'
                        onChange={this.handleChange}
                        className='input'
                        type='text'
                    />

                    <h4>What are the options?</h4>

                    <label className='label' htmlFor='a'>A.</label>
                    <input
                        value={a}
                        name='a'
                        id='a'
                        onChange={this.handleChange}
                        className='input'
                        type='text'
                    />

                    <label className='label' htmlFor='b'>B.</label>
                    <input
                        value={b}
                        name='b'
                        id='b'
                        onChange={this.handleChange}
                        className='input'
                        type='text'
                    />

                    <label className='label' htmlFor='c'>C.</label>
                    <input
                        value={c}
                        name='c'
                        id='c'
                        onChange={this.handleChange}
                        className='input'
                        type='text'
                    />

                    <label className='label' htmlFor='d'>D.</label>
                    <input
                        value={d}
                        name='d'
                        id='d'
                        onChange={this.handleChange}
                        className='input'
                        type='text'
                    />

                    <button
                        type='submit'
                        className='btn'
                        disabled={!question || !a || !b || !c || !d}
                    >
                        Submit
                    </button>
                </form>
            </React.Fragment>
        )
    }
}

export default connect()(AddPoll);
