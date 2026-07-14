import React from "react";
import Hero from "../components/hero/Hero";
import Footer from "../components/Footer/Footer";
import backgroundImage from "../assets/img/home/background.png";
import ImpactSection1 from "../components/ImpactSection/ImpactSection1";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import DonatinCards from "../components/DonatinCards/DonatinCards";
import InfoSection from "../components/InfoSection/InfoSection";

const EmergencyReliefLebanon = () => {
  return (
    <>
      <Hero
        backgroundImage={backgroundImage}
        heroImage={null}
        title="Lebanon Emergency"
        description=""
        buttonText=""
        buttonLink=""
         cardContent={
    <DonatinCards
      campaignTitle="Lebanon Emergency Relief"
      options={[
        { amount: "50K", description: "Emergency support for a family" },
        { amount: "100K", description: "Covers essentials for 2 families" },
        { amount: "150K", description: "Helps 3 families survive" },
      ]}
      onDonate={({ frequency, amount }) => { /* apna donate logic yahan */ }}
    />
  }
      />
         <InfoSection
             title="FAMILIES IN LEBANON NEED YOU NOW"
             paragraphs={[
              "The crisis in Lebanon is growing every day. Over 1.1 million people have been forced from their homes, more than 390,000 of them children, crowded into shelters with no food, no hygiene, and no way to cook a meal.",
    "For $250, you put an emergency pack in the hands of a family that fled their homes with nothing.",
    "Each pack includes:",
    ["Ready-to-eat food", "Hygiene essentials", "Gas stove", "Floor mats"],
    "MTJF is already on the ground, and 45 families have already received their kits. More are waiting.",
    "Without your support, they wait longer.",
    "Send an emergency pack today."
             ]}
              image ='' 
              />
      <ImpactSection1 />
      <Newsletter />
      <Footer />
    </>
  );
};

export default EmergencyReliefLebanon;
