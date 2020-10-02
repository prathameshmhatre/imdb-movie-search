import React from 'react'

import { useDispatch } from 'react-redux';
import {
    getList,
} from '../../features/list/slice';

const App = () => {
    const dispatch = useDispatch();
    const search = (q) => {
        dispatch(getList(q));
    }
    return (
        <div className="input-group input-group-lg mb-3">
            <input onChange={e => search(e.target.value)} type="text" className="form-control" placeholder="Search by Name, Duration, PG Rating, IMDB rating, Genre ... " aria-label="Username" aria-describedby="search-icon" />
            <span className="input-group-text" id="search-icon"><i className="fa fa-search"></i></span>
        </div>
    );
}

export default App;