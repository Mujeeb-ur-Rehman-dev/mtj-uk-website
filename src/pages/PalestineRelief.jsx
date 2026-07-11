import React from "react";
import Hero from "../components/hero/Hero";
import VideoSection from "../components/VideoSection/VideoSection";
import Footer from "../components/Footer/Footer";
import backgroundImage from "../assets/img/home/background.png";
import CategoryCarousel from "../components/CampaignCarousel/CategoryCarousel";
import DonatinCards from "../components/DonatinCards/DonatinCards";
import ImpactSection1 from "../components/ImpactSection/ImpactSection1";
import Newsletter from "../components/NewsletterSignup/Newsletter";

const PalestineRelief = () => {
  return (
    <>
        <Hero
             backgroundImage={backgroundImage}
             heroImage={null}
             title="PALESTINE EMERGENCY"
             description=""
             buttonText=""
             buttonLink=""
             cardContent={
                      <DonatinCards
                       campaignTitle="PALESTINE EMERGENCY"
                       defaultSelectedIndex={1}   // "Rs 70K" pre-selected hai screenshot mein
                       options={[
                               { amount: "10K", description: "Feed's a Family for a Day" },
                               { amount: "70K", description: "Feed's a Family for a Week" },
                               { amount: "300K", description: "Feed's a Family for a Month" },
                                  ]}
           onDonate={({ frequency, amount }) => { /* apna donate logic yahan */ }}
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

export default PalestineRelief;
