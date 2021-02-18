import React from "react";

const SearchBar = ({ method }) => {
    return (
        <input
            className="search"
            id="searchBox"
            type="text"
            placeholder="Search"
            onChange={(e => method(e.target.value))}//.target.value
        />
    );
}

export { SearchBar };