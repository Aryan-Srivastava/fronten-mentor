const adivce_id = document.getElementById('advice-id-number');
const advice = document.getElementById('advice');
const btn = document.getElementById('btn');

window.onload = getAdvice;

btn.addEventListener('click', function() {
    getAdvice();
})

function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => data.slip)
    .then(data => {
        adivce_id.textContent = data.id;
        advice.textContent = data.advice;
    })
    .catch(err => {
        alert(err.message);
    })
}