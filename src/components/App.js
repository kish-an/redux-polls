import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading';

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
        return (
            <div>
                {this.props.isLoading
                    ? <LoadingBar />
                    : <Dashboard />
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.authedUser === null,
    }
}

export default connect(mapStateToProps)(App);
