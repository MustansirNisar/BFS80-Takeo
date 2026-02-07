// syntax
// let objectName = {
//     key1: value1,
//     key2: value2, 
//     key3: value3
// }

let student = {
    fName: "Sarbesh",
    age: 23,
    course: "Full Stack Dev",
    id: 1,
    isRegistered: true
}
console.log(student)
// console.log(typeof student)
//Accessing Object Properties
console.log(student.fName)
console.log(student.id)
console.log(student["course"])
console.log(student["isRegistered"])

// let student = {
//     fName: "Hemanth",
//     id: 2,
//     course: "Software Engineering",
//     age: 24
// }
// //Adding a new property
// student.city = "New York"
// // console.log(student)
// //Updating existing properties
// student.age = 20;
// // console.log(student)
// //Deleting a property
// delete student.course;
// console.log(student)

// let student = {
//     fName: "Hemanth",
//     id: 2,
//     course: "Software Engineering",
//     age: 24,
//     greet: function(){
//         console.log("Hello, my name is Hemanth")
//     },
//     address: {
//         city: "New York",
//         zip: 12345
//     }
// }
// // console.log(student.address.zip)
// student.greet();


// Methods
// let student = {
//     fName: "Hemanth",
//     id: 2,
//     course: "Software Engineering",
//     age: 24
// }
// object.keys()...returns an array of keys
// let newArr = Object.keys(student)
// console.log(newArr)
// Object.keys(student).forEach((key)=>{
//     console.log(key, student[key] )
// })
//Object.values()....returns an array of property values
// console.log(Object.values(student))
// let marks = {
//     maths: 90,
//     science: 80,
//     english: 85,
//     Computer: 90
// }
// let total = Object.values(marks).reduce((sum, value)=>{
//         return sum + value;
// },0)
// console.log(total)
// let student = {
//     fName: "Hemanth",
//     id: 2,
//     course: "Software Engineering",
//     age: 24
// }
// Object.entries()....returns an array of key-value pairs
// console.log(Object.entries(student))

//Object.freeze(obj)...makes an object immutable
// Object.freeze(student)
// student.age = 20;
// student.city = "New York"
// delete student.id;
// console.log(student)
//Object.seal(obj)...prevents adding or removing properties but allows modifying porperty values
// Object.seal(student)
// student.age = 20;
// student.city = "New York"
// delete student.id;
// console.log(student)

let student = {
    fName: "Hemanth",
    id: 2,
    course: "Software Engineering",
    age: 24
}

// for...in loop
for(let abc in student){
    console.log(abc, student.abc)

}


