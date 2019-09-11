import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import './Responsive.scss';
import MainLayout from './component/mainLayout';

class App extends Component {
  render() {
    return (
      <div>
         <Router>
          <div>
            <Switch>
              <Route path="/" component={MainLayout} /> 
            </Switch>
          </div>
        </Router>
     
      </div>
    );
  }
}

export default App;
