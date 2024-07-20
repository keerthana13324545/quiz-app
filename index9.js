const questions = [
    {
        question : "Inside which HTML element do we put the JavaScript?  " , 
        answers : [
            { text : 'js' , correct: false},
            { text : 'javascipt' , correct: false},
            { text : 'script' , correct: true},
            { text : 'scripting' , correct: false},
        ]
    },
    {
        question : "What is the correct JavaScript syntax to change the content of the HTML element below? <p id='demo'>This is a demonstration.</p> " , 
        answers : [
            { text : ' document.getElement("p").innerHTML = "Hello World!";' , correct: false},
            { text : ' #demo.innerHTML = "Hello World!";' , correct: false},
            { text : ' document.getElementById("demo").innerHTML = "Hello World!";' , correct: true},
            { text : ' document.getElementByName("p").innerHTML = "Hello World!";' , correct: false},
        ]
    },
    {
        question : "Where is the correct place to insert a JavaScript? " , 
        answers : [
            { text : ' The head section' , correct: false},
            { text : ' The body section' , correct: false},
            { text : ' Both the head section and the body section are correct' , correct: true},
            { text : 'The doc section' , correct: false},
        ]
    },
    {
        question : " What is the correct syntax for referring to an external script called 'xxx.js'? " , 
        answers : [
            { text : ' script src="xxx.js"' , correct: true},
            { text : ' script link="xxx.js"' , correct: false},
            { text : ' script href="xxx.js"' , correct: false},
            { text : ' script img="xxx.js"' , correct: false},
        ]
    },
    {
        question : "How do you write 'Hello World' in an alert box? " , 
        answers : [
            { text : ' msgBox("Hello World");' , correct: false},
            { text : ' alertBox("Hello World");' , correct: false},
            { text : ' alert("Hello World");' , correct: true},
            { text : ' msg("Hello World");' , correct: false},
        ]
    },
    {
        question : " How do you create a function in JavaScript?  " , 
        answers : [
            { text : ' function=myFunction()' , correct: false},
            { text : ' function:myFunction()' , correct: false},
            { text : ' function myFunction()' , correct: true},
            { text : ' function.myFunction()' , correct: false},
        ]
    },
    {
        question : "How do you call a function named 'myFunction'? " , 
        answers : [
            { text : ' call myFunction()' , correct: false},
            { text : ' myFunction()' , correct: true},
            { text : 'call fun myFunction()' , correct: false},
            { text : 'call function myFunction()' , correct: false},
        ]
    },
    {
        question : " What is the correct JavaScript syntax for opening a new window called 'w2' ?   " , 
        answers : [
            { text : ' w2 = window.new("http://www.w3schools.com");' , correct: false},
            { text : ' w2 = window.open("http://www.w3schools.com");' , correct: true},
            { text : ' w2 = window.new("http:://www.w3schools.com");' , correct: false},
            { text : ' w2 = window.open("http:/www.w3schools.com");' , correct: false},
        ]
    },
    {
        question : "Which event occurs when the user clicks on an HTML element?" , 
        answers : [
            { text : ' onmouseclick' , correct: false},
            { text : ' onmouseover' , correct: false},
            { text : 'onclick' , correct: true},
            { text : 'onover' , correct: false},
        ]
    },
    {
        question : "How do you declare a JavaScript variable? " , 
        answers : [
            { text : ' variable carName;' , correct: false},
            { text : ' var carName;' , correct: true},
            { text : ' v carName;' , correct: false},
            { text : ' variables carName;' , correct: false},
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