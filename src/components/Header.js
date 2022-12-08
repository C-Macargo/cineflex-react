import styled from 'styled-components';

export default function Header(){
    return(
<HeaderFlex>
<p>CINEFLEX</p>
</HeaderFlex>
)
}


const HeaderFlex =  styled.header`
display:flex;
align-items:center;
justify-content:center;
margin:auto;
width: 375px;
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