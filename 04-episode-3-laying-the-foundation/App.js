import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "Hello React")

// heading is an object not a html code

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)

const jsxHeading = <h1 id = "heading" className="class1">this was written in JSX. this is not html. writing a className instead of class even proves it </h1>
const jsxHeading2 = (<div> <h1>multi line jsx code is covered with brackets for babel to understand where is the starting and ending point to transpile</h1>
<h1 id = "heading" className="class1">this was written in JSX. this is not html. writing a className instead of class even proves it </h1>
</div>)

console.log(jsxHeading );


const HeadingComponent = () => {
    return (
        // below we rendering a js element in html. ( jsx )
    <div> {heading}
    <h1> this is a functional component. </h1>
    </div>
    )
}

const root2 = ReactDOM.createRoot(document.getElementById("root2"))
root2.render(<HeadingComponent/>)