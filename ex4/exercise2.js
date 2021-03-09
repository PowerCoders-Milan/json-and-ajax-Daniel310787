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
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(response => response.text())
.then(data => document.getElementById("a").innerHTML = data)
.catch(error => document.getElementById("a").innerHTML = "NO "+ error)
//////////////////////POST/////////////////////////////////////////////////////////////////////////////////
fetch("https://jsonplaceholder.typicode.com/posts/", {
  method: "POST",
  body: JSON.stringify({
    name: "daniel",
    age: 33,
    married: "yes",
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then((response) => response.text())
.then(data => document.getElementById("b").innerHTML = data)
.catch(error => console.log("What "+ error));
////////////////////PUT//////////////////////////////////////////////////////////////////////////////////////////////
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  body: JSON.stringify({
    id: 1,
    name: "Marco",
    age: 25,
    married: "no",
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then((response) => response.text())
.then(data => document.getElementById("c").innerHTML = data)
.catch(error => document.getElementById("c").innerHTML = "Error "+ error)
//////////////////DELETE///////////////////////////////////////////////////////////////////////////////////////////
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
});









