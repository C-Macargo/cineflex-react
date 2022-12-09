import styled from "styled-components"
import { useParams } from 'react-router-dom';
import { useEffect,} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function SeatSelection({setCurrentSeats, currenSeats}){

    const { seatID } = useParams()
    
    useEffect(() => {
            
        const requisicaoassentos = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${seatID}/seats`)
        requisicaoassentos.then(resposta3 => {setCurrentSeats(resposta3.data);});}, []);

        if (currenSeats === undefined) {
            return <div>Carregando...</div>
        }

        const seats = currenSeats.seats
        console.log(currenSeats)
    return(
        <>
        <CurrentPage>
            <p>Selecione os assentos</p>
        </CurrentPage>

        <SeatContainer>

            {seats.map(seat =>(<SeatButton>{seat.name}</SeatButton>))}

        </SeatContainer>
        <button>
            <Link to={"/FinalizedSelection"}>
            Reservar Assento
            </Link>
        </button>

        <Footer>
            <img src = {currenSeats.movie.posterURL}></img>
            <p>{currenSeats.movie.title} </p>
            <p>{currenSeats.day.weekday}  {currenSeats.name} </p>
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

const SeatContainer = styled.div`
    width: 18%;
    display: flex;
    flex-wrap: wrap;
    gap: 21px 6px;
    margin-bottom: 14px;
    margin:auto;
`
const SeatButton = styled.button`
        width: 26px;
        height: 26px;
        border-radius: 12px;
        border: 2px solid #808F9D;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        color: #000000;
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