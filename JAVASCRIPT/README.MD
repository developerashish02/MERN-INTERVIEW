# JavaScript: Synchronous or Asynchronous

JavaScript is a synchronous single-threaded language, meaning code executes one statement at a time, in order.

## Issues of Callbacks

1. **Inversion of Control**: The control of code execution is handed over to another function.
2. **Callback Hell**: Multiple nested callbacks make code difficult to read and maintain.

## What is Hoisting?

Hoisting is a phenomenon in JavaScript where you can access variables and functions even before they are initialized.

```javascript
greet();
console.log(x);
var x = 100;

function greet() {
  console.log("Hello JavaScript");
}
javascript;
```

# The let and const variable is hoisted

1. yes the let and const variable are hoisted but its hoisted in differently compare to the var
2. its goes into temporal dead zone for time been

# follow of question

## what is the temporal dead zone.

the temporal dead zone is time since when let variable is hoisted and till its initialize some value
the time bet that we call as temporal dead zone

```javascript
console.log(b);

let a = 100;
var b = 200;

javascript;
```

# what is the difference bet let var and const

let var and const three ways we can declare the variables
var existed in javascript sins javascript is created let and const variables introduced into the ES6 version of the JavaScript
**score**
score means where we can access a specific variable or a function in are code

1. var is a functional scope

```javascript
var a = 100;
console.log(a);

javascript;
```

2. let and const are the block scope

```javascript
{
  let a = 100;
  console.log(a);
}

console.log(a);

javascript;
```

we can not access the a outside of the block scope

**shadowing**

```javascript
function test() {
  let a = "Hello";

  if (true) {
    let a = "Hi";
    console.log(a);
  }
  console.log(a);
}

test();

javascript;
```

- we can shadow the var variable with let but not the opposite
  that called the unlegale shadowing

  2.hoisting
  refer above question

  3.initialization
