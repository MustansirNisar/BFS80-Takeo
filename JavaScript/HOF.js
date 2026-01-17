function add(a,b){
    return a+b;
}
function subt(a,b){
    return a-b;
}
function div(a,b){
    return a/b;
}

function operate(a,b,operation){
    return operation(a,b);
}
let result1 = operate(4,2,add)
let result2 = operate(4,2,subt)
let result3 = operate(4,2,div)
console.log(result1,result2,result3)