import React ,{useState} from 'react';
import styled from 'styled-components' ;


function Button() {
     const [counter, setCounter] = useState(0)
    return (
        <Container onClick={()=>setCounter(counter+1)}> {counter} </Container>
    )
}

const Container=styled.button`
cursor:pointer;
 width:8vw;
 height:15vh;
 border-radius:10px;
 margin:10px;
border:none;
background-color:#C197D2;
color:black;
font-size:2.2rem;
cursor:pointer;
};
`

export default Button;
