import React from "react";
import Hero from "../components/hero/Hero";
import VideoSection from "../components/VideoSection/VideoSection";
import Footer from "../components/Footer/Footer";
import backgroundImage from "../assets/img/home/background.png";
import CategoryCarousel from "../components/CampaignCarousel/CategoryCarousel";
import ImpactSection1 from "../components/ImpactSection/ImpactSection1";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import InfoSection from "../components/InfoSection/InfoSection";
import ImpactCards from "../components/impactCards/ImpactCards";

const Zakat = () => {
  return (
    <>
      <Hero
        backgroundImage={backgroundImage}
        heroImage={null}
        title="Zakat"
        description="Your Zakat donation can make a profound difference in the lives of those in need. Support our humanitarian efforts today."
        buttonText="Donate Now"
        buttonLink="#donate"
      />
      <InfoSection />
      <ImpactCards />
      <CategoryCarousel />
      <ImpactSection1 />
      <VideoSection />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Zakat;
