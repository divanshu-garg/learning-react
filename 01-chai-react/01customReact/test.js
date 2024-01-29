let arr = [1, 2, 3]

const reactElement = {
    type: "a",
    props: {
      href: "https://google.com",
      target: "_blank",
    },
    children: "click me to visit google",
  }

for (const i in reactElement.props) {
    console.log(reactElement.props[i]);
    console.log(i);
}