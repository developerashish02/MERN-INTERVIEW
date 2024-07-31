const promise = new Promise((resolved, reject) => {
  setTimeout(() => {
    const success = true;

    if (success) {
      resolved("Promise is resolved");
    } else {
      reject("Promise is rejected");
    }
  }, 2000);
});

promise.then((message) => {
  console.log(message);
});

promise.catch((error) => {
  console.log(error);
});
