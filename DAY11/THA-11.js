const quizQuestion = [
  {
      que:"Who is popularly called as the Iron Man of India?",
      answer:[{text:' Subhash Chandra Bose',correct:false},
             {text:'Sardar Vallabhbhai Patel',correct:true}, 
             {text:' Jawaharlal Nehru',correct:false},
            {text:'Govind Ballabh Pant',correct:false}]
    
  },
  {  
      "que":"Who is the father of geometry?",
      answer:[
          {text:'Aristotle', correct:false},
          {text:'Euclid', correct:true},
          {text:'Pythagoras', correct:false},
          {text:'AKeple', correct:false},
      ]
     
  },
  {
      "que":"HTML use for",
      answer:[
          {text:'To hack NASA', correct:false},
          {text:'To create webpages', correct:false},
          {text:'To create android apps', correct:false},
          {text:'I dont know what is HTML is', correct:false},
      ]
     
  
  }
  
//   {
//       "que":"2+2 ?",
//       "A":" 4" ,
//       "B" :"22" ,
//       "C": "2+2" ,
//       "D": "0",
//       "ans":1
//   },
//   {
//       "que":"Who invented the slogan GO CORONA GO ?",
//       "A":" Rahul Gandhi" ,
//       "B" :"Ramdas Athawale" ,
//       "C": "Arvind Kejriwal" ,
//       "D": "Narendra Modi",
//       "ans":2
//   },
//   {
//       "que":"What is India's national language?",
//       "A":" Tamil" ,
//       "B" :"Hindi" ,
//       "C": "English" ,
//       "D": "Punjabi",
//       "ans":2
  
//   },
//   {
//       "que":"Who in India explained that the Earth was round?",
//       "A":"Ashoka" ,
//       "B" :"Kalidas" ,
//       "C": "Aryabhatta" ,
//       "D": "Mahatma Gandhi",
//       "ans":3
//   },
//   {
//       "que":"Which tale of India is the most famous?",
//       "A":"Mahabarat" ,
//       "B" :"Jataka tales" ,
//       "C": "Don" ,
//       "D": "Tarak Mehta Ka Ulta Chashma",
//       "ans":1
//   },
//   {
//       "que":"JS stands for?",
//       "A":"Jaherila Sharbat" ,
//       "B" :"Janhavi Shukla" ,
//       "C": "JavaScript" ,
//       "D": "None",
//       "ans":3
//   }
  ]


// timer
var timer=setInterval(countTimer,1000);
var sec=0;
function countTimer(){
    sec++;
    var hour=Math.floor(sec/3600);
    var minute=Math.floor((sec-hour*3600)/60);
    var second=sec-(hour*3600+minute*60);
    document.getElementById("timer").innerHTML= minute+"&nbsp"+":"+"&nbsp"+second;
}





// //fetch
// let question;
// fetch("question.json")
// .then(function(que1){
//   return que1.json();
// })
// .catch(function(err){
//   console.log(err);
// })

const startButton  = document.getElementById('start')
const nextButton  = document.getElementById('next')
const question=document.getElementById('question-container');
const que1=document.getElementById('question')
const ans1=document.getElementById('answer-buttons')
let shuffleQuesion, currentQuestion;


startButton.addEventListener('click',startGame)

function startGame(){

 console.log('started')
 startButton.classList.add('hide')
 shuffleQuesion=quizQuestion.sort(() => Math.random - 0.5)
 currentQuestion=0
 question.classList.remove('hide')
 nextQuestion()

}
nextButton.addEventListener('click' , () =>{
    currentQuestion++;
    nextQuestion()
})
function nextQuestion(){
    restate()
 showQuestion(shuffleQuesion[currentQuestion])
}

function  showQuestion(quizQuestion){
 que1.innerText = quizQuestion.que
 quizQuestion.answer.forEach(answer =>{
     const button=document.createElement('button')
     button.innerText=answer.text
     button.classList.add('btn')
     if(answer.correct){
         button.dataset.correct=answer.correct
     }
     button.addEventListener('click',answer)
     ans1.appendChild(button)
 })
}

function restate()
{   clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(ans1.firstChild){
        ans1.removeChild(ans1.firstChild)
    }
}
function answer(e){
 const select=e.target
 const correct=select.dataset.correct
 setstatus(document.body,correct)
 Array.from(ans1.children).forEach(button =>{
     setstatus(button,button.dataset.correct)
 } )
}

function setstatus(element,correct){

    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')

    }
    else{
        element.classList.add('wrong')
    }

}
function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
