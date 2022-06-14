import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Recicly from './components/pages/Recicly';
import Card1 from './components/pages/Card1';
import Card2 from './components/pages/Card2';
import Card3 from './components/pages/Card3';
import Card4 from './components/pages/Card4';
import Card5 from './components/pages/Card5';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/recicly' component={Recicly} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/card1' component={Card1} />
          <Route path='/card2' component={Card2} />
          <Route path='/card3' component={Card3} />
          <Route path='/card4' component={Card4} />
          <Route path='/card5' component={Card5} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
