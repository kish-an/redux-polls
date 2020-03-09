import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading';
import Poll from './Poll';
import Nav from './Nav';
import Leaderboard from './Leaderboard';
import AddPoll from './AddPoll';


class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
        return (
            <Router>
                <React.Fragment>
                    <LoadingBar />
                    <div className='container'>
                        <Nav />
                        {this.props.isLoading
                            ? null
                            :   <div>
                                    <Route exact path='/' component={Dashboard} />
                                    <Route path='/leaderboard' component={Leaderboard} />
                                    <Route path='/polls/:id' component={Poll} />
                                    <Route path='/add' component={AddPoll} />
                                </div>
                        }
                    </div>
                </React.Fragment>
            </Router>

        )
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.authedUser === null,
    }
}

export default connect(mapStateToProps)(App);
