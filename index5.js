const questions = [
    {
        question : "What is a correct syntax to output 'Hello World' in Java?  " , 
        answers : [
            { text : ' System.out.println("Hello World");' , correct: true},
            { text : ' echo("Hello World");' , correct: false},
            { text : ' Console.WriteLine("Hello World");' , correct: false},
            { text : ' print ("Hello World");' , correct: false},
        ]
    },
    {
        question : " How do you create a variable with the floating number 2.8? " , 
        answers : [
            { text : ' float x = 2.8f;' , correct: true},
            { text : ' x = 2.8f;' , correct: false},
            { text : ' int x = 2.8f;' , correct: false},
            { text : ' byte x = 2.8f  ' , correct: false},
        ]
    },
    {
        question : " Which method can be used to return a string in upper case letters?  " , 
        answers : [
            { text : ' touppercase()' , correct: false},
            { text : ' tuc()' , correct: false},
            { text : ' toUpperCase()' , correct: true },
            { text : ' upperCase()' , correct: false},
        ]
    },
    {
        question : "How do you create a method in Java?  " , 
        answers : [
            { text : ' methodName[]' , correct: false},
            { text : ' (methodName)' , correct: false},
            { text : ' methodName()' , correct: true},
            { text : ' methodName.' , correct: false},
        ]
    },
    {
        question : " Which keyword is used to create a class in Java? " , 
        answers : [
            { text : 'class()' , correct: false},
            { text : 'class' , correct: false},
            { text : 'className' , correct: true},
            { text : 'MyClass' , correct: false},
        ]
    },
    {
        question : " What is the correct way to create an object called myObj of MyClass? " , 
        answers : [
            { text : ' MyClass myObj = new MyClass();' , correct: true},
            { text : ' class myObj = new MyClass();' , correct: false},
            { text : ' new myObj = MyClass();' , correct: false},
            { text : ' class MyClass = new myObj();' , correct: false},
        ]
    },
    {
        question : "Which method can be used to find the highest value of x and y?  " , 
        answers : [
            { text : ' Math.largest(x,y)' , correct: false},
            { text : ' Math.maximum(x,y)' , correct: false},
            { text : ' Math.max(x,y)' , correct: true},
            { text : ' Math.maxNum(x,y)' , correct: false},
        ]
    },
    {
        question : " Which keyword is used to import a package from the Java API library? " , 
        answers : [
            { text : 'lib' , correct: false},
            { text : 'import' , correct: true},
            { text : 'getlib' , correct: false},
            { text : 'package' , correct: false},
        ]
    },
    {
        question : "Which statement is used to stop a loop? " , 
        answers : [
            { text : 'stop' , correct: false},
            { text : 'end' , correct: false},
            { text : 'break' , correct: true},
            { text : 'return' , correct: false},
        ]
    },
    {
        question : " Which operator is used to add together two values? " , 
        answers : [
            { text : ' The * sign' , correct: false},
            { text : ' The + sign' , correct: true},
            { text : ' The - sign' , correct: false},
            { text : ' The / sign' , correct: false},
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