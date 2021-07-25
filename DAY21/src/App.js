import { useState } from 'react';
import './App.css';
import Card from './Card';
function App() {
  const [newList,setNewList]=useState([])
  const [listEmpty,setlistEmpty]=useState(false)
  const [data,setData]=useState({
    text:'',
    amount:''
  });


  const dataChange=(e)=>{
    var name=e.target.name
    var  value=e.target.value
    setData({...data,[name]:value})
     
  }

  function onChangeSubmit(){
    setlistEmpty(true)
    setNewList([...newList,data])
    setData({
      text:'',
      amount:''
    })
  }
  
  return (
    <div className="app">
       <div className="input_values">
              <input type="text" value={data.text} placeholder="Item Name" className="text" name="text" onChange={dataChange}/>
              <input type="number" value={data.amount} placeholder="Calorie Amount" className="number" name="amount" onChange={dataChange}/>
       </div>
       <button className="btn" onClick={onChangeSubmit}>Add Item</button>
      {
        listEmpty ?
        newList.map((item,index)=>{
         return  <Card key={index} id={index} title={item.text} amount={item.amount} list={newList} setNewList={setNewList}/>
        })
        : <h1 className="warning">Start Adding Items</h1>
      }
    </div>
  );
}

export default App;
