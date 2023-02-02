import React from "react"
import Home from "./Home"
import About from "./About"
import Menu from "./Menu"
import Games from "./Games"
import Footer from "./Footer"
import NavBar from "./NavBar"
import "./App.css"


export default function App(){
  return (
    <div className ="main">
      <Home />
      <NavBar />
      <About />
      <Menu />
      <Games />
      <Footer />
    </div>


  )
}



