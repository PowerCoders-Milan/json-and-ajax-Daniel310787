//Let’s call the placeholder API like in the slides and let’s show the information that we receive in the html.

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    var p = document.createElement("p");
    p.innerHTML = "ToDo N°: " + data.id + ", Title of the task: " + data.title + " and Completed: "+ data.completed;
    document.querySelector("body").appendChild(p);
});





  
















