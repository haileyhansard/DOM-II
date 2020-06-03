// Your code goes here
console.log("Project is up, sanity test")

//  * [x] `mouseover`
// 	* [ ] `keydown`
// 	* [ ] `wheel`
// 	* [ ] `drag / drop`
// 	* [ ] `load`
// 	* [ ] `focus`
// 	* [ ] `resize`
// 	* [ ] `scroll`
// 	* [ ] `select`
// 	* [ ] `dblclick`

//mouseover
// let test = document.getElementById("test");
// test.addEventListener("mouseover", function(event){
//     event.target.style.color = "purple";
// }

let mousePink = document.querySelector("nav");
mousePink.addEventListener("mouseover", function(event){
    event.target.style.color = "pink";
    event.target.style.backgroundColor = "red";
})

//keydown

// let offWeGo = document.querySelector("intro h2");
// offWeGo.addEventListener("keydown", function(event){
// log.textContent += `${e.code}`;
// })

//offWeGo.addEventListener

//wheel

function zoom(event){
    event.preventDefault();

    scale += event.deltaY * -0.01;

    scale = Math.min(Math.max(.125, scale), 4);

    el.style.transform = `scale(${scale})`;
}
let scale = 1;
const el = document.querySelector("intro");
el.onwheel = zoom;

//drag/drop

//load

//focus

//resize





