import React from "react";
import './searchBar.css';

export const Search = ({setSearch}) => (
    <div className='search'>
        <div className="searchBox " >
        <i className="material-icons">search</i>
        <input placeholder="Search..."
            type="text"
            className="searchInput"
            
            onChange={(event) => {
                setSearch(event.target.value)
            }}
        ></input>
        </div>
    </div>

)