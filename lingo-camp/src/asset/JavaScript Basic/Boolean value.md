## Understanding Boolean Values

Another data type is the Boolean. `Booleans` may only be one of two values: `true` or `false`. They are basically little on-off switches, where `true` is "on" and `false` is "off." These two states are mutually exclusive.

**Note**
`Boolean` values are never written with quotes. The `strings` `"true"` and `"false"` are not `Boolean` and have no special meaning in JavaScript.

## Use Conditional Logic with If Statements

`If` statements are used to make decisions in code. The keyword `if` tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as `Boolean` conditions and they may only be `true` or `false`.

When the condition evaluates to `true`, the program executes the statement inside the curly braces. When the Boolean condition evaluates to `false`, the statement inside the curly braces will not execute.

**Pseudocode**

> if (*condition is true*) {
> *statement is executed*
> }

**Example**

```js
function test (myCondition) {
  if (myCondition) {
     return "It was true";
  }
  return "It was false";
}
test(true);  // returns "It was true"
test(false); // returns "It was false"
```

When `test` is called with a value of `true`, the `if` statement evaluates `myCondition` to see if it is `true` or not. Since it is `true`, the function returns `"It was true"`. When we call `test` with a value of `false`, `myCondition` is *not* `true` and the statement in the curly braces is not executed and the function returns `"It was false"`.

------

Create an `if` statement inside the function to return `"Yes, that was true"` if the parameter `wasThatTrue` is `true` and return `"No, that was false"` otherwise.

```js
function trueOrFalse(wasThatTrue) {
  // Only change code below this line



  // Only change code above this line

}
```



## Comparison with the Equality Operator

There are many comparison operators in JavaScript. All of these operators return a boolean `true` or `false` value.

The most basic operator is the equality operator `==`. The equality operator compares two values and returns `true` if they're equivalent or `false` if they are not. Note that equality is different from assignment (`=`), which assigns the value on the right of the operator to a variable on the left.

```js
function equalityTest(myVal) {
  if (myVal == 10) {
     return "Equal";
  }
  return "Not Equal";
}
```

If `myVal` is equal to `10`, the equality operator returns `true`, so the code in the curly braces will execute, and the function will return `"Equal"`. Otherwise, the function will return `"Not Equal"`. In order for JavaScript to compare two different data types (for example, `numbers` and `strings`), it must convert one type to another. This is known as "Type Coercion". Once it does, however, it can compare terms as follows:

```js
1   ==  1   // true
1   ==  2   // false
1   == '1'  // true
"3" ==  3   // true
```

------

Add the equality operator to the indicated line so that the function will return "Equal" when `val` is equivalent to `12`.



## Comparison with the Strict Equality Operator

Strict equality (`===`) is the counterpart to the equality operator (`==`). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

**Examples**

```js
3 ===  3   // true
3 === '3'  // false
```

In the second example, `3` is a `Number` type and `'3'` is a `String` type.

------

Use the strict equality operator in the `if` statement so the function will return "Equal" when `val` is strictly equal to `7`



## Practice comparing different values

In the last two challenges, we learned about the equality operator (`==`) and the strict equality operator (`===`). Let's do a quick review and practice using these operators some more.

If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other.

**Examples**

```js
3 == '3'  // returns true because JavaScript performs type conversion from string to number
3 === '3' // returns false because the types are different and type conversion is not performed
```

**Note**
In JavaScript, you can determine the type of a variable or a value with the `typeof` operator, as follows:

```js
typeof 3   // returns 'number'
typeof '3' // returns 'string'
```

------

The `compareEquality` function in the editor compares two values using the equality operator. Modify the function so that it returns "Equal" only when the values are strictly equal.

```js
// Setup
function compareEquality(a, b) {
  if (a == b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
```



## Comparison with the Inequality Operator

The inequality operator (`!=`) is the opposite of the equality operator. It means "Not Equal" and returns `false` where equality would return `true` and *vice versa*. Like the equality operator, the inequality operator will convert data types of values while comparing.

**Examples**

```js
1 !=  2     // true
1 != "1"    // false
1 != '1'    // false
1 != true   // false
0 != false  // false
```

------

Add the inequality operator `!=` in the `if` statement so that the function will return "Not Equal" when `val` is not equivalent to `99`

```js
// Setup
function testNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);
```



## Comparison with the Strict Inequality Operator

The strict inequality operator (`!==`) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns `false` where strict equality would return `true` and *vice versa*. Strict inequality will not convert data types.

**Examples**

```js
3 !==  3   // false
3 !== '3'  // true
4 !==  3   // true
```



## Comparison with the Greater Than Operator

The greater than operator (`>`) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns `true`. Otherwise, it returns `false`.

Like the equality operator, greater than operator will convert data types of values while comparing.

**Examples**

```js
5   >  3   // true
7   > '3'  // true
2   >  3   // false
'1' >  9   // false
```



## Comparison with the Greater Than Or Equal To Operator

The greater than or equal to operator (`>=`) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns `true`. Otherwise, it returns `false`.

Like the equality operator, `greater than or equal to` operator will convert data types while comparing.

**Examples**

```js
6   >=  6   // true
7   >= '3'  // true
2   >=  3   // false
'7' >=  9   // false
```



## Comparison with the Less Than Operator

The less than operator (`<`) compares the values of two numbers. If the number to the left is less than the number to the right, it returns `true`. Otherwise, it returns `false`. Like the equality operator, less than operator converts data types while comparing.

**Examples**

```js
2   < 5  // true
'3' < 7  // true
5   < 5  // false
3   < 2  // false
'8' < 4  // false
```



## Comparison with the Less Than Or Equal To Operator

The less than or equal to operator (`<=`) compares the values of two numbers. If the number to the left is less than or equal to the number to the right, it returns `true`. If the number on the left is greater than the number on the right, it returns `false`. Like the equality operator, `less than or equal to` converts data types.

**Examples**

```js
4   <= 5  // true
'7' <= 7  // true
5   <= 5  // true
3   <= 2  // false
'8' <= 4  // false
```



## Comparisons with the Logical And Operator

Sometimes you will need to test more than one thing at a time. The logical and operator (`&&`) returns `true` if and only if the operands to the left and right of it are true.

The same effect could be achieved by nesting an if statement inside another if:

```js
if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
```

will only return "Yes" if `num` is greater than `5` and less than `10`. The same logic can be written as:

```js
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
```

Replace the two if statements with one statement, using the && operator, which will return `"Yes"` if `val` is less than or equal to `50` and greater than or equal to `25`. Otherwise, will return `"No"`.

```js
function testLogicalAnd(val) {
  // Only change code below this line

  if (val) {
    if (val) {
      return "Yes";
    }
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);
```

## Comparisons with the Logical Or Operator

The logical or operator (`||`) returns `true` if either of the operands is `true`. Otherwise, it returns `false`.

The logical or operator is composed of two pipe symbols: (`||`). This can typically be found between your Backspace and Enter keys.

The pattern below should look familiar from prior waypoints:

```js
if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
```

will return "Yes" only if `num` is between `5` and `10` (5 and 10 included). The same logic can be written as:

```js
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
```

------

Combine the two `if` statements into one statement which returns `"Outside"` if `val` is not between `10` and `20`, inclusive. Otherwise, return `"Inside"`.

```js
function testLogicalOr(val) {
  // Only change code below this line

  if (val) {
    return "Outside";
  }

  if (val) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);
```



