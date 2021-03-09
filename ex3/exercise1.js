// Let’s see Promise.all

// https://www.freecodecamp.org/news/promise-all-in-javascript-with-example-6c8c5aea3e32/

// Create 3 promises (new Promise) within each call the placeholder API to get some information.

// Call the 3 promises with promise.all:
// - make sure to nadle possible errors
// - once all of them are done, console log the result

// ## Extra

// When they are all done, update the Dom with the content of the promises


//fetch("https://jsonplaceholder.typicode.com/todos/1")



  var Promise1 = fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.text())
  // .then(data => document.getElementById("p").innerHTML = data)

  var Promise2 = fetch('https://jsonplaceholder.typicode.com/todos/2')
  .then(response => response.text())
  // .then(data => document.getElementById("d").innerHTML = data)

  var Promise3 = fetch('https://jsonplaceholder.typicode.com/todos/3')
  .then(response => response.text())
  //.then(data => document.getElementById("c").innerHTML = data)
    
  Promise.all([Promise1, Promise2, Promise3])
  .then(promises => document.body.innerHTML = promises)
  .catch(error => document.body.innerHTML = "Error please check your Code " + error)













