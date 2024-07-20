const questions = [
    {
        question : "What is a correct syntax to output 'Hello World' in Python ? " , 
        answers : [
            { text : '  echo("Hello World") ', correct: false},
            { text :  'p("Hello World")' , correct: false },
            { text : ' print("Hello World")' , correct: true},
            { text : ' echo "Hello World"' , correct: false},
        ]
    },
    {
        question : "How do you insert COMMENTS in Python code? " , 
        answers : [
            { text : ' #This is a comment ' , correct: true},
            { text : ' /*This is a comment*/' , correct: false},
            { text : ' //This is a comment ' , correct: false},
            { text : ' /# This is a comment ' , correct: false},     
        ]
    },

    {
        question : "How do you create a variable with the numeric value 5? " , 
        answers : [
            { text :  'int(x) = 5', correct: false},
            { text : '  x = int(5)' , correct: false},
            { text : ' x = 5' , correct: true},
            { text : ' All the  answers are correct' , correct: false},
        ]
    },
    {
        question : "What is the correct file extension for Python files? " , 
        answers : [
            { text : ' .pyth', correct: false},
            { text : ' .p' , correct: false},
            { text : ' .pyt' , correct: false},
            { text : ' .py' , correct: true},
        ]
    },
    {
        question : "How do you create a variable with the floating number 2.8? " , 
        answers : [
            { text : '  x = float(2.8) ', correct: false},
            { text : '  x = 2.8 ' , correct: true},
            { text : '  float(x) = 2.8' , correct: false},
            { text : '  All the  answers are correct' , correct: false},
        ]
    },
    {
        question : "What is the correct way to create a function in Python? " , 
        answers : [
            { text : '  def myFunction(): ', correct: true},
            { text : '  create myFunction(): ' , correct: false},
            { text : '  function myfunction(): ' , correct: false},
            { text : '  fun myFunction()' , correct: false},
        ]
    },

    {
        question : " Which operator is used to multiply numbers?" , 
        answers : [
            { text : 'x ', correct: false},
            { text : '- ' , correct: false},
            { text : '+ ' , correct: false},
            { text : '* ' , correct: true},
        ]
    },

    {
        question : " Which operator can be used to compare two values? " , 
        answers : [
            { text : ' == ', correct: true},
            { text : ' = ' , correct: false},
            { text : ' >< ' , correct: false},
            { text : ' <> ' , correct: false},
        ]
    },

    {
        question : "Which of these collections defines a LIST? " , 
        answers : [
            { text : '  {"name": "apple", "color": "green"} ', correct: false},
            { text : '  ["apple", "banana", "cherry"] ' , correct: true},
            { text : ' {"apple", "banana", "cherry"} ' , correct: false},
            { text : '  ("apple", "banana", "cherry") ' , correct: false},
        ]
    },
    {
        question : "Which of these collections defines a TUPLES? " , 
        answers : [
            { text : '  {"name": "apple", "color": "green"} ', correct: false},
            { text : '  ["apple", "banana", "cherry"] ' , correct: false},
            { text : ' {"apple", "banana", "cherry"} ' , correct: false},
            { text : '  ("apple", "banana", "cherry") ' , correct: true},
        ]
    },


    

    
];


const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer-buttons");
const nextElement = document.getElementById("next-btn");


let currentQpIndex = 0;
let score = 0;

function startQuiz(){
    currentQpIndex =0;
    score =0;
    nextElement.innerHTML = "Next"
    showQuestion();
}

function showQuestion(){
    resetState();
    
    let currentQp = questions[currentQpIndex];
    let questionNo = currentQpIndex + 1;
    questionElement.innerHTML = questionNo +" ." + currentQp.question;
    
    
    currentQp.answers.forEach(answer => {
        const button = document . createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerElement.appendChild(button);


        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
        
    });
}


function resetState(){
    nextElement.style.display ="none"
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild);
    }
}



function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;

    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerElement.children).forEach(button =>{
        if(button.dataset.correct =="true" ){
            button.classList.add("correct")

        }
        button.disabled = "true"


    })
    nextElement.style.display="block"

}

function showScore(){
    resetState()
    questionElement.innerHTML= `You have Scored ${score}  out of ${questions.length}!`;
    nextElement.innerHTML = "Play Again";
    nextElement.style.display = "block";





}
function handleNextButton(){
    currentQpIndex ++;
    if(currentQpIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }



}
nextElement.addEventListener("click" , () =>{
    if(currentQpIndex < questions.length){
        handleNextButton()
    }
    else{
        startQuiz()
    }
})












    

startQuiz();