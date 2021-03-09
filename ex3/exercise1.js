// Let’s see Promise.all

// https://www.freecodecamp.org/news/promise-all-in-javascript-with-example-6c8c5aea3e32/

// Create 3 promises (new Promise) within each call the placeholder API to get some information.

// Call the 3 promises with promise.all:
// - make sure to nadle possible errors
// - once all of them are done, console log the result

// ## Extra

// When they are all done, update the Dom with the content of the promises


//fetch("https://jsonplaceholder.typicode.com/todos/1")



var Promise1 = new Promise ((resolve,reject)=>{
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    document.getElementById("a").innerHTML = "User ID: "+data.id+",  title is: "+data.title+ " and  is completed= "+data.completed
  })
  .then(data => {
    if(data == 1){
      resolve("That is what we are talking about")
    } else {
      reject ("It looks like you did not work good")
    }
  })
})
var Promise2 = new Promise ((resolve,reject)=>{
  fetch('https://jsonplaceholder.typicode.com/todos/2')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    document.getElementById("b").innerHTML = "User ID: "+data.id+",  title is: "+data.title+ " and  is completed= "+data.completed
  })
  .then(data => {
    if(data == 2){
      resolve("That is what we are talking about")
    } else {
      reject ("It looks like you did not work good")
    }
  })
})
var Promise3 = new Promise ((resolve,reject)=>{
  fetch('https://jsonplaceholder.typicode.com/todos/3')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    document.getElementById("c").innerHTML = "User ID: "+data.id+",  title is: "+data.title+ " and  is completed= "+data.completed
  })
  .then(data => {
    if(data == 3){
      resolve("That is what we are talking about")
    } else {
      reject ("It looks like you did not work good")
    }
  })
})
Promise.all([Promise1, Promise2, Promise3])
.then((result) => {
  console.log(result)
})
