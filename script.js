"use strict"
var tabs = document.getElementsByClassName("tab")
var buttons = document.getElementsByTagName("button")



function changeTab(event, name){
    
    // var buttons = document.getElementById("btn")
    if(event.currentTarget.classList.contains("selected")) return
   
    for(var tab of tabs){
        tab.classList.remove("block")
        tab.classList.remove("animate")
        
    }

    // Prideda tabui pagal id block klasę
    document.getElementById(name).classList.add("block")

    setTimeout(function(){
        document.getElementById(name).classList.add("animate")
    }, 100)
    // Mygtukų stilius
    for(var button of buttons){
        button.classList.remove("selected")
    }

    event.currentTarget.classList.add("selected")
}


//Clock

function startTime(){
    const today = new Date()
    let h = today.getHours()
    let m = today.getMinutes()
    let s = today.getSeconds()
    m = checkTime(m)
    s = checkTime(s)
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}
function checkTime(i) {
    if(i<10) {i = "0" + i};
    return i
}


//Calculator
var answer = document.getElementById("abc")
answer.addEventListener("click", function(){
    let operation = document.getElementById('sign').value
    let number1 = document.getElementById("number1").valueAsNumber
    let number2 = document.getElementById("number2").valueAsNumber
    let span = document.getElementById("ans")
    let result 
    
    if(operation === '+') {
        result = number1 + number2;
    } else if (operation == '-') {
        result = number1 - number2;
    } else if (operation == '*'){
        result = number1 * number2;
    } else {
        result = number1 / number2;
    }
    number1 = ""

    span.innerText = result.toFixed(2)
})


//task
let taskAnswer = document.getElementById("submit")
taskAnswer.addEventListener("click", function(){
    let numberans = document.getElementById("stork").valueAsNumber
    let storky = document.getElementById("ans-1")

    if(numberans === 4){
        storky.innerText = "You Got It Right Yaaaaaaay!!!!"
    } else {
        storky.innerText = "Awwwwww Try Again ;( " 
    }
})









