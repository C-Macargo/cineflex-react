import styled from "styled-components"
import axios from "axios";
import { useEffect,} from "react";
import { useParams } from 'react-router-dom';


export default function MovieTime({currentMovie, setCurrentMovie ,}){
    const { movieID } = useParams()

    
    useEffect(() => {
            
        const requisicaohorarios = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${movieID}/showtimes`)
        requisicaohorarios.then(resposta2 => {setCurrentMovie(resposta2.data);});}, []);
        
    if (currentMovie === undefined) {
        return <div>Carregando...</div>
    }
    



    return (
        <>
        <CurrentPage>
            <p>Selecione o horário</p>
        </CurrentPage>
        <TimeContainer>
            <p>{currentMovie.title}</p>
        </TimeContainer>
        </>
    )
    
}


const CurrentPage = styled.div`
    margin: auto;
    display:flex;
    width: 375px;
    height: 67px;
    background: white;
    align-items:center;
    justify-content:center;
p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
}
`

const TimeContainer = styled.div `

display:flex;

`
const MovieContainer = styled.div `

display:flex;

`