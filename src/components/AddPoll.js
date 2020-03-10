import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleAddPoll } from '../actions/polls';

const AddPoll = ({ history }) => {
    const [questionFields, setQuestionFields] = useState({
        question: '',
        a: '',
        b: '',
        c: '',
        d: '',
    });
    const dispatch = useDispatch();

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        setQuestionFields(questionFields => ({
            ...questionFields,
            [name]: value,
        }));
    }

    const handleSubmit = e => {
        e.preventDefault();

        history.push('/');

        dispatch(handleAddPoll(questionFields));
    }

    const { question, a, b, c, d } = questionFields;

    return (
        <form className='add-form' onSubmit={handleSubmit}>
            <h3 style={{ marginBottom: 5 }}>What is your question?</h3>
            <input
                value={question}
                name='question'
                onChange={handleChange}
                className='input'
                type='text'
            />

            <h4>What are the options?</h4>

            <label className='label' htmlFor='a'>A.</label>
            <input
                value={a}
                name='a'
                id='a'
                onChange={handleChange}
                className='input'
                type='text'
            />

            <label className='label' htmlFor='b'>B.</label>
            <input
                value={b}
                name='b'
                id='b'
                onChange={handleChange}
                className='input'
                type='text'
            />

            <label className='label' htmlFor='c'>C.</label>
            <input
                value={c}
                name='c'
                id='c'
                onChange={handleChange}
                className='input'
                type='text'
            />

            <label className='label' htmlFor='d'>D.</label>
            <input
                value={d}
                name='d'
                id='d'
                onChange={handleChange}
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
    )
}

export default AddPoll;
