In JavaScript, we can divide up our code into reusable parts called functions.

Here's an example of a function:

```js
function functionName() {
  console.log("Hello World");
}
```

You can call or invoke this function by using its name followed by parentheses, like this: `functionName();` Each time the function is called it will print out the message `"Hello World"` on the dev console. All of the code between the curly braces will be executed every time the function is called.

## Passing Values to Functions with Arguments

Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when it is called are known as arguments.

Here is a function with two parameters, `param1` and `param2`:

```js
function testFun(param1, param2) {
  console.log(param1, param2);
}
```

Then we can call `testFun`: `testFun("Hello", "World");` We have passed two arguments, `"Hello"` and `"World"`. Inside the function, `param1` will equal "Hello" and `param2` will equal "World". Note that you could call `testFun` again with different arguments and the parameters would take on the value of the new arguments.

------

1. Create a function called `functionWithArgs` that accepts two arguments and outputs their sum to the dev console.

2. Call the function with two numbers as arguments.

   

```js

```

## Global Scope and Functions

In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.

Variables which are used without the `let` keyword are automatically created in the `global` scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with `let`.

------

Using `let`, declare a global variable named `myGlobal` outside of any function. Initialize it with a value of `10`.

Inside function `fun1`, assign `5` to `oopsGlobal` ***without*** using the `let` keyword.

## Local Scope and Functions

Variables which are declared within a function, as well as the function parameters have local scope. That means, they are only visible within that function.

Here is a function `myTest` with a local variable called `loc`.

```js
function myTest() {
  let loc = "foo";
  console.log(loc);
}
myTest(); // logs "foo"
console.log(loc); // loc is not defined
```

`loc` is not defined outside of the function.

------

The editor has two `console.log`s to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable `myVar` inside `myLocalScope` and run the tests.

**Note:** The console will still have 'ReferenceError: myVar is not defined', but this will not cause the tests to fail.

## Global vs. Local Scope in Functions

It is possible to have both local and global variables with the same name. When you do this, the `local` variable takes precedence over the `global` variable.

In this example:

```js
let someVar = "Hat";
function myFun() {
  let someVar = "Head";
  return someVar;
}
```

The function `myFun` will return `"Head"` because the `local` version of the variable is present.

------

Add a local variable to `myOutfit` function to override the value of `outerWear` with `"sweater"`.

------

```js
// Setup
let outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line



  // Only change code above this line
  return outerWear;
}

myOutfit();
```

## Return a Value from a Function with Return

We can pass values into a function with arguments. You can use a `return` statement to send a value back out of a function.

**Example**

```js
function plusThree(num) {
  return num + 3;
}
let answer = plusThree(5); // 8
```

`plusThree` takes an argument for `num` and returns a value equal to `num + 3`.

------

Create a function `timesFive` that accepts one argument, multiplies it by `5`, and returns the new value. See the last line in the editor for an example of how you can test your `timesFive` function.

------

## Understanding Undefined Value returned from a Function

A function can include the `return` statement but it does not have to. In the case that the function doesn't have a `return` statement, when you call it, the function processes the inner code but the returned value is `undefined`.

**Example**

```js
var sum = 0;
function addSum(num) {
  sum = sum + num;
}
addSum(3); // sum will be modified but returned value is undefined
```

`addSum` is a function without a `return` statement. The function will change the global `sum` variable but the returned value of the function is `undefined`.

------

Create a function `addFive` without any arguments. This function adds 5 to the `sum` variable, but its returned value is `undefined`.

```js
// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line


// Only change code above this line

addThree();
addFive();
```



## Assignment with a Returned Value

If you'll recall from our discussion of [Storing Values with the Assignment Operator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator), everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.

Assume we have pre-defined a function `sum` which adds two numbers together, then:

```
ourSum = sum(5, 12);
```

will call `sum` function, which returns a value of `17` and assigns it to `ourSum` variable.

------

Call the `processArg` function with an argument of `7` and assign its return value to the variable `processed`.

```js
// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
```

