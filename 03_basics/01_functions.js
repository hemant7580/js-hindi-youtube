function sayMyName(){
    console.log("H");
    console.log("E");
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("T");

}
// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1+number2);
// }


function addTwoNumbers(number1, number2) {
    // let result = number1+number2;
    // console.log("hemant");
    // return result;
    // console.log("hemant");

    return number1 + number2;
}

// addTwoNumbers(3,4);
// addTwoNumbers(3,"4");
// addTwoNumbers(3,"a");
// addTwoNumbers(3,null);

const result = addTwoNumbers(3,5);
// console.log("Result:",result);


// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("hemant"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());


function loginUserMessage(username = "sam"){
    if(username===undefined)
    {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage());
// console.log(loginUserMessage("hemant"));



function calculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(2));
// console.log(calculateCartPrice(200,400,500,2000));



const user = {
    username: "hemant",
    price: 199,
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
// handleObject({
//     username: "sam",
//     price: 399
// })


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray)
{
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,200,1000]))

