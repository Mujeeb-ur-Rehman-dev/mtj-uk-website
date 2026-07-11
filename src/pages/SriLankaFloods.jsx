import React from "react";
import Hero from "../components/hero/Hero";
import VideoSection from "../components/VideoSection/VideoSection";
import Footer from "../components/Footer/Footer";
import backgroundImage from "../assets/img/home/background.png";
import CategoryCarousel from "../components/CampaignCarousel/CategoryCarousel";
import ImpactSection1 from "../components/ImpactSection/ImpactSection1";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import AmountPickerGrid from "../components/Amountpickergrid/AmountPickerGrid";

const SriLankaFloods = () => {
  return (
    <>
      <Hero
        title="Sri Lanka Floods"
        backgroundImage={backgroundImage}
        heroImage={null}
        description="Help flood victims in Sri Lanka by providing emergency relief, shelter, and essential supplies."
        buttonText="Donate Now"
        buttonLink="#donate"
          cardContent={
    <AmountPickerGrid
      title="Provide urgent aid to Sri Lanka flood victims"
      presetAmounts={[
        { value: 7000, label: '7,000' },
        { value: 15000, label: '15K' },
        { value: 25000, label: '25K' },
        { value: 70000, label: '70K' },
        { value: 150000, label: '150K' },
        { value: 250000, label: '250K' },
      ]}
      defaultSelectedIndex={1}
      onDonate={({ amount, currencyCode }) => { /* apna donate logic */ }}
    />
  }
      />
      <CategoryCarousel />
      <ImpactSection1 />
      <VideoSection />
      <Newsletter />
      <Footer />
    </>
  );
};

export default SriLankaFloods;
