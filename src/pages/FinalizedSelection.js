import styled from "styled-components"


export default function FinalizedSelection(){

    return (

        <>
        <CurrentPage>
            <p>Pedido feito com sucesso!</p>
        </CurrentPage>


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