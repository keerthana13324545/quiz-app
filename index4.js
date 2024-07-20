const questions = [
    {
        question : "What is a correct syntax to output 'Hello World' in C++? " , 
        answers : [
            { text : ' Console.WriteLine("Hello World");' , correct: false},
            { text : ' print ("Hello World");' , correct: false},
            { text : ' cout << "Hello World";' , correct: true},
            { text : ' System.out.println("Hello World");' , correct: false},
        ]
    },
    {
        question : "Which data type is used to create a variable that should store text? " , 
        answers : [
            { text : 'Txt' , correct: true},
            { text : 'myString', correct: false},
            { text : 'String' , correct: true},
            { text : 'string' , correct: false},     
        ]
    },

    {
        question : "How do you create a variable with the numeric value 5? " , 
        answers : [
            { text : ' double x = 5' , correct: false},
            { text : ' int x = 5' , correct: true},
            { text : ' x = 5 ' , correct: false},
            { text : ' num x = 5' , correct: false},
        ]
    },
    {
        question : " Which method can be used to find the length of a string? " , 
        answers : [
            { text : 'length()' , correct: true},
            { text : 'getSize()' , correct: false},
            { text : 'getLength()' , correct: false},
            { text : 'len()' , correct: false},
        ]
    },
    {
        question : "Which header file lets us work with input and output objects - #include<_________>? " , 
        answers : [
            { text : ' inputstr' , correct: false},
            { text : ' iostream' , correct: true},
            { text : ' iosstring' , correct: false},
            { text : ' stream' , correct: false},
        ]
    },
    {
        question : "Which keyword is used to create a class in C++? " , 
        answers : [
            { text : 'className' , correct: false},
            { text : 'class()' , correct: false},
            { text : 'class' , correct: false},
            { text : 'Myclass' , correct: true},
        ]
    },
    {
        question : "Which method can be used to find the highest value of x and y? " , 
        answers : [
            { text : ' max(x,y)' , correct: true},
            { text : ' largest(x,y) ' , correct: false},
            { text : '  maxNum(x,y) ' , correct: false},
            { text : '  maximum(x,y) ' , correct: false},
        ]
    },
    {
        question : "How do you create a reference variable of an existing variable?  " , 
        answers : [
            { text : ' With the & operator ' , correct: true},
            { text : '  With the ref word ' , correct: false},
            { text : '  With the * operator ' , correct: false},
            { text : '  With the REF word ' , correct: false},
        ]
    },
    {
        question : "Which keyword is used to return a value inside a method? " , 
        answers : [
            { text : 'get' , correct: false},
            { text : 'break' , correct: false},
            { text : 'return' , correct: true},
            { text : 'void' , correct: false},
        ]
    },
    {
        question : "How do you start writing a while loop in C++? " , 
        answers : [
            { text : ' while x > y:' , correct: false},
            { text : ' while x > y {' , correct: true},
            { text : 'x > y  while {' , correct: false},
            { text : ' while (x > y)' , correct: false},
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