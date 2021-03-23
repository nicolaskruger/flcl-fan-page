import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Page404 } from './pages/page404/Page404';
import { Header } from './components/header/Header';
import { Home } from './pages/home/Home';
import { Characters } from './pages/characters/Characters';
import { PersonaPage } from './pages/persona/Persona';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/characters">
            <Characters/>
        </Route>
        <Route path="/persona/:id">
            <PersonaPage/>
        </Route>
        <Route>
          <Page404/>          
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
