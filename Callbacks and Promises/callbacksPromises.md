# JavaScript Callbacks (why fear?)

Every JavaScript beginner will face this question at least once: **"What is a callback function?"**
Well, we can find the answer in the word **callback** itself. It's all about notifying the caller after the successful completion or failure of a task.

## # First, what is a function?

A function in JavaScript is a set of statements that performs a task. This set of statements can exist without a function, but having them in a function helps us reuse the task in multiple places.

Suppose there is an example of a function that doubles a value if the value is an even number. We pass a number as an argument to the function. 
```js
function doubleEven(n) {
    if (n % 2 === 0) {
    	return n * 2;
    }
    return n;
}
```
Now you can use this function in as many places as you need to:

```js
doubleEven(10); // Output, 20
doubleEven(5); // Output, 5
```

But at any level of your journey to learn JS, you must be knowing that "***You can pass a function as an argument to another function"***




![Les fonctions "Callback" en JavaScript 📞 - YouTube](https://i.ytimg.com/vi/TPEvfnXNO0E/maxresdefault.jpg)
# # Callbacks
A callback function is a function that is passed as an argument to another function, to be “called back” at a later time.

But Why??
-   Callbacks make sure that a function is not going to run before a task is completed but will run right after the task has completed

-   It helps us develop asynchronous JavaScript code and keeps us safe from problems and errors.

## # How to create a Callback?
Let's assume there's a function **foo()** which accepts a **callback** and calls it wherever it wants in it's body.
```js
    
    function foo(bar)
    {
          console.log("foo is executing");
          bar();
          console.log("foo called bar which is a callback");
    }
    
```

Now, How to call foo() ??

For this we can directly write a function at the arguments' place or first we can create a function separately and then pass it as callback.

```js
 
 /**
 Invoke foo by passing a function as an argument.
 */
   foo(function() {
       console.log('bar is called');
    });

```

   Notice that we have passed the entire function definition as an argument to `foo`. The passed function doesn't have a name. It is called an `anonymous function`.

We can also pass Arrow Functions as callbacks. 
Arrow functions are nothing but a different way of writing functions in JavaScript

```js

 foo(() => {
   console.log("callback function is called")
  });
  
```

## # Built-In Methods of JavaScript:
JavaScript provides built-in methods which accepts callbacks.
e,g. **`setTimeout()`** , **`setInterval()`**......  

Let's see,
```javascript
    
     const message = function() {  
     console.log("This message is shown after 3 seconds");
     }
 
     setTimeout(message, 3000); 
     //after 3 seconds it will log the statement provided
     
```
So, How this is working we will dive into it later.

#  # Promises in JS

The constructor syntax for a promise object is:

```js
 let promise = new Promise(function(resolve, reject) {
  // executor (the producing code)
});
```

The function passed to  `new Promise`  is called the  **_executor_**. When  `new Promise`  is created, the executor runs automatically.

Its arguments  `resolve`  and  `reject`  are callbacks provided by JavaScript itself. Our code is only inside the executor.

When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:

-   `resolve(value)`  — if the job is finished successfully, with result  `value`.
-   `reject(error)`  — if an error has occurred,  `error`  is the error object.

---
So to summarize: the executor runs automatically and attempts to perform a job. When it is finished with the attempt, it calls  `resolve`  if it was successful or  `reject`  if there was an error.

The  `promise`  object returned by the  `new Promise`  constructor has these internal properties:

-   `state`  — initially  `"pending"`, then changes to either  `"fulfilled"`  when  `resolve`  is called or  `"rejected"`  when  `reject`  is called.
-   `result`  — initially  `undefined`, then changes to  `value`  when  `resolve(value)`  is called or  `error`  when  `reject(error)`  is called.

      ![](https://i.pinimg.com/564x/1e/af/f2/1eaff2dcf56a40be1f21ae0e26900bc5.jpg)
  
           
           

Here’s an example of a promise constructor and a simple executor function with “producing code” that takes time (via  `setTimeout`):

```javascript
`      let promise = new Promise(function(resolve, reject) {
        // the function is executed automatically 
       //when the promise is constructed

        // after 1 second signal that the 
        // job is done with the result "done"
         setTimeout(() => _resolve__("done")_, 1000);
      });
```

We can see two things by running the code above:

1.  The executor is called automatically and immediately (by  `new Promise`).
    
2.  The executor receives two arguments:  `resolve`  and  `reject`. These functions are pre-defined by the JavaScript engine, so we don’t need to create them. We should only call one of them when ready.
    
    After one second of “processing”, the executor calls  `resolve("done")`  to produce the result. This changes the state of the  `promise`  object

That was an example of a successful job completion, a “fulfilled promise”.

And now an example of the executor rejecting the promise with an error:
```js
`let promise = new Promise(function(resolve, reject) {
  // after 1 second signal that the job is finished with an error
  setTimeout(() => _reject__(new Error("Whoops!"))_, 1000);
});
```
---
**To summarize, the executor should perform a job (usually something that takes time) and then call  `resolve`  or  `reject`  to change the state of the corresponding promise object.
A promise that is either resolved or rejected is called “settled”, as opposed to an initially “pending” promise.**



##  # Consumers: then, catch

A Promise object serves as a link between the executor (the “producing code”) and the consuming functions, which will receive the result or error. Consuming functions can be registered (subscribed) using the methods  `.then`  and  `.catch`.

### .then ( )

The most important, fundamental one is  `.then`.

The syntax is:
```js
promise.then(  
function(result)  {  _/* handle a successful result */_  },
function(error)  {  _/* handle an error */_  }  );
```
### .catch ( )
The other method use to capture the errors of the promise object we use `.catch()`

   ```js
   let promise =  new  Promise((resolve, reject)  => {
								setTimeout(()  =>   
                               reject(new  Error("Whoops!")), 1000); });
   // shows "Error: Whoops!" after 1 second_
```


## # In Summary

To Summarize:

-   A JavaScript function can accept another function as an argument.
-   Passing the function as an argument is a powerful programming concept that can be used to notify a caller that something happened. It is also known as the callback function.
-   You can use callback functions to notify the caller depending on a use case. Callbacks are also used to carry out certain tasks depending on the state (pass, fail) of other tasks.
-   But be careful – nesting too many callback functions may not be a great idea and may create  `Callback Hell`. We will dive into it sometime later..
##
-  `Promise`  is an important building block for the asynchronous concept in JavaScript.
-   A  `promise`  object has two internal properties, state and result. These properties are not code-accessible.
-   The consumer of a promise can use the  `.then()`,  `.catch()`, and  `.finally()`  methods to handle promises.



## Before We End...

That's all for now. I hope you've found this helpful

Regards:
Md Mafizuddin

For any queries connect with me:
LinkedIn: [@mafizonly](https://www.linkedin.com/in/mafizonly/) 
Github: [@pacehut](https://github.com/pacehutt)
Instagram: [@mafiz._](https://www.instagram.com/mafiz._/)



