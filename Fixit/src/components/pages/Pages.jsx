import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import LoginSignup from "../LoginSignup/LoginSignup"
import Login from '../LoginSignup/Login'

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/signup' component={LoginSignup} />
          <Route exact path='/login' component={Login} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
