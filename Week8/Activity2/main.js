const d = new Date();
document.getElementById("dateContainer").innerText = d.getFullYear();
const questionContainer = document.getElementById('quest');
const resultContainer = document.getElementById('result');

hideresult();

document.getElementById('submitBtn').addEventListener('click', checkAnswers);

document.getElementById('btnRetake').addEventListener('click', resetQuiz);


function checkAnswers() {
    const correctAnswers = {
        q1: 'a',
        q2: 'b',
        q3: 'c'
    };
    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length;
    // Reset previous styling
    document.querySelectorAll('.options li').forEach(option => {
        option.classList.remove('correct', 'incorrect');
    });
    let total_ans = document.querySelectorAll('input[type="radio"]:checked').length

    if(total_ans != totalQuestions){ // to check if all question has answered
        alert(totalQuestions - total_ans +' unanswered question please check!')
        return;
    }
    // Check each question
    for (let question in correctAnswers) {
        const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
        const options = document.querySelectorAll(`input[name="${question}"]`);

        if (selectedAnswer) {
            const userAnswer = selectedAnswer.value;
            const correctAnswer = correctAnswers[question];

            options.forEach(option => {
                const li = option.parentElement;
                if (option.value === correctAnswer) {
                    li.classList.add('correct');
                }
                if (option.checked && option.value !== correctAnswer) {
                    li.classList.add('incorrect');
                }
            });
            if (userAnswer === correctAnswer) {
                score++;
            }
        }
    
    }
    document.getElementById('grade').innerText = 'Score: \t' + score + ' / ' + totalQuestions;

    displayResult();
}


function displayResult(){
   
    questionContainer.style.pointerEvents = 'none';
    resultContainer.style.display = 'grid';
    questionContainer.style.opacity = '.50';


}
function hideresult(){
    resultContainer.style.display = 'none';
    questionContainer.style.opacity = '1';
    questionContainer.style.pointerEvents = 'auto';

}
function resetQuiz(){
    document.querySelectorAll('input[type="radio"]:checked').forEach((element) => element.checked = false);
    hideresult();
    document.querySelectorAll('.options li').forEach(option => {
        option.classList.remove('correct', 'incorrect');
    });
    
}

