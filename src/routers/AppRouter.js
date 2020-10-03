import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Redirect
} from "react-router-dom";

import AboutScreen from '../components/about/AboutScreen';
import HomeScreen from '../components/home/HomeScreen';
import PedidosScreen from '../components/pedidos/PedidosScreen';
import Footer from '../components/ui/footer/Footer';
import Navbar from '../components/ui/Navbar';

const AppRouter = () => {
  return (
    <Router>
      <Navbar/>

      <div>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/about" component={AboutScreen} />
          <Route exact path="/pedidos" component={PedidosScreen} />
          <Redirect to="/"/>

        </Switch>
      </div>

      <Footer/>
    </Router>
    
   
   
   
  )
}

export default AppRouter
