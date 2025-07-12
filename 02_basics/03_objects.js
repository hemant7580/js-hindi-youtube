// singleton
// object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name:"hemant",
    "full name":"Hemant Tomar",
    // mySym: "mykey1",
    [mySym]: "mykey1",
    age:18,
    location:"Morena",
    email:"hemant@google.com",
    isLoggedIn:false,
    lastLoginDays:["Mondat","Saturday"]
}

// console.log(JsUser.email);
// //  console.log(JsUser[email])
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// //  console.log(JsUser.mySym);
// console.log(JsUser[mySym]);
// //  console.log(typeof JsUser.mySym);

JsUser.email = "hemant@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hemant@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js User");
}

// console.log(JsUser.greeting)
// console.log(JsUser.greeting());
JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);
}

// console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
