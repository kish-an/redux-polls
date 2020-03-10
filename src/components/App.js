import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading';
import Poll from './Poll';
import Nav from './Nav';
import Leaderboard from './Leaderboard';
import AddPoll from './AddPoll';

const App = () => {
    const isLoading = useSelector(state => state.authedUser === null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(handleInitialData());
    }, [dispatch]);

    return (
        <Router>
            <>
                <LoadingBar />
                <div className='container'>
                    <Nav />
                    {isLoading
                        ? null
                        :   <>
                                <Route exact path='/' component={Dashboard} />
                                <Route path='/leaderboard' component={Leaderboard} />
                                <Route path='/polls/:id' component={Poll} />
                                <Route path='/add' component={AddPoll} />
                            </>
                    }
                </div>
            </>
        </Router>
    )
}

export default App;
