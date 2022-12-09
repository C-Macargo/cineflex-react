import Header from "./components/Header"
import MovieSelection from "./pages/MovieSelection";
import MovieTime from "./pages/MovieTime"
import SeatSelection from "./pages/SeatSelection"
import FinalizedSelection from "./pages/FinalizedSelection"
import "./styles/styles.css"


import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    const [listafilmnes, setListFilmes] = useState(undefined);
    const [currentMovie, setCurrentMovie] = useState(undefined);
    const [currenSeats, setCurrentSeats] = useState(undefined);
    const [movieNumber, setMovieNumber] = useState(undefined)
    const [pickedSeats, setPickedSeats] = useState ([])
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [finalArray, setFinalArray] = useState({})



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

                    <Route path="/sessoes/:movieID" element={<MovieTime
                        currentMovie={currentMovie}
                        movieNumber={movieNumber}
                        setMovieNumber={setMovieNumber}
                        setCurrentMovie={setCurrentMovie}
                    />}
                    />
                    <Route path="/assentos/:seatID" element ={<SeatSelection
                        currenSeats = {currenSeats}
                        setCurrentSeats = {setCurrentSeats}
                        pickedSeats = {pickedSeats}
                        setPickedSeats = {setPickedSeats}
                        selectedSeats = {selectedSeats}
                        setSelectedSeats = {setSelectedSeats}
                        setFinalArray={setFinalArray}
                    />}
                    />
                    <Route path="/FinalizedSelection" element ={<FinalizedSelection
                        finalArray = {finalArray}
                    />}
                    />


                </Routes>

            </>

        </BrowserRouter>

    )
}