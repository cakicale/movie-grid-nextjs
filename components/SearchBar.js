import React from "react";

const SearchBar = ({ method }) => {
    return (
        <input
            className="search"
            id="searchBox"
            type="text"
            placeholder="Search"
            onChange={(e => method(e.target.value))}
        />
    );
    // const searchInput = document.createElement("input");
    // searchInput.setAttribute("class", "search");
    // searchInput.setAttribute("id", "searchBox");
    // searchInput.setAttribute("type", "text");
    // searchInput.setAttribute("placeholder", "Search");
    // searchInput.addEventListener('input', method);
    // return searchInput;
}

export { SearchBar };