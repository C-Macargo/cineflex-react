import {useEffect } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import axios from 'axios';




export default function MovieSelection({ listafilmnes, setMovieNumber, movie, setListFilmes,}) {

    useEffect(() => {
        
        const requisicaofilmes = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")

		requisicaofilmes.then(resposta => {setListFilmes(resposta.data);});}, []);
    
    
    
    if (listafilmnes === undefined) {
        return <div>Carregando...</div>
    }

    return (
        <>
        <CurrentPage>
            <p>Selecione o filme</p>
        </CurrentPage>

        <MovieList>
            {listafilmnes.map(movie => (
                <Link to={`/MovieTime/${movie.id}`} key={movie.title} >
                <MovieContainer >
                    <img onClick={() => {}} src={movie.posterURL} alt={movie.title} />
                </MovieContainer>
                </Link>
            ))}
        </MovieList>
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

const MovieList = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: space-around;
    margin:auto;
    width: 375px;
    background: white;
`


const MovieContainer =  styled.div`
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin-top:27px;


img{
    width: 129px;
    height: 193px;
}
`