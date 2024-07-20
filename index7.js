const questions = [
    {
        question : "What does CSS stand for? " , 
        answers : [
            { text : ' Computer Style Sheets' , correct: false},
            { text : ' Creative Style Sheets' , correct: false},
            { text : ' Colorful Style Sheets' , correct: true},
            { text : ' Cascading Style Sheets' , correct: false},
        ]
    },
    {
        question : "What is the correct HTML for referring to an external style sheet? " , 
        answers : [
            { text : ' style src="mystyle.css"' , correct: false},
            { text : ' link rel="stylesheet" type="text/css" href="mystyle.css"' , correct: true},
            { text : ' stylesheet>mystyle.css</stylesheet' , correct: false},
            { text : 'script src="mystyle.css"' , correct: false},
        ]
    },
    {
        question : "Where in an HTML document is the correct place to refer to an external style sheet?  " , 
        answers : [
            { text : ' At the end of the document' , correct: false},
            { text : ' In the body section' , correct: false},
            { text : ' In the head section' , correct: true},
            { text : ' In the   script section' , correct: false},
        ]
    },
    {
        question : "Which HTML tag is used to define an internal style sheet?  " , 
        answers : [
            { text : 'script' , correct: false},
            { text : 'css' , correct: false},
            { text : 'body' , correct: false},
            { text : 'style' , correct: true},
        ]
    },
    {
        question : " Which is the correct CSS syntax?   " , 
        answers : [
            { text : ' {body;color:black;}' , correct: false},
            { text : ' body {color: black;}' , correct: true},
            { text : ' body:color=black;' , correct: false},
            { text : ' {body:color=black;}' , correct: false},
        ]
    },
    {
        question : "Which property is used to change the background color? " , 
        answers : [
            { text : ' background-color' , correct: true},
            { text : 'bgcolor' , correct: false},
            { text : 'bg' , correct: false},
            { text : 'color' , correct: false},
        ]
    },
    {
        question : "How do you make each word in a text start with a capital letter?  " , 
        answers : [
            { text : ' transform:capitalize' , correct: false},
            { text : ' text-style:capitalize' , correct: false},
            { text : ' text-transform:capitalize' , correct: true},
            { text : ' You can1`t do that with CSS' , correct: false},
        ]
    },
    {
        question : " Which CSS property controls the text size? " , 
        answers : [
            { text : ' font-size' , correct: false},
            { text : 'text -size' , correct: true},
            { text : ' font-style' , correct: false},
            { text : 'text - style' , correct: false},
        ]
    },
    {
        question : "How do you select an element with id 'demo'? " , 
        answers : [
            { text : 'demo' , correct: false},
            { text : '#demo' , correct: true},
            { text : '.decom' , correct: false},
            { text : '$demo' , correct: false},
        ]
    },
    {
        question : " How do you select all p elements inside a div element?  " , 
        answers : [
            { text : ' div + p' , correct: false},
            { text : ' div p' , correct: false},
            { text : ' div * p' , correct: false},
            { text : ' div . p' , correct: true},
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