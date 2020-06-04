// Your code goes here
console.log("Project is up, sanity test")

//  * [x] `mouseover`
// 	* [x] `keydown`
// 	* [x] `wheel`
// 	* [x] `drag / drop`
// 	* [ ] `load`
// 	* [x] `focus`
// 	* [ ] `resize`
// 	* [ ] `scroll`
// 	* [ ] `select`
// 	* [x] `dblclick`

//mouseover

let mousePink = document.querySelector("nav");
mousePink.addEventListener("mouseover", function(event){
    event.target.style.color = "pink";
    event.target.style.backgroundColor = "red";
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




// function zoom(event){
//     event.preventDefault();

//     scale += event.deltaY * -0.01;

//     scale = Math.min(Math.max(.125, scale), 4);

//     el.style.transform = `scale(${scale})`;
// }
// let scale = 1;
// const el = document.querySelector("intro");
// el.onwheel = zoom;




//load

//focus

//resize








