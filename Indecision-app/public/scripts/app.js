console.log('App.js is running')

// JSX - Javascript XML

//Example using babel 
console.log('joto');
var template = /*#__PURE__*/React.createElement("p", {
  id: "app"
}, "This is JSX from app.js");

// var template = <p>This is JSX from app.js</p>
var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)