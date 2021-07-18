import Block  from './chess';
import './style.css';

const division ={
 
    width:' 400px',
    height: '400px',
    
    }

function Chess(){
  let blocks = [];
  for (let i = 0; i <= 63; i++) {
    blocks.push(
      <Block
        key={i}
        className={  (i + Math.floor(i / 8)) % 2 === 0 ? "black" : "white"}
      />
    );
  }

  return <div style ={division} className="chess">{blocks}</div>;
}

export default Chess;
