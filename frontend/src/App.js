import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

import ScrollToTop from './Header/ScrollToTop'
import Header from './Header/Header'
import AboutPage from './AboutPage/AboutPage'
import ContactPage from './ContactPage/ContactPage'
import MenuPage from './MenuPage/MenuPage.js'
import TestimonyPage from './TestimonyPage/TestimonyPage'
import HomePage from './HomePage/HomePage'

import { GlobalStyles } from './global';

export default function App() {
//handles scroll and position location
  const [scroll, setScroll] = useState(window.scrollY);
  const handleScroll = () => setScroll(window.scrollY);
  useEffect(() => { window.addEventListener("scroll", handleScroll); }, []);
  
  return(
    <>
      <GlobalStyles />
      <ScrollToTop />
      <Header scroll = {scroll}/>
      <Switch>
        <Route path = "/about">
          <AboutPage scroll = {scroll}/>
        </Route>
        <Route path = "/contact">
          <ContactPage/>
        </Route>
        <Route path = "/menu">
          <MenuPage/>
        </Route>
        <Route path = "/reviews">
          <TestimonyPage/>
        </Route>
        <Route path = "/">
          <HomePage/>
        </Route>
      </Switch>
    </>  
  )
}
