import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function Header(){
    return(
<HeaderFlex>
    <Link to={"/"}>
        <p>CINEFLEX</p>
    </Link>
</HeaderFlex>
)
}


const HeaderFlex =  styled.header`
display:flex;
align-items:center;
justify-content:center;
top : 0px;
width: 100%;
height: 67px;
background: #C3CFD9;

p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #E8833A;
}
`