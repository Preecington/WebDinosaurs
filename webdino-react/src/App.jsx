

import React, { Component } from 'react';
import './App.css';
import Moment from 'react-moment'

class App extends Component {
  render() { 
    return (
      <div className="app">
        <header>
          {/* Fixed navbar */}
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
            <a className="navbar-brand" href=".">Web Dinosaurs 2019 - React Live Demo <span role="img" aria-label="Fire">🔥</span></a>
          </nav>
        </header>

        {/* Begin page content */}
        <main role="main" className="container">
          <h1 className="mt-5">Hello, NDC Sydney!</h1>
          <p className="lead" id="sp">This is a basic page for our demos.
          <br />
          The current date is: <Moment format='dddd'/></p>
        </main>

        <footer className="footer">
          <div className="container">
            <span className="text-muted">Web Dinosaurs 2019</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;


