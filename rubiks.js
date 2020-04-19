let rubiks_cube = document.querySelector(".rubiks_cube");
let runbtn = document.querySelector(".runbtn");
runbtn.addEventListener('click', enable);

function enable() {
    console.log(rubiks_cube)
    rubiks_cube.classList.toggle("run")
}



let onejumpbtn = document.querySelector(".onejumpbtn");
onejumpbtn.addEventListener('click', onejump);

function onejump() {
    console.log(rubiks_cube)
    rubiks_cube.classList.toggle("onejump")
}








let fadebtn = document.querySelector(".fadebtn");
fadebtn.addEventListener('click', start1);

function start1() {
    console.log(rubiks_cube)
    rubiks_cube.classList.toggle("fade")
}




let shakebtn = document.querySelector(".shakebtn");
shakebtn.addEventListener('click', start3);

function start3() {
    console.log(rubiks_cube)
    rubiks_cube.classList.toggle("shake")
}



let rotatebtn = document.querySelector(".rotatebtn");
rotatebtn.addEventListener('click', start6);

function start6() {
    console.log(rubiks_cube)
    rubiks_cube.classList.toggle("rotate")
}

let blinkbtn = document.querySelector(".blinkbtn");
blinkbtn.addEventListener('click', start7);

function start7() {
    console.log(rubiks_cube)
    rubiks_cube.classList.toggle("blink")
}

let swingbtn = document.querySelector(".swingbtn");
swingbtn.addEventListener('click', start8);

function start8() {
    console.log(rubiks_cube)
    rubiks_cube.classList.toggle("swing")
}








