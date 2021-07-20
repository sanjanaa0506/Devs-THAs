import Card from './Card'
import styled from 'styled-components'
import { useState } from "react";
import "./style.css";

function App(){

    const[item,setItem]=useState([

        {
           title:"Pizza",
           calorie:56,
           id:0
        },
        {
            title:"Pani-puri",
            calorie:10,
            id:1
         },
         {
            title:"Lassania",
            calorie:60,
            id:2
         },
         {
            title:"Burger",
            calorie:150,
            id:3
         },
         {
            title:"Cold-drink",
            calorie:120,
            id:4
         },
         {
            title:"cake",
            calorie:200,
            id:5
         },
         {
            title:"Fried-Rice",
            calorie:100,
            id:6
         },
    ])

    return (
        <div className="App">
            <container>
                {
                    item.map(i =>(
                        <Card title={i.title} calorie={i.calorie} item={item} setItem={setItem} id={i.id} key={i.id}/>
                    ))
                }
            </container>
        </div>
    )
}

const Container=styled.div`
width:50vw;
height:70vh;
min-height:60vh;
border-radius:0.2rem;
overflow-y:auto;
overflow-x:hidden;
box-shadow:0px 3px 5px rgba(0,0,0);
padding-top:1rem;
padding-left:0.5rem;
padding-right:0.5rem;
padding-top:1rem;
`

export default App
