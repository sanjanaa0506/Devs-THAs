import './card.css';

function Card(props){
    console.log(props);
   
    return(
        
       <div className="Block">
                <div className="name">{props.name}</div>
                <h2>you have consumed <span class="calorie">{props.calorie} </span>cals today</h2>
            </div>
    );
   
    
}

export default Card;
