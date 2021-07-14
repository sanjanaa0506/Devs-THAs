const mouse=document.getElementById('mouse');
const rabbit=document.getElementById('rabbit');
const cat=document.getElementById('cat');
const dog=document.getElementById('dog');
const mousetn=document.getElementById('mousetn');
const rabbtn=document.getElementById('rabbtn');
const catbtn=document.getElementById('catbtn');
const dogbtn=document.getElementById('dogbtn');


mousetn.addEventListener('click',getmusyy)
rabbtn.addEventListener('click',getrabby)             
catbtn.addEventListener('click',getcatty)
dogbtn.addEventListener('click',getdoggy)

function getmusyy()
{
    fetch('https://random.dog/woof.json')
        .then(res=>res.json())
        .then(data  =>{
        if(data.url.includes('.mp4'))
        {
            getmusyy()
        }
        else
        {
        mouse.innerHTML= '<img src="${data.file}"/>'
        }
    })
}

function getrabby()
{
    fetch('https://aws.random.cat/meow')
    .then(res=>res.json())
    .then(data =>
     {
        if(data.file.includes('.mp4'))
        {
            getrabby()
        }
        else
        {
        mouse.innerHTML= '<img src="${data.file}"/>'
        }
    })
}


function getcatty()
{
    fetch('https://aws.random.cat/meow')
    .then(res=>res.json())
    .then(data  =>
    {
        if(data.url.includes('.mp4'))
        {
            getcatty()
        }
        else
        {
        mouse.innerHTML= '<img src="${data.url}"/>'
        }
    })
}

function getdoggy()
{
    fetch('https://aws.random.cat/meow')
    .then(res=>res.json())
    .then(data  =>
    {
        if(data.url.includes('.mp4'))
        {
            getdoggy()
        }
        else
        {
        mouse.innerHTML= '<img src="${data.url}"/>'
        }
    })
}
//localStorag.setItem('name',"Sanjune")
//const name=localStorage.getItem('name')
//console.log(name);


