import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink exact to='/' activeClassName='active'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to='/leaderboard' activeClassName='active'>
                        Leaderboard
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to='/add' activeClassName='active'>
                        Add Poll
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
