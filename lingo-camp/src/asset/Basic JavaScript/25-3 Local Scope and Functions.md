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