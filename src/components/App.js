import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading';
import Poll from './Poll';

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
        return (
            <div>
                <LoadingBar />
                {this.props.isLoading
                    ? null
                    : <Poll match={{params: {id: 'loxhs1bqm25b708cmbf3g'}}} />
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
