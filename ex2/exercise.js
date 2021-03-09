//Let’s call the placeholder API like in the slides and let’s show the information that we receive in the html.

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.text())
  .then(data => document.body.innerHTML = data);






  
















