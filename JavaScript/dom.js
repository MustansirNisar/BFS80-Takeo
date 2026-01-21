// console.log(window)
// // window.console.log("How are you")
// // console.log(window.document)
// console.dir(document)

//getElementbyId
// let heading = document.getElementById("heading")
// // console.log(heading)
// let paragraph = document.getElementById("para")

//getElementsbyClassName
// let boxes = document.getElementsByClassName("boxes")

//getelementsbyTagName()
// let boxes = document.getElementsByTagName("div")

//querySelector()
// let heading = document.querySelector("#heading")
// let heading = document.querySelector("h1")
// let box = document.querySelector("div")
// let box = document.querySelector(".boxes")

//querySelectorAll()
// let divs = document.querySelectorAll(".boxes")


//Dom Manipulation
// tagName
// const testing = document.querySelector(".boxes")
// console.log(testing.tagName)

//innerText...returns the visible text within an element
// const heading = document.querySelector("#heading")
// console.log(heading.innerText);

//textContent...returns all the text inside an element ragardless of visibility
// console.log(heading.textContent)
// heading.textContent = "You are not welcome here"


//innerHTML....returns the entire HTML content inside an element
// console.log(heading.innerHTML)
// heading.innerHTML = "You are <i>not</i> welcome"



//Accessing and Modifying Attributes
// const heading = document.querySelector("h1")
// console.log(heading.getAttribute("id"))
// console.log(heading.getAttribute("class"))

// heading.setAttribute("class","new")
// heading.setAttribute("style","background-color: aqua; color:red")
//hasAttribute(attributeName)...checks if an element has a specific att.
// heading.removeAttribute("class")

// heading.style.backgroundColor = "aqua"
// heading.style.color = "blue"
// heading.style.border = "2px solid red"

//classList
// heading.classList.add("headingStyle")


//How to insert and delete Elements

//Inserting Elements
let newItem = document.createElement("li")
newItem.innerText = "Litchi"
let list = document.querySelector("#list")
//append()...adds a node/multiple nodes as the last child of a parent.
// list.append(newItem);

//prepend()...adds at the beginning(as the first child)
// list.prepend(newItem);

// before()...inserts content before the selected element itself.
// list.before(newItem);

//after()...insert content after the selected element.
// list.after(newItem)

//insertBefore()....inserts a node before a specified child node
// let fruit = document.querySelector("#bn")
// list.insertBefore(newItem, fruit)

//remove()...removes the element itself
// let fruit = document.querySelector("#bn")
// fruit.remove();

//removeChild().....homework








