import React from 'react';
import { connect } from 'react-redux';

function Leaderboard({ users }) {
    return (
        <ul>
            {users.map(user => (
                <li key={user.id} className='user'>
                    <img src={user.avatarURL} alt={user.name} />

                    <div className=''>
                        <h1>{user.name}</h1>
                        <p>{user.polls} Polls</p>
                        <p>{user.answers} Answers</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}

function mapStateToProps({ users }) {
    const usersInfo = Object.keys(users)
        .map(id => {
            const { name, avatarURL, polls, answers } = users[id];
            return {
                id,
                name,
                avatarURL,
                polls: polls.length,
                answers: answers.length,
            }
        })
        .sort((a, b) => (b.polls + b.answers) - (a.polls + a.answers));

    return {
        users: usersInfo,
    }
}

export default connect(mapStateToProps)(Leaderboard);
