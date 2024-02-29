import React from "react";
import Header from "./components/navbar/header";
import Section1 from "./section/hero/Section1";
import Category from "./section/landing-cards/Category";
import Story from "./section/our-story/Story";
import Story2 from "./section/our-story/Story2";
import Footer from "./section/footer/Footer";
import PopularProducts from "./section/Popular/PopularProducts";
import RecommendeProducts from "./section/Popular/RecommendeProducts";
import Blog from "./section/Blog/Blog";
import Testimonials from "./section/Testimonials/Testimonials";
import BeDealer from "./section/Dealer/BeDealer";

function Landing() {
  return (
   <div>
   <Header/>
   <Section1/>
   <Story/>
   <Category/>
   <PopularProducts/>
   <RecommendeProducts/>
   <Story2/>
   <Blog/>
   <Testimonials/>
   <BeDealer/>
   <Footer/>
   </div> 
  )
}

export default Landing