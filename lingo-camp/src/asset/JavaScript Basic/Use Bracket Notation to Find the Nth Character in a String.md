Bracket notation is a way to get a character at a specific `index` within a string.

Most modern programming languages, like JavaScript, don't start counting at 1 like humans do. They start at 0. This is referred to as Zero-based indexing.

For example, the character at index 0 in the word "Charles" is "C". So if `let firstName = "Charles"`, you can get the value of the first letter of the string by using `firstName[0]`.

Example:

```js
let firstName = "Charles";
let firstLetter = firstName[0]; // firstLetter is "C"
```

In JavaScript, `String` values are immutable, which means that they cannot be altered once created.

For example, the following code:

```js
let myStr = "Bob";
myStr[0] = "J";
```

cannot change the value of `myStr` to "Job", because the contents of `myStr` cannot be altered. Note that this does *not* mean that `myStr` cannot be changed, just that the individual characters of a string literal cannot be changed. The only way to change `myStr` would be to assign it with a new string, like this:

```js
let myStr = "Bob";
myStr = "Job";
```

You can also use bracket notation to get the character at other positions within a string.

Remember that computers start counting at `0`, so the first character is actually the zeroth character.

Example:

```js
let firstName = "Ada";
let secondLetterOfFirstName = firstName[1]; // secondLetterOfFirstName is "d"
```

------

Let's try to set `thirdLetterOfLastName` to equal the third letter of the `lastName` variable using bracket notation.

**Hint:** Try looking at the example above if you get stuck.

```js
// Setup
let lastName = "Lovelace";

// Only change code below this line
let thirdLetterOfLastName = lastName; // Change this line
```

You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character.

For example, you can get the value of the third-to-last letter of the `let firstName = "Charles"` string by using `firstName[firstName.length - 3]`

Example:

```js
let firstName = "Charles";
let thirdToLastLetter = firstName[firstName.length - 3]; // thirdToLastLetter is "l"
```

In order to get the last letter of a string, you can subtract one from the string's length.

For example, if `let firstName = "Charles"`, you can get the value of the last letter of the string by using `firstName[firstName.length - 1]`.

Example:

```js
let firstName = "Charles";
let lastLetter = firstName[firstName.length - 1]; // lastLetter is "s"
```