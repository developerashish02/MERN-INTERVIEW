# JavaScript: Synchronous or Asynchronous

JavaScript is a synchronous single-threaded language, meaning code executes one statement at a time, in order.

## Issues of Callbacks

1. **Inversion of Control**: The control of code execution is handed over to another function.
2. **Callback Hell**: Multiple nested callbacks make code difficult to read and maintain.

```javascript
const cart = ["shoes", "shirt", "pants", "watch"];
createOrder(cart, function () {
  proceedToPayment(orderId); // paymentId
}); // orderId
```

## What is Hoisting?

Hoisting is a phenomenon in JavaScript where you can access variables and functions even before they are initialized.

```javascript
greet();
console.log(x);
var x = 100;

function greet() {
  console.log("Hello JavaScript");
}
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
```

2. let and const are the block scope

```javascript
{
  let a = 100;
  console.log(a);
}

console.log(a);
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
```

- we can shadow the var variable with let but not the opposite
  that called the unlegale shadowing

**hoisting**
refer above question

**Declaration**

1. using the var we can re-declare the variable
2. but using the let and const we can not re-declare the var

```javascript
var a = 100;
var a = 200;

let b = 200;
let b = 200;
```

**Declaration without initialization**

we can declaration var and let variable but not the const variable const
need the declaration and initialization with same time

```javascript
var a ;
let b ;

const c ;
```

# Promises in javascript

- promises object is the placeholder for a surten period of the till give the output from the async operation
- promises in used to handle asynchronous operation in javascript
- promises are nothing but assumed it to be empty object

```javascript
{
  data: undefined;
}
```

after the 5s or 6s how much time it takes that promises object fill with the data

```javascript
{
  data: orderDetails;
}
```

after that we attach the callback function to the promise object

```javascript
const cart = ["shoes", "shirt", "pants", "watch"];

const promise = createOrder(cart);

promise.then(() => {
  proceedToPayment();
  console.log("Proceed to payment");
});
```

**Example of Promise**

```javascript
// Create a new promise
const myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation using setTimeout
  setTimeout(() => {
    const success = true; // Change this to false to see the reject case

    if (success) {
      resolve("The operation was successful!"); // Resolve the promise with a success message
    } else {
      reject("The operation failed."); // Reject the promise with an error message
    }
  }, 2000); // Delay of 2 seconds
});

// Consume the promise using then() and catch()
myPromise
  .then((message) => {
    console.log(message); // Output: "The operation was successful!" after 2 seconds
  })
  .catch((error) => {
    console.error(error); // Output: "The operation failed." if the promise is rejected
  });
```

```javascript
// URL of the API endpoint
const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

// Use fetch to make a GET request to the API
const promise = fetch(apiUrl);
promise
  .then((response) => {
    // Check if the response is OK (status code 200-299)
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // Parse the JSON from the response
    return response.json();
  })
  .then((data) => {
    // Log the data from the response to the console
    console.log("Data fetched:", data);
  })
  .catch((error) => {
    // Log any errors that occurred during the fetch to the console
    console.error("Fetch error:", error);
  });
```

**Promise chain**

```javascript
const cart = ["shoes", "shirts", "t-shirt"];

createOrder(cart, function () {
  proceedToPayment(orderInfo, function () {
    orderSummery(paymentInfo, function () {
      updateTheWallet();
    });
  }); // payment info
}); // orderInfo

createOrder(cart)
  .then((order) => {
    return proceedToPayment(order);
  })
  .then((paymentId) => {
    return orderSummery(paymentId);
  })
  .then(() => {
    updateTheWallet();
  });
```

# what is the closures

each and every function have to access of the outer lexical environment mean access of variables and functions of its outer parent

```javascript
function outer() {
  var x = 200;
  function greet() {
    console.log("Hello Word");
  }

  function inner() {
    console.log(x);
    greet();
  }
  return inner;
}

outer()();
```

# What is the event bubbling and capturing in javascript

# what is the difference into the local storage and session storage

local storage and session storage are the ways to store the data into the web browser

**sessions storage**

"Data that is persisted for a session means it is saved while the user is on the website or app. When the user closes the tab or browser, the session ends and the data is no longer available."

**local storage**

"Data in local storage is kept until we manually clear it."
