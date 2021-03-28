import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
//components
import ScrollToTop from './Header/ScrollToTop'
import Header from './Header/Header'
import AboutPage from './AboutPage/AboutPage'
import ContactPage from './ContactPage/ContactPage'
import MenuPage from './MenuPage/MenuPage'
import TestimonyPage from './TestimonyPage/TestimonyPage'
import HomePage from './HomePage/HomePage'

import { GlobalStyles } from './global';

//types
import { HandleScroll } from './types.d'

const App:React.FC = () => {

//handles scroll and position location
  const [scroll, setScroll] = useState<number>(window.scrollY);
  const handleScroll:HandleScroll = () => setScroll(window.scrollY);
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

export default App