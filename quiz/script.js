document.addEventListener("DOMContentLoaded",()=>{
    const startBtn=document.getElementById("start-btn")
    const restartBtn=document.getElementById("restart-btn")
    const NextBtn=document.getElementById("next-btn")
    const questionContainer=document.getElementById("question-container")
    const choicesList=document.getElementById("choices-list")
    const resultContainer=document.getElementById("result-container")
    const scoreDisplay =document.getElementById("score")
    const questionText =document.getElementById("question-text")
    const questions=[
        {
            question:"What is the capital of France?",
            choices:["Paris","London","Berlin","Madrid"],
            answer:'Paris',
        },       
        {
            question:"Which planet is known as the red Planet?",
            choices:["Mars","Venus","Jupiter","Saturn"],
            answer:"Mars",
        },
        {
            question:"Who wrote Hamlet?",
            choices:["Charles Dickens","Jane Austen","William Shakespeare","Mark Twain"],
            answer:"William Shakespeare",
        },
    ]
    let currentQuestionIndex=0;
    let score=0;

    startBtn.addEventListener("click",startQuiz)
    NextBtn.addEventListener('click',()=>{
        currentQuestionIndex++;
        if(currentQuestionIndex<questions.length){
            showQuestion();
        }
        else{
            showResult();
        }
    })

    restartBtn.addEventListener('click',()=>{
        currentQuestionIndex=0;
        score=0;
        resultContainer.classList.add('hidden')
        startQuiz();
    })

    function startQuiz(){
        startBtn.classList.add('hidden');
        resultContainer.classList.add('hidden')
        questionContainer.classList.remove('hidden')
        showQuestion()
    }

    function showQuestion(){
        NextBtn.classList.add('hidden')
        questionText.textContent=questions[currentQuestionIndex].question;
        choicesList.innerHTML="";  
        // clears previous choices
        questions[currentQuestionIndex].choices.forEach(choice =>{
            const li= document.createElement('li')
        li.textContent  = choice
        li.addEventListener('click', () => selectAnswer(choice,li))
        choicesList.appendChild(li); 
        })
    }


    function selectAnswer(choice,element){
        const correctAnswer=questions[currentQuestionIndex].answer
        if(choice===correctAnswer){
            score++;
        }
        element.classList.add("selected");
        NextBtn.classList.remove('hidden')
        const choices = choicesList.querySelectorAll('li');
        choices.forEach(choice => choice.style.pointerEvents = 'none');

    }
    function showResult(){
        questionContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');
        scoreDisplay.textContent= `${score} out of ${questions.length}`
    }


})