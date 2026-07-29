
//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
const page1=document.querySelector("#page1");
const page2=document.querySelector("#page2");
const page3=document.querySelector("#page3");
function hideall(){ //function to hide all pages
page1.style.display="none";
page2.style.display="none";
page3.style.display="none";
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
hideall(); //we don't know which page is shown, so hideall
page1.style.display="block";
});
page2btn.addEventListener("click", function () {
hideall(); //we don't know which page is shown, so hideall
page2.style.display="block";
});
page3btn.addEventListener("click", function () {
hideall(); //we don't know which page is shown, so hideall
page3.style.display="block";
});

//MCQ Quiz
hideall(); //call hideall function to hide all pages
const btnSubmit=document.querySelector("#btnSubmit");
btnSubmit.addEventListener("click",CheckAns);
const scorebox=document.querySelector("#scorebox");
var q1,q2,q3,q4,q5,score=0;
function CheckAns(){
score=0; //reset score to 0, check ans and give score if correct
//read the value of the selected radio button for q1
q1=document.querySelector("input[name='q1']:checked").value;
console.log(q1); //check q1 value retrieved
if(q1=="11")score++;
//read the value of the selected radio button for q2
q2=document.querySelector("input[name='q2']:checked").value;
console.log(q2); //check q2 value retrieved
if(q2=="90 minutes")score++;
//read the value of the selected radio button for q3
q3=document.querySelector("input[name='q3']:checked").value;
console.log(q3); //check q3 value retrieved
if(q3=="Goalkeeper")score++;
//read the value of the selected radio button for q4
q4=document.querySelector("input[name='q4']:checked").value;
console.log(q4); //check q4 value retrieved
if(q4=="Score more goals than the opponent")score++;
//read the value of the selected radio button for q5
q5=document.querySelector("input[name='q5']:checked").value;
console.log(q5); //check q5 value retrieved
if(q5=="FIFA World Cup")score++;
scorebox.innerHTML="Score:"+score;
}

//Mini Game
const SoccerBallId = document.getElementById("SoccerBallId");
function GetRandom(min,max){
//this will select a number between min and max
return Math.round(Math.random() * (max - min)) + min;
}
function MoveBall() {
SoccerBallId.style.left = GetRandom(0, 500) + "px";
SoccerBallId.style.top = GetRandom(0, 500) + "px";
}
var MoveBallItvId = setInterval(MoveBall, 1000);
const scoreCounter=document.getElementById("scoreCounter");
const kickballAudio = new Audio("./audio/kickball.mp3");
var score=0; //to track how many clicks
function ballCatch() {
//increases score after clicking
score++;
//update html scorebox
scoreCounter.innerHTML = "Score: " + score;
kickballAudio.play();
}
//link ball to mouseclick to ballCatch function
SoccerBallId.addEventListener("click",ballCatch);
document.addEventListener("keydown",function(evt){
console.log(evt);
SoccerBallId.addEventListener("click",  function(){
SoccerBallId.classList.remove("shrink");

// Restart the animation
void SoccerBallId.offsetWidth;

SoccerBallId.classList.add("shrink");
});
if(evt.code=="KeyA"){
SoccerBallId.classList.add("anim1");
}
if(evt.code=="KeyB"){
SoccerBallId.classList.remove("anim1");
}
});