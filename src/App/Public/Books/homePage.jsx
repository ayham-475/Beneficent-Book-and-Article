import React from 'react'
import Hedder from '../Layout/Hedder.jsx'
import CardSm from './CardSm.jsx'
import Cards from './BooksCard/Cards.jsx'
import Fotter from '../Layout/Fotter.jsx'
import Home from './Home.jsx'
import LuxuryHeroSection from '../HeroKnowledgeSection.jsx'
function HomePage() {
  return (
    <div className="">
      <Hedder/>
      <LuxuryHeroSection />
      <CardSm /> 
      <Cards/>
      <Fotter />
    </div>
  )
}

export default HomePage
