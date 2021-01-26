With JavaScript `array` variables, we can store several pieces of data in one place.

You start an array declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry, like this:

`let sandwich = ["peanut butter", "jelly", "bread"]`.

You can also nest arrays within other arrays, like below:

```js
[["Bulls", 23], ["White Sox", 45]]
```

This is also called a multi-dimensional array.

-----

We can access the data inside arrays using indexes.

Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use zero-based indexing, so the first element in an array has an index of `0`.



**Example**

```js
let array = [50,60,70];
array[0]; // equals 50
let data = array[1];  // equals 60
```

**Note**
There shouldn't be any spaces between the array name and the square brackets, like `array [0]`. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

----

Create a variable called `myData` and set it to equal the first value of `myArray` using bracket notation.

```js
// Setup
let myArray = [50,60,70];

// Only change code below this line
let myData =myArray
```



Unlike strings, the entries of arrays are mutable and can be changed freely.

**Example**

```js
let ourArray = [50,40,30];
ourArray[0] = 15; // equals [15,40,30]
```

**Note**
There shouldn't be any spaces between the array name and the square brackets, like `array [0]`. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

------

Modify the data stored at index `0` of `myArray` to a value of `45`.

```js
// Setup
let myArray = [18,64,99];

// Only change code below this line
```



## Access Multi-Dimensional Arrays With Indexes



One way to think of a multi-dimensional array, is as an *array of arrays*. When you use brackets to access your array, the first set of brackets refers to the entries in the outer-most (the first level) array, and each additional pair of brackets refers to the next level of entries inside.

**Example**

```js
let arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];
arr[3]; // equals [[10,11,12], 13, 14]
arr[3][0]; // equals [10,11,12]
arr[3][0][1]; // equals 11
```

**Note**
There shouldn't be any spaces between the array name and the square brackets, like `array [0][0]` and even this `array [0] [0]` is not allowed. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

------

Using bracket notation select an element from `myArray` such that `myData` is equal to `8`.

```js
// Setup
let myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line
let myData = myArray[0][0];
```

