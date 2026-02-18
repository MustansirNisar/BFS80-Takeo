// console.log("Step 1")
// console.log("Step 2")//5 sec //Api Call
// console.log("Step 3")

// let a = 4;
// let b = 10;
// let sum = a + b;
// console.log(sum)


// console.log("Hello and Welcome")

// setTimeout(()=>{
// console.log("How are you doing?")
// }, 2000)

// console.log("Take care, Good bye")


// function greet(){
//     console.log("Hello and Welcome to this bootcamp")
// }

// function welcome(callBack){
//     console.log("Welcome to the backend part of the bootcamp")
//     callBack();
//     console.log("Have a nice day")
// }

// welcome(greet)

// function sum(a, b){
//     console.log("The sum of the numbers is: ", a+b)
// }

// function sub(a, b){
//     console.log("The difference of the numbers is: ", a-b)
// }

// function calculator(a, b, callBack){
//     callBack(a,b);
// }

// calculator(2,3, sum)
// calculator(2,3, sub)

// function getData(id, getNextUser){
//     setTimeout(()=>{
//     console.log("This is the data corrsponding to the id: ", id)
//     if(getNextUser){
//     getNextUser();
//     }
//     }, 2000 );
// }

// getData(1, 
//     ()=>getData(2,
//         ()=>getData(3, 
//             ()=>getData(4, 
//                 ()=>getData(5, 
//                     ()=>getData(6)))) ))

// getData(1, ()=>{
//     console.log("Getting Data 2...")
//     getData(2, ()=>{
//         console.log("Getting Data 3...")
//         getData(3, ()=>{
//             console.log("Getting Data 4...")
//             getData(4)
//         })
//     })
// })


// let promise = new Promise((resolve, reject)=>{
//         console.log("We are promising you the delivery")
//         // resolve(12345)
//         reject("We couldn't deliver the product")
// })


// function getData(id, getNextUser){

//    return new Promise((resolve, reject)=>{
//      setTimeout(()=>{
//     console.log("This is the data corrsponding to the id: ", id)
//     resolve("The item has been delivered")
//     // reject("Not able to deliver")
//     if(getNextUser){
//     getNextUser();
//     }
//     }, 2000 );
//    });
// }

// getData(1)
// .then(()=>getData(2))
// .then(()=>getData(3))
// .then(()=>getData(4))
// .then(()=>getData(5))

// let value = getData(1)

// // value.then((res)=>{
// //     console.log("Let's start configuring the phone", res)
// // })
// value.catch((rej)=>{
//    console.log("Let's order again", rej)
//  })



// async function greet() {
//     console.log("Hello")
// }

// function weatherApi(){
//     return new Promise((reslove, reject)=>{
//         setTimeout(() => {
//             console.log("Here is the Data")
//             reslove("Successfull")
//         }, 2000);
//     })
// }

// async function getData() {
//      await weatherApi();
//      await weatherApi();
//      await weatherApi();
//      await weatherApi();
// }

// getData();

function getData(id){

   return new Promise((resolve, reject)=>{
     setTimeout(()=>{
    console.log("This is the data corrsponding to the id: ", id)
    resolve("The item has been delivered")
    // reject("Not able to deliver")
    }, 2000 );
   });
}
async function getAllData() {
    console.log("Getting Data 1...")
    await getData(1);
    console.log("Getting Data 2...")

    await getData(2);
    console.log("Getting Data 3...")

    await getData(3);
    console.log("Getting Data 4...")

    await getData(4);
    await getData(5);
    await getData(6);
    await getData(7);
}
getAllData();