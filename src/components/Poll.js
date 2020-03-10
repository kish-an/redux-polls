import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPercentage } from '../utils/helpers';
import { handleAddAnswer } from '../actions/answers';

const getVoteKeys = () => ['aVotes', 'bVotes', 'cVotes', 'dVotes'];

const Poll = (props) => {
    const { poll, authorAvatar, authedUser, vote } = useSelector(state => mapStateToProps(state, props));
    const dispatch = useDispatch();

    let answered = false;

    const handleAnswer = answer => {
        answered = true;

        dispatch(handleAddAnswer({
            authedUser,
            answer,
            id: poll.id,
        }));
    }

    if (!poll) {
        return (
            <p>
                This poll does not exist <span role='img' aria-label=' crying face'>😢</span>
            </p>
        )
    }

    const totalVotes = getVoteKeys().reduce((total, key) => total + poll[key].length, 0);

    return (
        <div className='poll-container'>
            <h1 className='question'>{poll.question}</h1>
            <div className='poll-author'>
                By <img src={authorAvatar} alt={'Authors avatar'} />
            </div>
            <ul>
                {['aText', 'bText', 'cText', 'dText'].map(key => {
                    const count = poll[key[0] + 'Votes'].length

                    return (
                        <li
                            className={`option ${vote === key[0] ? 'chosen' : ''}`}
                            key={key}
                            onClick={() => {
                                if (vote === null && !answered) {
                                    handleAnswer(key[0])
                                }
                            }}
                        >
                            {vote === null
                                ? poll[key]
                                : <div className='result'>
                                    <span>{poll[key]}</span>
                                    <span>{getPercentage(count, totalVotes)}% ({count})</span>
                                </div>
                            }
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

function mapStateToProps({ authedUser, polls, users }, ownProps) {
    const { match } = ownProps;
    const { id } = match.params;

    const poll = polls[id];
    if (!poll) {
        return {
            poll: null,
        }
    }

    const vote = getVoteKeys().reduce((vote, key) => {
        if (vote !== null) {
            // a, b, c or d
            return vote[0];
        }

        return poll[key].includes(authedUser) ? key : vote;
    }, null);

    return {
        poll,
        vote,
        authedUser,
        authorAvatar: users[poll.author].avatarURL,
    }
}

export default Poll;
