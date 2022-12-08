import axios from 'axios';
import { useState, useEffect } from 'react';


export default function Requisitions({setListFilmes}) {

    

    
    useEffect(() => {
        const requisicaofilmes = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")


		requisicaofilmes.then(resposta => {setListFilmes(resposta.data);});}, []);


}
