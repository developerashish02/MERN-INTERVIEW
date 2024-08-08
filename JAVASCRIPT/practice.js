const promise = new Promise((resolved, reject) => {
  const flag = false;

  if (flag) {
    setTimeout(() => {
      resolved("Promise is resolved");
    }, 2000);
  } else {
    reject("Promise is rejected");
  }
});

promise.then((data) => {
  console.log("Data", data);
});

promise.catch((err) => {
  console.log("error");
});
