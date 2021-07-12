const canva = document.querySelector('.canva');
const booked =document.querySelector('b');
const remaining =document.querySelector('r');
b.innerHTML=0
r.innerHTML=36
let val=0,val1=0

r.innerHTML=parseInt(r.innerHTML)-parseInt(b.innerHTML)
for (let id=0; id < 36; id++){ /* dont use var */
  let grid=document.createElement('div');
  grid.setAttribute('class','grid');
  grid.setAttribute('id',id);
  grid.addEventListener('click',() => {
    if(!grid.classList.contains('gridclicked')){
      val=parseInt(b.innerHTML);
      b.innerHTML=(val+1);
      r.innerHTML=36-parseInt(b.innerHTML);
    }
    else{
      val=parseInt(b.innerHTML);
      b.innerHTML=(val-1);
      val1=parseInt(r.innerHTML);
      r.innerHTML=val1+1;
    }
  
 
    grid.classList.toggle('gridclicked');
    
    
  });
 
  canva.appendChild(grid);
  
}