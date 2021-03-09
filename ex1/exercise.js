// var object = {
//     id: 1,
//     title: "this is a note",
//     content: "This is the amazing content of the note!"
//   }
  
//   Take the object, add one key-value pair to it and transform it in a JSON.
  
//   Now take the JSON, transform it back into an object with a new name, call and console log each one of the values.

var object = {
    id: 1,
    title: "this is a note",
    content: "This is the amazing content of the note!"

}
////////////////////////////////////////////////////////////////////////////
object.name = "Daniel";

console.log(object.name + " with ID:" +object.id);
/////////////////////////////////////////////////////////////////////
var myJSON = JSON.stringify(object);

console.log(myJSON);
//////////////////////////////////////////////////////////////////////
var object2 = JSON.parse(myJSON)

console.log(object2)
////////////////////////////////////////////////////////////////////////////////////
for (var all in object2){  //loggin all properties
    console.log(`${all}: ${object2[all]}`)
}

