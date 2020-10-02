/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    getList,
} from './slice';

import Search from "../../components/list/Search";
import Item from "../../components/list/Item";
import Loader from "../../components/Loader";

export function List() {

    const { list, loading } = useSelector((state) => state.movie);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getList());
    }, [])
    return (
        <div className="container my-5 position-relative">

            <Search />
            {
                loading && <Loader />
            }
            <div className="row">
                {list.length ? list.map(
                    (v, i) => {
                        return (<div key={i} className="d-flex col-12 col-md-4 col-lg-3">
                            <Item data={v} />
                        </div>)
                    }
                ) : <h1>Oops list is empty...</h1>}
            </div>

        </div>
    )
}