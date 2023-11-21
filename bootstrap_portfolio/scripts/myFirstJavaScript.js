//Any code at the global level and outside of a function is automatically called
//when the HTML file is loaded
var hello = "hello world";
console.log("This is good for debugging "+hello);
//This alert would get called automatically every time jsFundamentals.html is loaded
//alert("Hello World!");

var print3Ways = function() {
    alert("Hello!");
    console.log("Hello!");
    document.write("<h1>Hello World!</h1>");
}

//This array is a global variable
var a = [1,2,3,4,5];

var sumArray = function() {
    var total = 0;
    for(let i=0;i<a.length;i++) {
        total+=a[i];
    }
    return total;
}

var findMin = function() {
    var min = a[0];
    for(let i=1;i<a.length;i++) {
        if (a[i] < min) {
            min=a[i];
        }
    }
    return min;
}

/* This is a function with a default value */
function plainOldFunction(a="default value") {
    console.log("Plain old function "+a);

    nestedFunction();
    //try calling this function, you will get an error
    //you can't call a function expression before it has been defined.
    //nestedFunctionExpression();
    function nestedFunction() {
        console.log("this is a nested function.")
    }

    const nestedFunctionExpression = function() {
        console.log("this is a nested function expression.")

    }
    //now you can call the function expression
    nestedFunctionExpression();
}

/* This is a function expression. Notice we are assigning a function
   to a variable.
   This function takes a function as a parameter.
   Notice the function has a default value.
    */
var firstFunction = function(callbackFunction=function() 
    { console.log("this is the default callback function");}) {
    callbackFunction();
}

var soManyFunctions = function() {
    //call function with a parameter
    plainOldFunction("parameter");
    // call function without a parameter and see how the default value is used
    plainOldFunction();
    //this is a nested function
    //in this case it will be used as a parameter to another function (firstFunction)
    var callback = function() {
        console.log("this is the callback function");
    }
    //call firstFunction with our own callback function defined above
    firstFunction(callback);
    //call firstFunction without the callback function and notice how the default
    //function is called.
    firstFunction();
}

// This is a JavaScript object

const obj = {name: "boomer",
            pet_type: "dog",
            cute:true,
            speak: function() { console.log("Woof!");}
};
console.log("My dog's name is "+ obj.name);
obj.speak();

