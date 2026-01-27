import React from 'react'
import Hedder from './Hedder/Hedder'
import CardSm from './CardSm.jsx'
import Cards from './BooksCard/Cards.jsx'
import Fotter from './Fotter.jsx'
import Home from './Home.jsx'
function HomePage() {
  return (
    <div className="">
      <Hedder/>
      <Home />
      <CardSm /> 
      <Cards/>
      <Fotter />
    </div>
  )
}

export default HomePage
