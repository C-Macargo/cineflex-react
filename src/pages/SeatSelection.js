import styled from "styled-components"
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SeatSelection({ setCurrentSeats, currenSeats, setPickedSeats, pickedSeats, }) {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const { seatID } = useParams()


    function handleSeat(seat) {
        //Se o assento estiver indisponível não faz nada
        if (seat.isAvailable === false) {
            return;
        }
        //Toggle - "Liga e desliga" a seleção
        seat.selected = !seat.selected;
    
        //Se o estado atual é não selecionado precisamos remover o assento
        if (!seat.selected) {
            const filteredSeats = selectedSeats.filter((s) => !(s.name === seat.name));
            setSelectedSeats([...filteredSeats]);
        return;
        }
        //Adicionamos o assento a lista de assentos selecionados
        setSelectedSeats([...selectedSeats, seat]);
    }
    console.log(selectedSeats)

    useEffect(() => {

        const requisicaoassentos = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${seatID}/seats`)

        requisicaoassentos.then(resposta3 => { setCurrentSeats(resposta3.data); });
    }, []);

    if (currenSeats === undefined) {

        return <div>Carregando...</div>
    }
    const seats = currenSeats.seats
    console.log(seats)
    console.log(pickedSeats)



    return (
        <>
            <CurrentPage>
                <p>Selecione os assentos</p>
            </CurrentPage>

            <SeatContainer>

                {seats.map(seat => (
    
                        
                        !seat.selected ? (
                            <SeatButton  className={`seat-${seat.isAvailable}`} 
                                            onClick={() => handleSeat(seat)}>
                            
                            {seat.name}
                            
                            </SeatButton>
                        ) : (
                            <SeatButton  className={`true`} 
                                            onClick={() => handleSeat(seat)}>
                            
                            {seat.name}
                            
                            </SeatButton>
                        )
                
                
                
                ))}

            </SeatContainer>



            <Sampling>
                <SamplingInner>
                    <SamplingButton color="#1AAE9E"></SamplingButton>
                    <p>Selecionado</p>
                </SamplingInner>
                <SamplingInner>
                    <SamplingButton color="#C3CFD9" ></SamplingButton>
                    <p>Disponível</p>
                </SamplingInner>
                <SamplingInner>
                    <SamplingButton color="#FBE192" ></SamplingButton>
                    <p>Indisponível</p>
                </SamplingInner>
            </Sampling>

            <SaveSeatButton>
                <Link to={"/FinalizedSelection"}>
                    <button>
                        Reservar Assento(s)
                    </button>
                </Link>
            </SaveSeatButton>

            <Footer>
                <img src={currenSeats.movie.posterURL}></img>
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
    width: 316px;
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
    
        button{
        width: 26px;
        height: 26px;
        border-radius: 12px;
        border: 2px solid #808F9D;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        color: #000000;
        }
`


const Footer = styled.footer`
margin:auto;
    display:flex;
    width: 316px;
    height: 117px;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;
    bottom:0px;
    align-items:center;
    justify-content:center;
    margin-top:30px;

    img{
        height: 72px;
        left: 17px;
        margin-left:18px;
    }

    p{
        margin-left:15px;
    }

`



const SaveSeatButton = styled.div`
    margin :auto;
    text-decoration:none;
    color:white;
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
    margin-top:20px;


    button {
    margin :auto;
    text-decoration:none;
    color:white;
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
    }
`

const Sampling = styled.div`
    width: 316px;
    display:flex;
    margin:auto;
    justify-content:space-around;
    margin-top:30px;

`


const SamplingButton = styled.button`

        width: 26px;
        height: 26px;
        border-radius: 12px;
        border: 2px solid #808F9D;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        background-color: ${props => props.color} ;


`

const SamplingInner = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`