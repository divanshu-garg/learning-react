import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'

const anotherElement = (<a href = "https://google.com" target='_blank'>visit Google from here</a>)

const reactElement = React.createElement(
  'a',
  {href: "https://google.com", target: "_blank"},
  'click me to visit the google website'
  )

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
    // anotherElement
    // reactElement
  
)
