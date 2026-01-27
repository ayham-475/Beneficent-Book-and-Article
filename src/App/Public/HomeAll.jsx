import React from 'react'
import Hedder from './Hedder/Hedder'
import CosmicHero from './Cagegories/CosmicHero'
import ContentGridSection from './Cagegories/ContentGridSection'
import SocialAndTabletSection from './Cagegories/SocialAndTabletSection'
import Fotter from './Fotter'
import Home from './Home'
function HomeAll() {
  return (
    <div>
      <Hedder />
      <Home />
      <CosmicHero />
      <ContentGridSection />
      <SocialAndTabletSection />
      <Fotter />
      {/* bg-[#fcfcfc] CosmicHero
      bg-[#f0f3fa] ContentGridSection */}
    </div>
  )
}

export default HomeAll
