import React from "react";
import Hero from "../components/hero/Hero";
import ImpactSection from "../components/ImpactSection/ImpactSection";
import CampaignCarousel from "../components/CampaignCarousel/CampaignCarousel";
import VideoSection from "../components/VideoSection/VideoSection";
import NewsletterSignup from "../components/NewsletterSignup/NewsletterSignup";
import Footer from "../components/Footer/Footer";
import backgroundImage from "../assets/img/home/background.png";
import heroImage from "../assets/img/home/palestine-cut.png";
import impactBgImage from "../assets/img/impacts/background/background.png";

// Sample impact cards data (exactly 4 cards as in reference)
const impactCardsData = [
  {
    icon: "help",
    title: "100,000+",
    description: "People helped during the floods in Pakistan"
  },
  {
    icon: "medicine",
    title: "500,000+",
    description: "Free tests and medicines provided"
  },
  {
    icon: "clean-water",
    title: "350,000+",
    description: "People given access to clean water"
  },
  {
    icon: "scholarship",
    title: "10,000+",
    description: "Scholarships gifted to students"
  }
];

const Home = () => {
  return (
    <>
      <Hero
        backgroundImage={backgroundImage}
        heroImage={heroImage}
        title="PALESTINE EMERGENCY"
        description="In this moment of crisis, your support can make a difference. Donate now to help provide urgent humanitarian aid to vulnerable families in Palestine."
        buttonText="Donate Now"
        buttonLink="#donate"
      />
      <CampaignCarousel />
      <ImpactSection
        title="Our Work for Humanity"
        subtitle="The Impact of Your Donations"
        backgroundImage={impactBgImage}
        cards={impactCardsData}
      />
      
      <VideoSection />
      <NewsletterSignup />
      <Footer />
    </>
  );
};

export default Home;
