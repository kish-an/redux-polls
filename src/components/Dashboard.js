import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
    state = {
        showAnswered: false,
    }

    showUnansweredPolls = () => {
        this.setState({ showAnswered: false });
    }

    showAnsweredPolls = () => {
        this.setState({ showAnswered: true });
    }

    render() {
        const { showAnswered } = this.state;
        const { answered, unanswered } = this.props;

        const list = showAnswered ? answered : unanswered;

        return (
            <div>
                <div className='dashboard-toggle'>
                    <button
                        style={{textDecoration: !showAnswered ? 'underline' : null}}
                        onClick={this.showUnansweredPolls}
                    >
                        Unanswered
                    </button>
                    <span> | </span>
                    <button
                        style={{textDecoration: showAnswered ? 'underline' : null}}
                        onClick={this.showAnsweredPolls}
                    >
                        Answered
                    </button>
                </div>
                <ul className='dashboard-list'>
                    {list.map(poll => (
                        <li key={poll.id}>
                            {poll.question}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
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

export default connect(mapStateToProps)(Dashboard);
