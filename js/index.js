// Your code goes here
console.log("Project is up, sanity test")

//  * [x] `mouseover`
// 	* [x] `keydown`
// 	* [x] `wheel`
// 	* [x] `drag / drop`
// 	* [x] `load`
// 	* [x] `focus`
// 	* [ ] `resize`
// 	* [ ] `scroll`
// 	* [x] `select`
// 	* [x] `dblclick`

//mouseover

let mousePink = document.querySelector("nav");
mousePink.addEventListener("mouseover", function(event){
    event.target.style.color = "pink";
    event.target.style.backgroundColor = "red";
})

let mousePurple = document.querySelector(".destination p");
mousePurple.addEventListener("mouseover", function(event){
    event.target.style.color = "purple";
})

//keydown

let offWeGo = document.querySelector(".intro h2");
document.addEventListener("keydown", function(event){
console.log (`${event.code}`);
})
console.log(offWeGo);

//drag/drop
const drag = document.querySelector(".intro > p")
drag.draggable = "true";
drag.addEventListener("dragstart", e =>{
    e.target.style.color = "green";
});

drag.addEventListener("dragend", e => {
    e.target.style.color = "red";
});

//wheel
let btnWheel = document.querySelector(".btn");
console.log(btnWheel);

btnWheel.addEventListener("wheel", function(){
    console.log("I was wheeled over!")});


//dblclick
let btnDoubleClick = document.querySelector(".btn");
console.log(btnDoubleClick);

btnDoubleClick.addEventListener("dblclick", function(e){
    console.log("I was double clicked!")
    e.target.style.color = "red";
});


//focus
const input = document.querySelector("input")
input.addEventListener('focus', event =>{
    event.target.placeholder = "HELLO";
});

//select
function logSelection(event){
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;
}
const input2 = document.querySelector(".input2")
input2.addEventListener('select', logSelection);
console.log(logSelection);


//scroll



//load
const buttonSuccess = document.querySelector(".btnSuccess")

buttonSuccess.addEventListener('click', (event) => {
    console.log(`You successfully clicked the button!`)
    event.target.style.color = "red";
});



//resize
//let resize = window.addEventListener('resize', reportWindowSize);
//console.log(resize);







