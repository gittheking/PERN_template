#6. Exercise 6 

##All-in: React.js

### Step 1 
Let's start creating our first React components. We'll need the proper folder layout that our compiler is expecting:

```
/src
└── client
    ├── app
    │   ├── App.jsx
    │   └── main.jsx
    ├── css
    │   └── styles.css
    └── helpers
```

  1. `/src/client/app` is where your application will live. 
  2. Webpack will start looking at `/src/client/app/main.jsx` to begin the compilation. 
  2. `App.jsx` is the 'top' of your React application
  3. Copy `starter_resources/styles.css` into `/src/client/css`

### Step 2

In `main.jsx`, we need to make some declarations about which files/assets we'll need in our project. These should be pretty self-explanatory. _(note that the `import` syntax is part of es6's package management feature, while `require` is npm's)_

```
import App from './App.jsx';
require('bootstrap/dist/css/bootstrap.css');
require('../css/styles.css')
```

We'll need to create a wrapper for our _stateful_ core component that uses React. **We'll be using es6 _class_ syntax to build our components.** 

####Inside `App.jsx` 
```
'use strict'

// import the libs we need
import React            from 'react';
import ReactDOM         from 'react-dom'

// create a React Component called _App_
export default class App extends React.Component{

    // every class gets a constructor.
    // this is where we init the state.
    constructor() {

        // we also need to wake up our ancestors
        super();

        // here's our state
        this.state = {
          tasks : {}
        }
    }
    // note that classes do **not** have commas between their methods

    // 90% of your components will render()
    // REMEMBER you can only return **one** root element from a render fn.
    render(){
        return(
            <container>
                <header>
                    <p>Hello world example</p>
                </header>
                <div className="container">
                    <div className="row">
                    {/*everything goes in here*/}
                    </div>
                </div>
            </container>
        )
    }
}

// mount our App at #container
ReactDOM.render(<App/>, document.querySelector('#container'))
```

**NOTE** Certain HTML attributes interfere with React. As such, we cannot use `class=` or `for=`, instead use `className=` and `htmlFor=` respectively.

### Step 3 The easy parts
Let's convert some of the easiest parts of the site into React.

The most trivial part of the website is the navigation bar. The nav bar doesn't and shouldn't have a concept of _state_; it doesn't need to react to changes in state. 

Let's create a Nav component as a _stateless function_: `/src/client/app/Nav.jsx`.

```
import React from 'react';

const Nav = props=>(
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <a href="../" className="navbar-brand">To Do App in React</a>
      </div>
    </div>
  </nav>
)
export default Nav;
``` 

Make sure to import this new component in `App.jsx`!

#ALERT! 

The client just called and wants a footer! create a footer like we did for nav using the newly provided HTML from the design department:

```
<footer className="page-footer orange">
  <div className="footer-copyright">
    <div className="container">
      <p>Made with <span class="glyphicon glyphicon-heart"></span> by students of General Assembly</p>
    </div>
  </div>
</footer> 
```

##UPDATE! 
They've included a logo to add to the end of the footer, but it's HUGE. 

1. Use HTML and css to make it fit on the line.




