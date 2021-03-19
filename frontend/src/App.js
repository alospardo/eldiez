import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header'
import Navigator from './components/Navigator'
import Home from './components/Home'
import Note from './components/Note'

function App() {
  return (

    <Router>
      <Header />
      <Navigator />
      <Route path="/" exact component={Home} />
      <Route path="/:category/:tournament/:id" component={Note} />

    </Router>
  );
}

export default App;
