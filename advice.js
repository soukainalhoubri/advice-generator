const adviceId=document.getElementById("advice-id");
const advice=document.getElementById("advice");
const dice=document.getElementById("dice");

window.onload = showQuote;

dice.addEventListener("click", function(){
    showQuote();
});

function showQuote(){
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then((data) => data.slip)
    .then((data) => {
     adviceId.style.display="None";
    //  advice.textContent = data.advice;
    })
    .catch((error) => {
        alert(error);
    })
}
