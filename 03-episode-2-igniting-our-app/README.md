# some notes

### Interview question: what makes react app fast. tell about the dependencies and the features of bundlers like parcel in detail

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

# At this point I faced a bug while trying to build project using parcel for the first time with npm. scratched my head on it for 2+ hours and finally settled with switching from npm to yarn. works fine finally with yarn but still face the same bug with npm

### Benefits of parcel bundler

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm (written in C++): website dynamically update without needing to reload (not working for me, have to reload manually)
- Caching: faster builds after the first build
- Image Optimization
- Minification
- Compressing
- Bundling
- Consistent Hashing
- Code Splitting
- Differential Bundling- making the code supported in all the different browsers and their oldest of versions as well
- Better error handling
- Diagnostics
- hosting on HTTPS instead of HTTP
- Tree Shaking- remove unused code
- Different dev and production bundles

** Read parcel's documentation to know more **



### building prod build using parcel (an error you'll face)

to make a prod build run

```
npx parcel build index.html
```

or a similar equivalent in yarn

but when you do it, you will face an error if there is something different in main: "filename.js" in the package.json file which means that is the main entrypoint to your app

but in parcel we give the entrypoint in the command itself so they will conflict with each other. so, delete that specific `main: "filename"` code from your package.json to not face an error while running npx parcel build index.html

So, I've faced 3 errors till date in this episode:

1) adding type= module in script in index.html because we use import statements in react
2) while creating node modules using npm then igniting using parcel. don't know the reason but just using yarn instead of npm overall fixes this issue, clear all the dist, node-modules or cache dirs created using npm
3) while making a prod build remove main: "filename.js" from package.json file to avoid any conflicts for entrypoint

### Browserslist

it is a package that helps your project to be supported on a wide variety of browsers and their versions. it helps to make your code compatible with older browsers and oldest versions of browsers

go through the readme file in browserlist github. 

I can add it directly to the package.json file and start using this package