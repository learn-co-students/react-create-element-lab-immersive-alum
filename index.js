// create a div with a className="me"
  // inside the div insert an <h1>, a <p>, and a <ul> with a className=" me__interests"
    // within the <ul>, insert 4 <li>'s

const myH1 = React.createElement("h1", {}, "An Awesome Person")
const myP = React.createElement("p", {}, "Who is learning React")
const myUl = React.createElement("ul", { className: "me__interests"}, [
  React.createElement("li", {}, "JavaScript"),
  React.createElement("li", {}, "React"),
  React.createElement("li", {}, "Movies"),
  React.createElement("li", {}, "Ice cream")
])
var meInReact = React.createElement("div", { className: "me" }, [myH1, myP, myUl])

ReactDOM.render(meInReact, document.getElementById('main'))
