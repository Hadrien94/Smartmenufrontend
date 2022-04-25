import React,  { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages-front/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Services from './components/pages-front/Services';
import Products from './components/pages-front/Products';
import SignUp from './components/pages-front/SignUp';
import Cards from './components/Cards';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Api from './components/API';






function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <Switch>
            <Route path='/services' component={Services}/> 
            <Route path='/products' component={Products}/>
            <Route path='/sign-up' component={SignUp}/>
            <Route path='/' exact component={Home}/>
          </Switch>
          <HeroSection/>
          <Cards/>
        <Footer/>
        <SignUp/>
      </Router>
    </>
  );
}

export default App;
