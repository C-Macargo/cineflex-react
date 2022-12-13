import styled from "styled-components"
import { Link } from "react-router-dom";


export default function FinalizedSelection({ finalArray }) {

    const finalPageContent = finalArray
    return (

        <>
            <CurrentPage>
                <p>Pedido feito com sucesso!</p>
            </CurrentPage>
            <FinalPageBox>
                <div data-test="movie-info">
                    <h1>Filme e sessão</h1>
                    <p>{finalPageContent.movie.movieName}</p>
                    <p>{finalPageContent.day.movieDate} {finalPageContent.time.movieTime}</p>
                </div>
                <div data-test="seats-info">
                    <h1>Ingressos</h1>
                    {finalPageContent.seats.selectedSeats.map(seat => <p key={seat.name}>{`Assento: ${seat.name}`}</p>)}
                </div>
                <div data-test="client-info">
                    <h1>Comprador</h1>
                    <p>Nome: {finalPageContent.nome.userName}</p>
                    <p>CPF: {finalPageContent.cpf.userCPF}</p>
                </div>
                <ReturnHomeButton data-test="go-home-btn">
                    <Link to={"/"}>
                        <p>Voltar para Home</p>
                    </Link>
                </ReturnHomeButton>
            </FinalPageBox>



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
    color:green;
}
`

const FinalPageBox = styled.div`
    margin:auto;
    width:316px;
    padding-left:20px;
h1{
    margin-top:30px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
}

p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
}
`
const ReturnHomeButton = styled.button`
margin-top:20px;
text-align:center;
width: 200px;
height: 42px;
background: #E8833A;
border-radius: 3px;
p{
    color:white;
}

`