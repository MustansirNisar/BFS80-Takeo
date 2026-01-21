// function greet(){
//     alert("welcome to event handling")
// }

let button = document.querySelector("#btn")
button.onclick = ()=>{
    button.style.backgroundColor = "yellow"
    button.style.color = "red"
    button.style.border = "4px solid green"
    button.textContent = "Clicked!"
    button.style.height = "100px"  
}
let heading = document.querySelector("#head")
heading.onmouseover = ()=>{
    heading.style.backgroundColor = "yellow"
    heading.style.color = "red"
    heading.style.border = "4px solid green"
    heading.textContent = "Clicked!"
    heading.style.height = "100px"  
}