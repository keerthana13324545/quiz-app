const questions = [
    {
        question : "Which of the following bootstrap version should be used to support IE9? " , 
        answers : [
            { text : 'Bootstrap 1' , correct: false},
            { text : 'Bootstrap 2' , correct: false},
            { text : 'Bootstrap 3' , correct: true},
            { text : 'Bootstrap 4' , correct: false},
            
        ]
    },
    {
        question : " The Bootstrap grid system is based on how many columns? " , 
        answers : [
            { text : '3' , correct: false},
            { text : '6' , correct: false},
            { text : '9' , correct: false},
            { text : '12' , correct: true},
        ]
    },
    {
        question : "Which class adds zebra-stripes to a table?   " , 
        answers : [
            { text : ' .table-zebra' , correct: true},
            { text : ' .table-striped' , correct: false},
            { text : ' .table-bordered' , correct: false},
            { text : ' .even and .odd' , correct: false},
        ]
    },
    {
        question : " Which class shapes an image to a circle? " , 
        answers : [
            { text : ' .img-thumbnail' , correct: false},
            { text : ' .img-circle' , correct: true},
            { text : ' .img-round' , correct: false},
            { text : ' .img-rounded' , correct: false},
        ]
    },
    {
        question : "Which class is used to create a big box for calling extra attention? " , 
        answers : [
            { text : ' .bigbox' , correct: false},
            { text : ' .container' , correct: true},
            { text : ' .jumbotron' , correct: false},
            { text : ' .class' , correct: false},
        ]
    },
    {
        question : "Which class is used to create a badge? " , 
        answers : [
            { text : '.label' , correct: false},
            { text : '.badge' , correct: true},
            { text : '.flag' , correct: false},
            { text : '.tag' , correct: false},
        ]
    },
    {
        question : "Which class indicates a dropdown menu?  " , 
        answers : [
            { text : ' .dropdown-list' , correct: false},
            { text : ' .dropdown' , correct: true},
            { text : ' .list' , correct: false},
            { text : '.select' , correct: false},
        ]
    },
    {
        question : " Which of the following class in Bootstrap is used to provide a responsive fixed width container?" , 
        answers : [
            { text : '.container-fixed' , correct: true},
            { text : '.container-fluid' , correct: false},
            { text : '.container' , correct: false},
            { text : 'All of the above' , correct: false},
        ]
    },
    
    {
        question : " Which plugin is used to cycle through elements, like a slideshow? " , 
        answers : [
            { text : 'Carousel Plugin' , correct: true},
            { text : 'Modal Plugin' , correct: false},
            { text : 'Tooltip Plugin' , correct: false},
            { text : 'None of the mentioned' , correct: false},
        ]
    },
    {
        question : " Which of the following bootstrap styles can be used to create a default progress bar? " , 
        answers : [
            { text : '.nav-progress' , correct: false},
            { text : '.nav.progress' , correct: false},
            { text : '.progress .progress-bar' , correct: true},
            { text : 'All of the mentioned' , correct: false},
        ]
    }
    
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