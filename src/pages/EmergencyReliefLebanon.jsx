import React from "react";
import Hero from "../components/hero/Hero";
import VideoSection from "../components/VideoSection/VideoSection";
import Footer from "../components/Footer/Footer";
import backgroundImage from "../assets/img/home/background.png";
import CategoryCarousel from "../components/CampaignCarousel/CategoryCarousel";
import ImpactSection1 from "../components/ImpactSection/ImpactSection1";
import Newsletter from "../components/NewsletterSignup/Newsletter";

const EmergencyReliefLebanon = () => {
  return (
    <>
      <Hero
        backgroundImage={backgroundImage}
        heroImage={null}
        title="Emergency Relief - Lebanon"
        description="Support emergency relief efforts in Lebanon. Help provide life-saving aid to those affected by the crisis."
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

export default EmergencyReliefLebanon;
