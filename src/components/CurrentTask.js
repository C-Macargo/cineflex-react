import { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function CurrentTask({currentTask}) {

    return (
        <TaskName>
            <p>{currentTask}</p>
        </TaskName>
    )

}


const TaskName = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin:auto;
width: 375px;
height: 67px;
background: white;

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