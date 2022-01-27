import React from "react";

function add(a,b){
    let sum = a+b;
    return sum;
}
function mult(a,b){
    let mul = a*b;
    return mul;
}
function div(a,b){
    if(a>=b){
        return (a/b).toFixed(2);
    }
    else{
        return alert("you have enter wrong values");
    }
}
function sub(a,b){
    return a-b;
}
export {add,sub,div,mult};