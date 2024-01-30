# some notes

- React is not just fast due to itself but due to the so much supplementary code written by other developers that makes it fast
- npm does not stand for node package manager

**-adding npm to our project using npm init**

- package.json file is an configuration for npm
- dependancies are the libraries our project is dependent upon

### what is a bundler (webpack, vite, parcel etc)

helps to ignite our app

- install parcel in our project using `npm install -D parcel`
- devDependencies are dependencies only required for development

now we can see in package.json

```
{
  "devDependencies": {
    "parcel": "^2.11.0"
  }
}
```
- the ^ here represents the caret, similarly '~' is also used which stands for tilde

- caret will automatically update our dependency when a minor update is released. so using caret will ensure we are using the latest version of a package. similarly tilde is used to update only the major updates in a library/package. it is not recommended to use tilde because some features might be depriciated with major updates so project might break

### What is package-lock.json and why is it different from package.json

package-lock.json keeps a track of the exact version of packages that we are using on our local machine and ensures that those exact same versions are deployed in production as well to ensure that the code does not break


### Node Modules

they are the exact code fetched from npm to our local machine, which is mentioned in our package.json file

all the dependencies of our dependencies and nested so on are also installed in our machine and that is what makes them so huge in size relatively. all these nested dependencies are called ***transitive dependencies***

- we don't push the node modules to git and github and add them to the git ignore file instead

if we once delete the node modules, they can be installed again by doing npm install. we can recreate all our node modules if we have our package.json and package-lock.json files


***
whatever piece of code we can regenerate using commands on termnial, don't push it to git
***

- igniting our app using:
`npx parcel index.html`

index.html is our source file

### npm vs npx

npm is usually used to bring packages into our local project and npx is used to execute those packages for performing a certain task

### fetching react from CDN

using the CDN links is not the efficient way of using react in our project. everytime we have to use react the cdn links will fetch and make an api call which is an very expensive operation

comparatively if we had react inside our node_modules and stored as a package in our project, we would save that expensive operation and increase our project's efficiency

using react as a dependency in our project can also help us ensure we remain up to date with the latest react updates in our project without having to manually change the cdn links whenever a new updates comes in

`npm install react`
`npm install react-dom`

these commands will install react to our project

```
import React from "react";
import ReactDOM from "react";
```

we have got the react locally in our project inside node modules but we need to run the above code to extract and use React from those node modules


# an bug we face at this point

when trying to run our code right now we might face an error. we have used import statement in our App.js file which is not normally supported in javascript.
- so we need to the the browser that our script is not a normal browser script but a module. to do this add a `type = module` attribute to our script in the index.html file
