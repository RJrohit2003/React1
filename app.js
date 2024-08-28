const Parent = React.createElement("div", { id: "Parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "this is a h1 tag"),
    React.createElement("h2", {}, "this is a h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "this is a h1 tag"),
    React.createElement("h2", {}, "this is a h2 tag"),
  ]),
]);

//const heading = React.createElement("h1", { id: "heading" }, "Hello");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Parent);
