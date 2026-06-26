import React from "react";
import Hero from "../components/hero/Hero";
import VideoSection from "../components/VideoSection/VideoSection";
import Footer from "../components/Footer/Footer";
import backgroundImage from "../assets/img/home/background.png";
import mobileImage from "../assets/img/home/mbl-background.png";
import healthcareImage from "../assets/img/campaigncarousel/healthcare.webp";
import waterReliefImage from "../assets/img/campaigncarousel/water-relief.webp";
import palestineImage from "../assets/img/campaigncarousel/palestine-emergency-relief.webp";
import educationImage from "../assets/img/campaigncarousel/education.webp";
import CategoryCarousel from "../components/CampaignCarousel/CategoryCarousel";
import ImpactSection1 from "../components/ImpactSection/ImpactSection1";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import "./Home.css";

const homeCategories = [
  { title: "Healthcare", image: healthcareImage },
  { title: "Water Relief", image: waterReliefImage },
  { title: "Palestine Emergency Relief", image: palestineImage },
  { title: "Education", image: educationImage },
];

const Home = () => {
  return (
    <>
      <Hero
        className="home-hero"
        backgroundImage={backgroundImage}
        mobileImage={mobileImage}
        title="LEBANON EMERGENCY"
        description="The crisis in Lebanon is growing every day. Over 1.1 million people have been forced from their homes, more than 390,000 of them children, crowded into shelters with no food, no hygiene, and no way to cook a meal."
        buttonText="Donate Now"
        buttonLink="#donate"
        showMobileButtonAboveText
      />
      <CategoryCarousel
        className="home-categories"
        categories={homeCategories}
        visibleDesktop={4}
        visibleMobile={1}
        useCarousel={false}
        mobileCarousel
        showControls
      />
      <ImpactSection1
        className="home-impact"
        itemsPerPage={1}
        showDots
      />
      <VideoSection
        className="home-video"
        videoId="KPg1Ux3juAU"
        embedOnLoad
      />
      <Newsletter className="home-newsletter" />
      <Footer className="home-footer" />
    </>
  );
};

export default Home;
