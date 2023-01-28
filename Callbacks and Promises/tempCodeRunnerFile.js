var res;
fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
  res = response.json;
});

console.log(res);
