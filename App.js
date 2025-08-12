//  Hello World with JS
// let heading = document.createElement("h1");
// heading.innerHTML = "Hello World with JS";
// let root = document.getElementById("root");
// root.appendChild(heading);

// Hello World with React
let heading = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", {}, "Hello World with React"),
  React.createElement("h2", {}, "This is a React Component"),
]);
let root = ReactDOM.createRoot(document.getElementById("root1"));
root.render(heading); // converts the React element to HTML and renders it to the DOM
console.log("heading", heading);

// Inspecting React in Dev Console
// Open Dev Tools in your browser and type `React` to see if React is available.
// You can also type `ReactDOM` to check if ReactDOM is available.
