import React from "react";
import Hero from "../components/hero/Hero";
import Footer from "../components/Footer/Footer";
import backgroundImage from "../assets/img/zakat/hero/background-img.png";
import heroImage from "../assets/img/zakat/hero/right-side.png"
import mobileImg from "../assets/img/zakat/hero/mobile-image.png"
import ImpactSection1 from "../components/ImpactSection/ImpactSection1";
import Newsletter from "../components/NewsletterSignup/Newsletter";
import InfoSection from "../components/InfoSection/InfoSection";
import ImpactCards from "../components/impactCards/ImpactCards";
import infoRightImage from "../assets/img/zakat/InfoSection/info-right-img.png"

const Zakat = () => {
  return (
    <>
      <Hero
        backgroundImage={backgroundImage}
        mobileImage={mobileImg}  
        heroImage={heroImage}
        title="Zakat"
        description="Your Zakat donation can make a profound difference in the lives of those in need. Support our humanitarian efforts today."
        buttonText="Donate Now"
        buttonLink="#donate"
      />
      <InfoSection
       title = "WHY GIVE ZAKAT?"
      paragraphs = {[`Zakat is an obligation, but it’s also a gift Allah has placed in our wealth. The Qur’an speaks about charity that purifies and blesses what we have.

 

Your Zakat through MTJF is directed to people who qualify to receive it: families facing hunger, illness, and poverty, with nowhere to turn for help. Your Zakat can provide food to families with nothing to eat, medical help where it is not available, or clean water where it is scarce.

 

The Prophet ﷺ said: “Whoever pays the zakat on his wealth will have its evil removed from him.” (Ibn Majah)

Give your Zakat today, and let it be relief for someone who has been suffering for too long.`]}
      image ={infoRightImage} 
      
      />
      <ImpactCards />
      <ImpactSection1 />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Zakat;
