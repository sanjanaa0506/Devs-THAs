import React, {useState } from 'react'
import "./Card.css"

function Card({id,title,amount,list,setNewList}) {
   
   const [edit,setEdit]=useState(false)
   const [data,setData]=useState({
           text:title,
           amount:amount
       });

  const dataChange=(e)=>{
    var name=e.target.name
    var  value=e.target.value
    setData({...data,[name]:value}) 
  }
   const onDelete=()=>{
      const newList=list.filter((item,index)=>{
             if(index!=id){
                 return item
             }
      })
      setNewList(newList)
   }

   const changeEditMode=()=>{
       setEdit(true)
   }

   const changeItem=()=>{
    setEdit(false)
   }
    return (
        <div className="card">
        {edit  ?
        <div>
              <input type="text"  value={data.text}  placeholder="Item Name" className="text" name="text" onChange={dataChange}/>
              <input type="number"  value={data.amount} placeholder="Calorie Amount" className="number" name="amount" onChange={dataChange}/>
        </div>    
        :
        <div> 
        <h3>{data.text}</h3>
       <p>you have consumed {data.amount} calories</p>
       </div>
        
        }
             <div className="btnGroup">
                  <button className="deleteBtn" onClick={onDelete}>Delete</button>
                 {edit ? <button className="editBtn" onClick={changeItem}>Done</button>: <button className="editBtn" onClick={changeEditMode}>Edit</button>} 
             </div>
        </div>
    )
}

export default Card
