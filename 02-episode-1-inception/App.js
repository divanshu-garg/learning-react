let heading2 = React.createElement("h1", {}, "Hello World from React");
let root2 = ReactDOM.createRoot(document.getElementById("root-2"));
root2.render(heading2);

let heading3 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hello from h1"),
    React.createElement("h2", {}, "Hello from h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello from h1"),
    React.createElement("h2", {}, "Hello from h2"),
  ]),
]);
let root3 = ReactDOM.createRoot(document.getElementById("root-3"));
root3.render(heading3);
