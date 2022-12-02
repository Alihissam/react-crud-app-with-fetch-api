import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Home from './components/Pages/Home';
import {BrowserRouter, Switch,  Route} from 'react-router-dom'
import PageNotFound from './components/Pages/PageNotFound';
import Adduser from './components/user/Adduser';
import Edituser from './components/user/Edituser';
import User from './components/user/User';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/contact" component={Contact}></Route>
      <Route exact path="/user/add" component={Adduser}></Route>
      <Route exact path="/users/edit/:id" component={Edituser}></Route>
      <Route path="/user/:id" component={User}></Route>
      <Route exact path="/*" component={PageNotFound}></Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
