// forEach()
// array.forEach(function(currentValue, index,  array){
// })
// OR
// array.forEach((currentValue, index array)=>{
// })
//current_value...The current element being processed
// index...the index of the current element
// array...the array forEach was called upon

let fruits = ["Apple", "Mango", "Cherry", "Litchi"]
fruits.forEach((current, index, array)=>{
        console.log(current, "is at index", index, "in the array: ", array)
        console.log(current.toUpperCase())
})

let numbers = [2, 3, 4, 5]
numbers.forEach((num)=>{
    console.log(num*2)
})
// map()
// syntax   
// array.map((currentValue, index, array)=>{
// })

let numbers = [2, 3, 4, 5]
const newNumbers = numbers.map((num)=>{
    return num*2;
})
console.log("This is the original array: ", numbers)
console.log("This is the modified array: ",newNumbers)

// filter
// syntax
// array.filter((currentValue, index, array)=>{
// })

const numbers = [1, 2, 3, 4, 5, 6 ,7, 8, 9]
const evenNums = numbers.filter((num)=>{
    return num%2===0;
})
// const evenNums = numbers.filter(num=>num%2===0)
// console.log(evenNums)


let fNames = ["Sarbesh", "Kabita", "Kreetan", "Hemanth"]
const newNames = fNames.filter((name)=>{
    return name.length>6;
})
console.log(newNames)


// reduce()
// syntax
// array.reduce((accumulator, currentValue, index, array)=>{
// },initialValue)
// accumulator...The running total or accumulated result
// initalValue...The starting value for the accumulator

const numbers = [1, 2, 3, 4, 5, 6 ,7, 8, 9]
let initalValue = 0;
const sum = numbers.reduce((acc, curr)=>{
        return acc + curr;
}, initalValue)
console.log(sum)
const numbers = [1, 24, 33, 12, 2, 4, 40, 9]
let initialValue = 0;
const largest = numbers.reduce((acc, curr)=>{
        return acc>curr?acc:curr
}, initialValue)
console.log(largest)
// Homework...find the smallest number from this array

let numbers = [1,2,3,4]
let doubled = numbers.reduce((acc, num)=>{
        acc.push(num*2)
        return acc;
}, [])
console.log(doubled)






