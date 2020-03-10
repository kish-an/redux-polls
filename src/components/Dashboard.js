import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [showAnswered, setShowAnswered] = useState(false);
    const { answered, unanswered } = useSelector(mapStateToProps);

    const showAnsweredPolls = () => setShowAnswered(true);

    const showUnansweredPolls = () => setShowAnswered(false);

    const list = showAnswered ? answered : unanswered;
    return (
        <div>
            <div className='dashboard-toggle'>
                <button
                    style={{ textDecoration: !showAnswered ? 'underline' : null }}
                    onClick={showUnansweredPolls}
                >
                    Unanswered
                    </button>
                <span> | </span>
                <button
                    style={{ textDecoration: showAnswered ? 'underline' : null }}
                    onClick={showAnsweredPolls}
                >
                    Answered
                    </button>
            </div>
            <ul className='dashboard-list'>
                {list.map(poll => (
                    <li key={poll.id}>
                        <Link to={`polls/${poll.id}`}>
                            {poll.question}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

function mapStateToProps({ authedUser, users, polls }) {
    const answers = users[authedUser].answers;
    const answeredPolls = answers
        .map(id => polls[id])
        .sort((a, b) => b.timestamp - a.timestamp);
    const unansweredPolls = Object.keys(polls)
        .filter(id => !answers.includes(id))
        .map(id => polls[id])
        .sort((a, b) => b.timestamp - a.timestamp);

    return {
        answered: answeredPolls,
        unanswered: unansweredPolls,
    }
}

export default Dashboard;
