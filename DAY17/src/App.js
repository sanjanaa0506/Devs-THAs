import React  from 'react';
import './App.css';
import Card from './component/card';
import './component/card.css'

//const component =React.createElement("h1",null,"Hello World mru");


function App(props) {
  return(
   
  <div className="App">
   
     <Card name="Pizza"  calorie="56"/>
     <Card name="Burger" calorie="69"/>
     <Card name="Coke" calorie="500"/>
     <Card name="Browne" calorie="180"/>
     <Card name="Fried Rice" calorie="90"/>
     <Card name="Lassania" calorie="200"/>
     <Card name="Pani Puri" calorie="10"/>
     </div>
  );
   
}

export default App;
