//How to access user input.

/* there are 2 ways
    1.Window prompt
    2.HTML text box
*/

//Window prompt
let username=window.prompt(`What's your username:`);
console.log(username);

//Html text box
let user;
document.getElementById("submit button").onclick=function(){
    user=document.getElementById("mytext").value;
    document.getElementById("myH1").textContent="Hello";
}