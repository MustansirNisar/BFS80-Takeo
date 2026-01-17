// syntax
// let arrayName = [item1, item2, item3, item4, ...]

// let fruits = ["Apple",true,29, "Mango", "Grapes"]
// console.log(fruits)

// let fruits = ["Apple", "Grapes", "Mango", "Strawberry", "Orange"]

// fruits[2] = "Litchi"
// console.log(fruits)
// console.log(fruits.length)
// console.log(fruits[1])
// console.log(fruits[3])

//Looping through an Array
// let fruits = ["Apple", "Grapes", "Mango", "Strawberry", "Orange"]
// for(let i=0; i<fruits.length; i++){
//     console.log(`The element at index ${i} is ${fruits[i]} `)
// }

// for...of loop
// syntax
// for(let variable of iterable){
//     code to run
// }

// let fruits = ["Apple", "Grapes", "Mango", "Strawberry", "Orange"]
// for(let f of fruits){
//     console.log(f)
// }

// let str = "Welcome"
// for(let char of str){
//     console.log(char)
// }


// Array Methods
// let fruits = ["Apple", "Grapes", "Mango", "Strawberry", "Orange"]
// push()....adds an item to the end of an array
// fruits.push("Mulberry","fruitNew")
// console.log(fruits)
//pop()....removes last item from an array
// let lastItem = fruits.pop()
// console.log(fruits)
// console.log(lastItem)
// // unshift()...adds an item to the beginning of an array
// fruits.unshift("Watermelon")
// console.log(fruits)
// shift()....removes the first item from an array
// fruits.shift()
// console.log(fruits)
// let fruits = ["Apple", "Grapes", "Mango", "Strawberry", "Orange"]
// toString()....converts an array to a string
// console.log(fruits.toString())
// console.log(fruits)

//concat()....merges two or more arrays
// let arr1 = [1,2,3,4,5]
// let arr2 = ["ab", "cd", "ef"]
// let concatt = arr1.concat(arr2)
// console.log(concatt)

// slice()...creates a shallow copy of a portion of an array
// let fruits = ["Apple", "Grapes", "Mango", "Strawberry", "Orange"]
// let newArr = fruits.slice(1,3)
// console.log(newArr)

// splice...adds or removes items from any postion of an array.
// syntax...array.splice(startIndex, numberOfItemsToDelete, itemAdd1, itemAdd2, ....)
// let fruits = ["Apple", "Grapes", "Mango", "Strawberry"]
// fruits.splice(1,1,"Orange","dlfkjld","dlkfhdk")
// fruits.splice(2,1)
// fruits.splice(1,0,"newFruit")
// console.log(fruits)