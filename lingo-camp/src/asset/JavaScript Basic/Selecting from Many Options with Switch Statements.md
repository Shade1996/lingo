If you have many options to choose from, use a switch statement. A `switch` statement tests a value and can have many case statements which define various possible values. Statements are executed from the first matched `case` value until a `break` is encountered.

Here is an example of a `switch` statement:

```js
switch(lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}
```

`case` values are tested with strict equality (`===`). The `break` tells JavaScript to stop executing statements. If the `break` is omitted, the next statement will be executed.

------

Write a switch statement which tests `val` and sets `answer` for the following conditions:
`1` - "alpha"
`2` - "beta"
`3` - "gamma"
`4` - "delta"



```js
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line

if (val === 1)
  answer = "alpha"
else if (val === 2)
  answer = "beta"
else if (val === 3)
  answer = "gamma"
else if (val === 4)
  answer = "delta"

switch(val) {
  case 1:
    answer = "alpha"
    break;
  case 2:
    answer = "beta"
    break;
  case 3:
    answer = "gamma"
    break;
  case 4:
    answer = "delta"
    break;
}


  // Only change code above this line
  return answer;
}

caseInSwitch(1);
```

## Adding a Default Option in Switch Statements

In a `switch` statement you may not be able to specify all possible values as `case` statements. Instead, you can add the `default` statement which will be executed if no matching `case` statements are found. Think of it like the final `else` statement in an `if/else` chain.

A `default` statement should be the last case.

```js
switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}
```

------

Write a switch statement to set `answer` for the following conditions:
`"a"` - "apple"
`"b"` - "bird"
`"c"` - "cat"
`default` - "stuff"

```js
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

switchOfStuff(1);
```

## Multiple Identical Options in Switch Statements

If the `break` statement is omitted from a `switch` statement's `case`, the following `case` statement(s) are executed until a `break` is encountered. If you have multiple inputs with the same output, you can represent them in a `switch` statement like this:

```js
let result = "";
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
```

Cases for 1, 2, and 3 will all produce the same result.

------

Write a switch statement to set `answer` for the following ranges:
`1-3` - "Low"
`4-6` - "Mid"
`7-9` - "High"

**Note**
You will need to have a `case` statement for each number in the range.

```js
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

sequentialSizes(1);
```

## Returning Boolean Values from Functions

You may recall from [Comparison with the Equality Operator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator) that all comparison operators return a boolean `true` or `false` value.

Sometimes people use an if/else statement to do a comparison, like this:

```js
function isEqual(a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
```

But there's a better way to do this. Since `===` returns `true` or `false`, we can return the result of the comparison:

```js
function isEqual(a,b) {
  return a === b;
}
```

------

Fix the function `isLess` to remove the `if/else` statements.

```js
function isLess(a, b) {
  // Only change code below this line
  if (a < b) {
    return true;
  } else {
    return false;
  }
  // Only change code above this line
}

isLess(10, 15);
```

## Return Early Pattern for Functions

When a `return` statement is reached, the execution of the current function stops and control returns to the calling location.

**Example**

```js
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
```

The above outputs "Hello" to the console, returns "World", but `"byebye"` is never output, because the function exits at the `return` statement.

------

Modify the function `abTest` so that if `a` or `b` are less than `0` the function will immediately exit with a value of `undefined`.

**Hint**
Remember that [`undefined` is a keyword](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-uninitialized-variables), not a string.

```js
// Setup
function abTest(a, b) {
  // Only change code below this line



  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
```

