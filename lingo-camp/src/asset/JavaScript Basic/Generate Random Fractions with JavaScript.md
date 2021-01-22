Random numbers are useful for creating random behavior.

JavaScript has a `Math.random()` function that generates a random decimal number between `0` (inclusive) and not quite up to `1` (exclusive). Thus `Math.random()` can return a `0` but never quite return a `1`

**Note**
Like [Storing Values with the Equal Operator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator), all function calls will be resolved before the `return` executes, so we can `return` the value of the `Math.random()` function.



## Generate Random Whole Numbers with JavaScript

It's great that we can generate random decimal numbers, but it's even more useful if we use it to generate random whole numbers.

1. Use `Math.random()` to generate a random decimal.
2. Multiply that random decimal by `20`.
3. Use another function, `Math.floor()` to round the number down to its nearest whole number.

Remember that `Math.random()` can never quite return a `1` and, because we're rounding down, it's impossible to actually get `20`. This technique will give us a whole number between `0` and `19`.

Putting everything together, this is what our code looks like:

```
Math.floor(Math.random() * 20);
```

We are calling `Math.random()`, multiplying the result by 20, then passing the value to `Math.floor()` function to round the value down to the nearest whole number.



