import React from 'react';
import stylesApp from './App.module.css';
import { BrowserRouter as Router, Route,Switch, NavLink } from 'react-router-dom';
import Header from '../header/header';
import Home from '../navegation/Home';
import Events from '../navegation/Events';
import Characters from '../navegation/Characters';
import PageNotFound from '../navegation/PageNotFound';

class App extends React.Component {

  render(){
    
  return (
    <div className={stylesApp.App}>
      <Header title="Marvel Comics App"/>
      
      <div className={stylesApp.content}>
      <Router>
        <ul className={stylesApp.list}> 
          <li>
            <NavLink exact activeClassName={stylesApp.active} to='/' >Inicio</NavLink></li>
          <li>
            <NavLink activeClassName={stylesApp.active} to='/comics' >Comics</NavLink></li>
          <li>
            <NavLink activeClassName={stylesApp.active} to='/characters' >Characters</NavLink></li>
        </ul>
        <Switch>
            <Route  exact path="/" component={Home}/>
            <Route  exact path="/events" component={Events}/>
            <Route  exact path="/characters" component={Characters}/>
            <Route component={PageNotFound}/>
        </Switch>
      </Router>
        
      </div>
    </div>
  );}
}

export default App;
