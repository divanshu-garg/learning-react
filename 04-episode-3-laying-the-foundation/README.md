# Some notes

we can add scripts in package.json file to make shortcuts for running command

using npm run start is same as using npm start

when we do react.createElement if the root we are rendering upon had any previous content then that will be replaced(not appended to)

## JSX

jsx is a javascript syntax developed to efficiently write html like syntax in javascript

it is not purely a part of react, jsx is different than react but it is something which helps to write React more efficiently

### do we write code for machines or humans??

the code we write would be understood by so many humans when you work on a impactful project. so we have to write code to make the life ot those developers easy so that they can understand our code

writing code for humans and making their life easy is our first goal. if we had to just write code for machines we could just write messy code, binary code or just use DOM directly as well

## back to jsx

jsx is not pure javascript, so our browser will not understand it. pure javascript is what works with ecmascript. 

*** 
browsers can't understand jsx so it is transpiled before being sent to the browser and in this transpilation our jsx code is converted into code which browsers can understand
***

this transpilation is done by the webpack/bundler we use, those webpacks use babel package to do so

```
<!-- JSX => React.createElement(done by babel) => A javascript object => rendered html -->
```

jsx is kind of behind the scenes easier way to write React.createElement

** some difference in jsx and html syntax. the way you name classes in html vs jsx **

We give attributes in camelCase for jsx

to write a multi line jsx, wrap it in circular brackets



## Components in React

1) Class based components- older approach
2) Functional components- used everywhere now

Functional Component: a normal js function which returns a piece of jsx element

```
const component = <h1> this is a simple react element </h1>

const Component = () => {
    return <h1> this is a functional component </h1>
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent/>)
```

first letter of a functional component is capital

we can nest components inside each other

## what is component composition (interview question)

just nesting a component inside another component is called component composition

in below example Title component is nested inside another component
```
const Component = () => {
    return (
        <Title />
        <h1> this is a functional component </h1>
    )
}

```

## writing js in html (jsx)

add a '{}' in a html code and you will be able to inject js code/functions/variables etc in html

