import React from "react";
import styles from "./SearchBar.module.css"

const SearchBar = ({ method }) => {
    return (
        <input
            className={styles.search}
            id="searchBox"
            type="text"
            placeholder="Search"
            onChange={(e => method(e.target.value))}//.target.value
        />
    );
}

export { SearchBar };