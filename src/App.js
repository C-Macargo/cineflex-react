import Header from "./components/Header"
import Requisitions from "./components/Requisitions"
import MovieSelection from "./pages/MovieSelection";
import CurrentTask from "./components/CurrentTask"
import { useState, useEffect } from 'react';

export default function App() {

    const [listafilmnes, setListFilmes] = useState(undefined);
    const [currentTask, setCurrentTask] = useState("Selecione o filme");


    return (
        <>

            <Requisitions
                listafilmnes={listafilmnes}
                setListFilmes={setListFilmes}
            />

            <Header />
            <CurrentTask 
            currentTask = {currentTask}
            />

            <MovieSelection
                listafilmnes={listafilmnes}
                setListFilmes={setListFilmes}
            />

        </>
    )
}