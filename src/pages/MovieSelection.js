import { useState, useEffect } from 'react';
import styled from 'styled-components';


export default function MovieSelection({ listafilmnes }) {


    if (listafilmnes === undefined) {
        return <div>Carregando...</div>
    }

    return (


        <MovieList>
            {listafilmnes.map(movie => (
                <MovieContainer key={movie.title}>
                    <img src={movie.posterURL} alt={movie.title} />
                </MovieContainer>
            ))}
        </MovieList>
    )


}

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