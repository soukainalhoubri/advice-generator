var adviceId=document.getElementById("advice-id");
var paragraph=document.getElementById("advice");
var dice=document.getElementById("dice");

window.onload = showQuote;

function showQuote(){
    
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then((data) => data.slip)
    .then((data) => {
    adviceId.innerText=data.id
    paragraph.innerText=data.advice
    
    })
    .catch((error) => {
        alert(error);
    })
	
}