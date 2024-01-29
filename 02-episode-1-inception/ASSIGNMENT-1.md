# Assignment 01

## Questions:

***
● What is Emmet?

● Difference between a Library and Framework?

● What is CDN? Why do we use it?

● Why is React known as React?

● What is crossorigin in script tag?

● What is diference between React and ReactDOM

● What is difference between react.development.js and react.production.js files via CDN?

● What is async and defer?
***

## Answers

### What is Emmet?

***
Emmet helps to write some html boilerplate code and gives us some shortcuts to work more efficiently with HTML code. supported in most of the famous code editors
***

### Difference between a Library and Framework?


***
Frameworks usually have very strict rules to use it, they are like another language in itself while the libraries are more lean and can be used in a subset of code as well
***

### What is CDN? Why do we use it?


***
CDN is a content delivery network. when we use it in our code, it makes some extra piece of code available to us from remote servers. the code on CDNs is distributed on multiple servers across the globe and the closest promixity CDN server(+also depends on the available load handling capacity and some other factors) will be used to fetch the code for us to give the maximum efficient and optimal delivery time
***

### Why is React known as React?


***
it has been such to give a message that it gives the faster reaction or response and dynamically update the code when a change in state is observed. just like we say chlroine is highly reactive in nature
***

### What is crossorigin in script tag?


***
Cross Origin is added in the code to tell whether the domain is allowed to do resource sharing(like making api fetch calls) to cross origin domains or not. by default it is set to same origin which means a domain can only share resources with a same origin domain. but we can allow it for CORS(cross origin resource sharing) as well. when we set it as unspecified value it acts as a boolen, in this case which means that it is allowed to do cross-origin resource sharing
***

### What is diference between React and ReactDOM


***
React refers to the general react and code written in it. which helps to efficiently build complex applications by using states and the diffing algorithm. reactDom is the specific code or another subset of react that helps the react to compatibly work on browsers by making some specific browser-only features available to react like virtual-dom and document window. similarly we have react-native to make mobile apps
***


### What is difference between react.development.js and react.production.js files via CDN?


***
the former is the cdn link we use in the development environment to develop and test out new features/products and the latter is the cdn link we use to deploy and push our code to production. the production code has the coding best principles used in it and is compressed, minnified for efficiency
***

### What is async and defer?


***
In async, the async task is occuring parallely on some other threads and it will be executed just when thread becomes idle after it finishes the async part(like fetching data) and then the async script will run by stopping the remaining code from being executed temporarily. there is no gurantee that the async final script will be executed, if the async task returns an error(like it couldn't fetch the data) then the script won't run but throw some error or something which we asked it to do when it throws an error

defer is an older syntax in JS while async was announced more recently. defer doesn't block the execution flow of the synchronous file in between when it is ready to be executed but it is deffered till the synchronous code execution isnt finished and after that when the thread becomes idle is when the deffered code will be executed. the deffered scripts will be executed in order of their positioning in the code respectively
***