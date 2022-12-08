import Header from "./components/Header"
import MovieSelection from "./pages/MovieSelection";
import MovieTime from "./pages/MovieTime"

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    const [listafilmnes, setListFilmes] = useState(undefined);
    const [currentMovie, setCurrentMovie] = useState(undefined);
    const [movieNumber, setMovieNumber] = useState(undefined)
    return (
        <BrowserRouter>

            <>

                <Header />
                <Routes>

                    <Route path="/" element={<MovieSelection
                        listafilmnes={listafilmnes}
                        setListFilmes={setListFilmes}
                        movieNumber={movieNumber}
                        setCurrentMovie={setCurrentMovie}
                        setMovieNumber={setMovieNumber}
                    />}
                    />

                    <Route path="/MovieTime/:movieID" element={<MovieTime
                        currentMovie={currentMovie}
                        movieNumber={movieNumber}
                        setMovieNumber={setMovieNumber}
                        setCurrentMovie={setCurrentMovie}
                    />}
                    />

                </Routes>

            </>

        </BrowserRouter>

    )
}