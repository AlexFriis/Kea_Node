// Hoisting - invoke methods before defining them.
greetings();

function greetings() {
    console.log("Hello World");
}


const greetingsInAVariable  = function greetings() {
    console.log("Hello World in a variable");
}

const greetingsArrowFunction = () => {
    console.log("Hello World as an arrow function");
}

function doingSomething(anyFunctionReference, name) {
     anyFunctionReference(name);
}

const running = name => console.log(`${name} is running`);

doingSomething(running, "Alex");

const drinking = name => console.log(`${name} is drinking`);

doingSomething(drinking, "Peter");

const jumping = name => console.log(`${name} is jumping`);

doingSomething(jumping, "Mario");


const studResult = doingSomething(name => name + " is studying", "Juan");