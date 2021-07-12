
const canva = document.querySelector('.canva');
for (let id=0; id < 400; id++)
{ 
  let grid=document.createElement('div');
  grid.setAttribute('class','grid');
  grid.setAttribute('class','clicked');
  grid.setAttribute('id',id);
  grid.addEventListener('click',() => 
  {
    grid.classList.toggle('clicked');
  });
  /*grid.in.nerText(id);
  canva.appendChild(grid).className="grid-item";*/
  canva.appendChild(grid);
  
}
const unchecked = ["0","2","4","6","8","10","12","14","16","18","40","42",
                   "44","46","48","50","52","56","58","82","84",
                   "80","86","88","54","90","92","94","96","98","120"
                   ,"122","124","126","128","130","132","134","136","138","160",
                   "162","164","166","168","170","172","174","176","178","201","203","205",
                   "207","209","211","213","215","217","219",
                   ];

for(let i in unchecked)
{
  document.getElementById(unchecked[i]).classList.toggle('clicked');
}
//if(i%2==0)
//{

//}