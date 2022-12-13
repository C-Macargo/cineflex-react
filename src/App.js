import Header from "./components/Header"
import MovieSelection from "./pages/MovieSelection";
import MovieTime from "./pages/MovieTime"
import SeatSelection from "./pages/SeatSelection"
import FinalizedSelection from "./pages/FinalizedSelection"
import "./styles/styles.css"
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    const [listafilmnes, setListFilmes] = useState(undefined);
    const [currentMovie, setCurrentMovie] = useState(undefined);
    const [currenSeats, setCurrentSeats] = useState(undefined);
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
                        setCurrentMovie={setCurrentMovie}
                    />}
                    />
                    <Route path="/sessoes/:movieID" element={<MovieTime
                        currentMovie={currentMovie}
                        setCurrentMovie={setCurrentMovie}
                    />}
                    />
                    <Route path="/assentos/:seatID" element={<SeatSelection
                        currenSeats={currenSeats}
                        setCurrentSeats={setCurrentSeats}
                        selectedSeats={selectedSeats}
                        setSelectedSeats={setSelectedSeats}
                        setFinalArray={setFinalArray}
                    />}
                    />
                    <Route path="/sucesso" element={<FinalizedSelection
                        finalArray={finalArray}
                    />}
                    />
                </Routes>
            </>

        </BrowserRouter>

    )
}