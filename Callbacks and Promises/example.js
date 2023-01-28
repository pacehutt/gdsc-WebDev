// if you wanna run JavaScript code with code runner then download & install node from "" https://nodejs.org/en/download/  ""
// Add the node path to the path environment variable of your system
// then run the file as "node example.js"

const promise = new Promise(function (resolve, reject) {
  //  some logic

  resolve("Promise is resolved");

  // reject("promise is rejected");
});

promise
  .then(function (data) {
    console.log("====================================");
    console.log(data);
    console.log("====================================");
  })
  .catch(function (err) {
    console.log(err);
  });
