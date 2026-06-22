import React from "react";
import Hero from "../components/hero/Hero";
import VideoSection from "../components/VideoSection/VideoSection";
import Footer from "../components/Footer/Footer";
import backgroundImage from "../assets/img/home/background.png";
import CategoryCarousel from "../components/CampaignCarousel/CategoryCarousel";
import ImpactSection1 from "../components/ImpactSection/ImpactSection1";
import Newsletter from "../components/NewsletterSignup/Newsletter";

const Education = () => {
  return (
    <>
      <Hero
        backgroundImage={backgroundImage}
        heroImage={null}
        title="Education"
        description="Support education initiatives to give children and youth the opportunity to learn and build a better future."
        buttonText="Donate Now"
        buttonLink="#donate"
      />
      <CategoryCarousel />
      <ImpactSection1 />
      <VideoSection />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Education;
