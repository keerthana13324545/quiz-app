const questions = [
    {
        question : "What does HTML stand for?v  " , 
        answers : [
            { text : ' Hyper Text Markup Language' , correct: true},
            { text : ' Hyperlinks and Text Markup Language' , correct: false},
            { text : ' Home Tool Markup Language' , correct: false},
            { text : ' Home Text Markup Language' , correct: false},
            
        ]
    },
    {
        question : "Who is making the Web standards? " , 
        answers : [
            { text : 'Microsoft' , correct: false},
            { text : ' The World Wide Web Consortium' , correct: true},
            { text : 'Google' , correct: false},
            { text : 'Mozilla' , correct: false},
        ]
    },
    {
        question : "Choose the correct HTML element for the largest heading? <__> " , 
        answers : [
            { text : 'h1' , correct: true},
            { text : 'head' , correct: false},
            { text : 'heading' , correct: false},
            { text : 'h6' , correct: false},
        ]
    },
    {
        question : "What is the correct HTML element for inserting a line break? <__>" , 
        answers : [
            { text : 'lb' , correct: false},
            { text : 'end' , correct: false},
            { text : 'break' , correct: false},
            { text : 'br' , correct: true},
        ]
    },
    {
        question : " What is the correct HTML for adding a background color? " , 
        answers : [
            { text : ' body style="background-color:yellow;' , correct: true},
            { text : 'body bg="yellow"' , correct: false},
            { text : ' background>yellow</background' , correct: false},
            { text : 'bg = violet' , correct: false},
        ]
    },
    {
        question : "Choose the correct HTML element to define important text ?" , 
        answers : [
            { text : 'i' , correct: false},
            { text : 'important' , correct: true},
            { text : 'b' , correct: false},
            { text : 'strong' , correct: false},
        ]
    },
    {
        question : "Choose the correct HTML element to define emphasized text " , 
        answers : [
            { text : 'i' , correct: false},
            { text : 'em' , correct: true},
            { text : 'lb' , correct: false},
            { text : 'br' , correct: false},
        ]
    },
    {
        question : " What is the correct HTML for creating a hyperlink? <a>___</a> " , 
        answers : [
            { text : ' http://www.w3schools.com' , correct: false},
            { text : '  name="http://www.w3schools.com">W3Schools.com' , correct: false},
            { text : '  url="http://www.w3schools.com">W3Schools.com ', correct: false},
            { text : '  href="http://www.w3schools.com">W3Schools' , correct: true},
        ]
    },
    {
        question : " Which character is used to indicate an end tag " , 
        answers : [
            { text : '>' , correct: false},
            { text : '<' , correct: false},
            { text : '*' , correct: false},
            { text : '/' , correct: true},
        ]
    },
    {
        question : " Which HTML element defines the title of a document?" , 
        answers : [
            { text : 'head' , correct: false},
            { text : 'title' , correct: true},
            { text : 'meta' , correct: false},
            { text : 'body' , correct: false},
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