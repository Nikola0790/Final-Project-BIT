import React from "react";
import './searchBar.css';

export const Search = ({setSearch}) => (
    <div className='search'>
        <span className="material-icons">search</span>

        <input placeholder="Search..."
            type="text"
            onChange={(event) => {
                setSearch(event.target.value)
            }}
        ></input>

    </div>

)