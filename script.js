function func() {
    alert("Page is loaded");
}
function fokus(x) {
    x.style.background = "blue";
}
function blurx(y) {
    y.style.background = "grey";
}
function funct() {
    alert("I am an alert box!");
}
function fun() {
    confirm("I am confirm box");
}
function prom() {
    var person = prompt("Please enter your name");
    if (person != null) {
        document.getElementById("demo").innerHTML =
            "Hello " + person + "! How are you today?";
    }
}