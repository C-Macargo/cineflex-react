import styled from "styled-components"
import axios from "axios";
import { useEffect,} from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";


export default function MovieTime({currentMovie, setCurrentMovie ,}){
    const { movieID } = useParams()

    
    useEffect(() => {
            
        const requisicaohorarios = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${movieID}/showtimes`)
        requisicaohorarios.then(resposta2 => {setCurrentMovie(resposta2.data);});}, []);
        
    if (currentMovie === undefined) {
        return <div>Carregando...</div>
    }
    
    const dates = currentMovie.days
    const sessions = dates.showtimes
    console.log(sessions)
    console.log(dates)

    return (
        <>
        <CurrentPage>
            <p>Selecione o horário</p>
        </CurrentPage>

        <TimeContainer>
            {dates.map(date => (
                <p>{date.weekday} - {date.date} 
                    {date.showtimes.map(showtime => 
                        <Link to={`/SeatSelection/${showtime.id}`}>
                        <button>{showtime.name}</button>    
                        </Link>
                        )}
                </p>))}
        </TimeContainer>

        <Footer>
            <img src = {currentMovie.posterURL}></img>
            <p>{currentMovie.title}</p>
        </Footer>

        </>

    )
    
}


const CurrentPage = styled.div`
    margin: auto;
    display:flex;
    width: 100%;
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
flex-direction:column;
align-items:center;
margin:auto;
`

const Footer = styled.footer `
    display:flex;
    width: 100%;
    height: 117px;
    background-color: green;
    position:fixed;
    bottom:0px;
    align-items:center;
    justify-content:center;

    img{
        height: 72px;
        left: 17px;
        margin-left:18px;
    }

    p{
        margin-left:15px;
    }

`