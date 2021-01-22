You may have heard the term `object` before.

Objects are similar to `arrays`, except that instead of using indexes to access and modify their data, you access the data in objects through what are called `properties`.

Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.

Here's a sample cat object:

```js
let cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
```

In this example, all the properties are stored as strings, such as - `"name"`, `"legs"`, and `"tails"`. However, you can also use numbers as properties. You can even omit the quotes for single-word string properties, as follows:

```js
let anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
```

However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.

------

Make an object that represents a dog called `myDog` which contains the properties `"name"` (a string), `"legs"`, `"tails"` and `"friends"`.

You can set these object properties to whatever values you want, as long as `"name"` is a string, `"legs"` and `"tails"` are numbers, and `"friends"` is an array.



```js
let myDog = {
// Only change code below this line


// Only change code above this line
};
```

## Accessing Object Properties with Dot Notation

There are two ways to access the properties of an object: dot notation (`.`) and bracket notation (`[]`), similar to an array.

Dot notation is what you use when you know the name of the property you're trying to access ahead of time.

Here is a sample of using dot notation (`.`) to read an object's property:

```js
let myObj = {
  prop1: "val1",
  prop2: "val2"
};
let prop1val = myObj.prop1; // val1
let prop2val = myObj.prop2; // val2
```

------

Read in the property values of `testObj` using dot notation. Set the variable `hatValue` equal to the object's property `hat` and set the variable `shirtValue` equal to the object's property `shirt`.

```js
// Setup
let testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line

let hatValue = testObj;      // Change this line
let shirtValue = testObj;    // Change this line
```

## Accessing Object Properties with Bracket Notation

The second way to access the properties of an object is bracket notation (`[]`). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.

However, you can still use bracket notation on object properties without spaces.

Here is a sample of using bracket notation to read an object's property:

```js
let myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};
myObj["Space Name"]; // Kirk
myObj['More Space']; // Spock
myObj["NoSpace"];    // USS Enterprise
```

Note that property names with spaces in them must be in quotes (single or double).

------

Read the values of the properties `"an entree"` and `"the drink"` of `testObj` using bracket notation and assign them to `entreeValue` and `drinkValue` respectively.

```js
// Setup
let testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

let entreeValue = testObj;   // Change this line
let drinkValue = testObj;    // Change this line
```

## Accessing Object Properties with Variables

Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.

Here is an example of using a variable to access a property:

```js
let dogs = {
  Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
};
let myDog = "Hunter";
let myBreed = dogs[myDog];
console.log(myBreed); // "Doberman"
```

Another way you can use this concept is when the property's name is collected dynamically during the program execution, as follows:

```js
let someObj = {
  propName: "John"
};
function propPrefix(str) {
  let s = "prop";
  return s + str;
}
let someProp = propPrefix("Name"); // someProp now holds the value 'propName'
console.log(someObj[someProp]); // "John"
```

Note that we do *not* use quotes around the variable name when using it to access the property because we are using the *value* of the variable, not the *name*.

------

Set the `playerNumber` variable to `16`. Then, use the variable to look up the player's name and assign it to `player`.

```js
// Setup
let testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line

let playerNumber;       // Change this line
let player = testObj;   // Change this line
```

## Updating Object Properties

After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable. You can use either dot or bracket notation to update.

For example, let's look at `ourDog`:

```js
let ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
```

Since he's a particularly happy dog, let's change his name to "Happy Camper". Here's how we update his object's name property: `ourDog.name = "Happy Camper";` or `ourDog["name"] = "Happy Camper";` Now when we evaluate `ourDog.name`, instead of getting "Camper", we'll get his new name, "Happy Camper".

------

Update the `myDog` object's name property. Let's change her name from "Coder" to "Happy Coder". You can use either dot or bracket notation.

```js
// Setup
let myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
```

## Add New Properties to a JavaScript Object

You can add new properties to existing JavaScript objects the same way you would modify them.

Here's how we would add a `"bark"` property to `ourDog`:

```
ourDog.bark = "bow-wow";
```

or

```
ourDog["bark"] = "bow-wow";
```

Now when we evaluate `ourDog.bark`, we'll get his bark, "bow-wow".

Example:

```js
let ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";
```

------

Add a `"bark"` property to `myDog` and set it to a dog sound, such as "woof". You may use either dot or bracket notation.

```js
// Setup
let myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
```

## Basic JavaScript: Delete Properties from a JavaScript Object

We can also delete properties from objects like this:

```
delete ourDog.bark;
```

Example:

```js
let ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;
```

After the last line shown above, `ourDog` looks like:

```js
{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
```

------

Delete the `"tails"` property from `myDog`. You may use either dot or bracket notation.

```js
// Setup
let myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

```

