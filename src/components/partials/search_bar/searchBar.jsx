import React from "react";
import './searchBar.css';

export const Search = ({setSearch}) => (
    <div className='search'>
        <div className="searchBox " >
        <div className="material-icons searchIcon ">search</div>

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