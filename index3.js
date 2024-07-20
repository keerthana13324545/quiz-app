const questions = [
    {
        question : "What is a correct syntax to output 'Hello World' in C? " , 
        answers : [
            { text : '  Console.WriteLine("Hello World"); ', correct: false},
            { text : '  printf("Hello World");' , correct: true},
            { text : '  System.out.printline("Hello World");' , correct: false},
            { text : '  cout << "Hello World"; ' , correct: false},
        ]
    },
    {
        question : "How do you insert COMMENTS in C code? " , 
        answers : [
            { text : ' #This is a comment ' , correct: false},
            { text : ' /*This is a comment*/' , correct: false},
            { text : ' //This is a comment ' , correct: true},
            { text : ' /# This is a comment ' , correct: false},
        ]
    },
    {
        question : "How can you create a variable with the numeric value 5? " , 
        answers : [
            { text : ' num = 5; ', correct: false},
            { text : ' int num = 5; ' , correct: true},
            { text : '  val num = 5; ' , correct: false},
            { text : '  num = 5 int; ' , correct: false},
        ]
    },
    {
        question : " Which function is often used to output values and print text? " , 
        answers : [
            { text : '  write() ', correct: false},
            { text : '  printf() ' , correct: true},
            { text : '  printword()' , correct: false},
            { text : '  output() ' , correct: false},
        ]
    },
    {
        question : " Which format specifier is often used to print integers?" , 
        answers : [
            { text : ' %f ', correct: false},
            { text : ' %d ' , correct: true},
            { text : ' %c ' , correct: false},
            { text : ' %s ' , correct: false},
        ]
    },
    {
        question : "  Which operator can be used to find the memory size (in bytes) of a data type or variable ?  " , 
        answers : [
            { text : ' The length property ', correct: false},
            { text : '  The sizeof property ' , correct: true},
            { text : '  The len property ' , correct: false},
            { text : '   The sizer property' , correct: false},
        ]
    },
    {
        question : "Which keyword can be used to make a variable unchangeable/read-only?" , 
        answers : [
            { text : '  final ', correct: false},
            { text : '  constant ' , correct: false},
            { text : '  const ' , correct: false},
            { text : '   readonly ' , correct: true},
        ]
    },
    {
        question : " What do we call the following? int myNumbers[] = {25, 50, 75, 100} ?" , 
        answers : [
            { text : '  A pointer', correct: false},
            { text : '  A class ' , correct: false},
            { text : '  An array' , correct: true},
            { text : '  None of the above ' , correct: false},
        ]
    },
    {
        question : "Which keyword is used to return a value inside a function? " , 
        answers : [
            { text : ' break ', correct: false},
            { text : ' return ' , correct: true},
            { text : ' get ' , correct: false},
            { text : 'void ' , correct: false},
        ]
    },
    {
        question : "Which statement can be used to select one of many code blocks to be executed? " , 
        answers : [
            { text : ' default ', correct: false},
            { text : ' when' , correct: false},
            { text : ' switch ' , correct: true},
            { text : ' break' , correct: false},
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