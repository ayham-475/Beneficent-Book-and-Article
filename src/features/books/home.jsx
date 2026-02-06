import React from 'react';
import Hero from './Hero';
import StatsBar from './StatsBar';
import CategorySliderResponsive    from './Features';
import BooksStore from './BooksGrid';
// import FlashSales from './Earnings';
import PromoBanner from './CTA';
import Header from '../../App/Public/Layout/Hedder';
import Footer from '../../App/Public/Layout/Fotter';
const HomeBook = () => {
  return (
    <div className="bg-[#020617] min-h-screen" dir="rtl">

      <Header />
      <Hero />
          <PromoBanner />
      <StatsBar />
      

      <CategorySliderResponsive />
      <BooksStore />
      <BooksStore />
      <Footer />
  
    </div>
  );
};

export default HomeBook;