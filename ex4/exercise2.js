// # Ex 4 - HTTP requests

// Let’s use GET, POST, PUT and DELETE on the placeholder api:
// - Get one of the notes
// - Create a note
// - Modify an existing note
// - Delete an existing note

// Remember to catch all the possible errors!

// ## Extra

// Show the result on the html file.

// Every time you create, modify or delete, update the content to show what changes have been applied.
//////////////////////GET///////////////////////////////////////////////////////////////////////////////////
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(response => response.json())
.then(data => {
  document.getElementById("a").innerHTML = "User ID: "+data.id+",  title is: "+data.title+ " and  is completed= "+data.completed+"...To Do has been gotten"
})
.catch(error => console.log("NO "+ error))
//////////////////////POST/////////////////////////////////////////////////////////////////////////////////
fetch("https://jsonplaceholder.typicode.com/todos/", {
  method: "POST",
  body: JSON.stringify({
    id: 201,
    title: "Daniel",
    completed: true,
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then((response) => response.json())
.then(data => {

  document.getElementById("b").innerHTML = "User ID: "+data.id+",  title is: "+data.title+ " and  is completed= "+data.completed+ "... To Do has been created"
})
.catch(error => console.log("What "+ error));
////////////////////PUT//////////////////////////////////////////////////////////////////////////////////////////////
fetch("https://jsonplaceholder.typicode.com/todos/100", {
  method: "PUT",
  body: JSON.stringify({
    id: 201,
    title: "Marco",
    completed: false,
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then((response) => response.json())
.then(data => {
  document.getElementById("c").innerHTML = "User ID: "+data.id+",  title is: "+data.title+ " and  is completed= "+data.completed+"... To Do has been changed"
})
.catch(error => console.log("Error "+ error))
//////////////////DELETE///////////////////////////////////////////////////////////////////////////////////////////
fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: "DELETE",
})
.then((response) => response.json())
.then(data => {
  console.log(data)
  document.getElementById("d").innerHTML = "To Do has been Erased"
})



