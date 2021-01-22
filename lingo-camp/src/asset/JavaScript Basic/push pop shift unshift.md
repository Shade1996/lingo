## Manipulate Arrays With push()

An easy way to append data to the end of an array is via the `push()` function.

`.push()` takes one or more parameters and "pushes" them onto the end of the array.

Examples:

```js
let arr1 = [1,2,3];
arr1.push(4);
// arr1 is now [1,2,3,4]

let arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
// arr2 now equals ["Stimpson", "J", "cat", ["happy", "joy"]]
```

## Manipulate Arrays With pop()

Another way to change the data in an array is with the `.pop()` function.

`.pop()` is used to "pop" a value off of the end of an array. We can store this "popped off" value by assigning it to a letiable. In other words, `.pop()` removes the last element from an array and returns that element.

Any type of entry can be "popped" off of an array - numbers, strings, even nested arrays.

```js
let threeArr = [1, 4, 6];
let oneDown = threeArr.pop();
console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1, 4]
```

## Manipulate Arrays With shift()

`pop()` always removes the last element of an array. What if you want to remove the first?

That's where `.shift()` comes in. It works just like `.pop()`, except it removes the first element instead of the last.

Example:

```js
let ourArray = ["Stimpson", "J", ["cat"]];
let removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].
```

## Manipulate Arrays With unshift()

Not only can you `shift` elements off of the beginning of an array, you can also `unshift` elements to the beginning of an array i.e. add elements in front of the array.

`.unshift()` works exactly like `.push()`, but instead of adding the element at the end of the array, `unshift()` adds the element at the beginning of the array.

Example:

```js
let ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]
```