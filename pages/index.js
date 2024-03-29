import React, { useState, useEffect } from 'react';
import Head from "next/head";
import { MovieCard } from "../components/MovieCard/MovieCard";
import { fetchMoviesJSON } from "../services/fetchMovies";
import { SearchBar } from "../components/SearchBar/SearchBar";
import styles from "../styles/utils.module.css";

export default function HomePage() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchMoviesJSON(search).then(result => setMovies(result));
    }, [search]);

    return (
        <>
            <Head>
                <title>Title</title>
            </Head>
            <div className={styles.wrapper}>
                <div id="navigation" className="navigation">
                    <SearchBar method={setSearch} />
                </div>

                <div id="container" className={styles.container}>
                    {movies.map((movie, index) =>
                        <MovieCard key={index} movie={movie} />
                    )}
                </div>
            </div>
        </>
    )
}
