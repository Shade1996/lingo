## Iterate with JavaScript While Loops

You can run the same code multiple times by using a loop.

The first type of loop we will learn is called a `while` loop because it runs "while" a specified condition is true and stops once that condition is no longer true.

```js
let ourArray = [];
let i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}
```

In the code example above, the `while` loop will execute 5 times and append the numbers 0 through 4 to `ourArray`.

Let's try getting a while loop to work by pushing values to an array.

------

Add the numbers 5 through 0 (inclusive) in descending order to `myArray` using a `while` loop.

```js
// Setup
let myArray = [];

// Only change code below this line
```

## Iterate with JavaScript For Loops

You can run the same code multiple times by using a loop.

The most common type of JavaScript loop is called a `for` loop because it runs "for" a specific number of times.

For loops are declared with three optional expressions separated by semicolons:

```
for ([initialization]; [condition]; [final-expression])
```

The `initialization` statement is executed one time only before the loop starts. It is typically used to define and setup your loop letiable.

The `condition` statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to `true`. When `condition` is `false` at the start of the iteration, the loop will stop executing. This means if `condition` starts as `false`, your loop will never execute.

The `final-expression` is executed at the end of each loop iteration, prior to the next `condition` check and is usually used to increment or decrement your loop counter.

In the following example we initialize with `i = 0` and iterate while our condition `i < 5` is true. We'll increment `i` by `1` in each loop iteration with `i++` as our `final-expression`.

```js
let ourArray = [];
for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}
```

`ourArray` will now contain `[0,1,2,3,4]`.

------

Use a `for` loop to work to push the values 1 through 5 onto `myArray`.

```js
// Setup
let myArray = [];

// Only change code below this line
```

##  Iterate Odd Numbers With a For Loop

For loops don't have to iterate one at a time. By changing our `final-expression`, we can count by even numbers.

We'll start at `i = 0` and loop while `i < 10`. We'll increment `i` by 2 each loop with `i += 2`.

```js
let ourArray = [];
for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
```

`ourArray` will now contain `[0,2,4,6,8]`. Let's change our `initialization` so we can count by odd numbers.

## Count Backwards With a For Loop

A for loop can also count backwards, so long as we can define the right conditions.

In order to count backwards by twos, we'll need to change our `initialization`, `condition`, and `final-expression`.

We'll start at `i = 10` and loop while `i > 0`. We'll decrement `i` by 2 each loop with `i -= 2`.

```js
let ourArray = [];
for (let i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
```

`ourArray` will now contain `[10,8,6,4,2]`. Let's change our `initialization` and `final-expression` so we can count backward by twos by odd numbers.

## Iterate Through an Array with a For Loop

A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a `for` loop. This code will output each element of the array `arr` to the console:

```js
let arr = [10, 9, 8, 7, 6];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
```

Remember that arrays have zero-based indexing, which means the last index of the array is `length - 1`. Our condition for this loop is `i < arr.length`, which stops the loop when `i` is equal to `length`. In this case the last iteration is `i === 4` i.e. when `i` becomes equal to `arr.length` and outputs `6` to the console.

------

Declare and initialize a letiable `total` to `0`. Use a `for` loop to add the value of each element of the `myArr` array to `total`.

```js
// Setup
let myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
```

## Nesting For Loops

If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example:

```js
let arr = [
  [1,2], [3,4], [5,6]
];
for (let i=0; i < arr.length; i++) {
  for (let j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
```

This outputs each sub-element in `arr` one at a time. Note that for the inner loop, we are checking the `.length` of `arr[i]`, since `arr[i]` is itself an array.

------

