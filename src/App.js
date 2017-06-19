import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Drinks from './components/Drinks';
import Directions from './components/Directions';
import Musicians from './components/Musicians';
import Schedule from './components/Schedule';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavigationBar/>
          <Switch>
            <Route path="/drinks" component={Drinks}/>
            <Route path="/location" component={Directions}/>
            <Route path="/musicians" component={Musicians}/>
            <Route path="/schedule" component={Schedule}/>
            <Route path="/" component={Home}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
