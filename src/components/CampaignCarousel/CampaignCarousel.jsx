import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './CampaignCarousel.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import PalestineImg from '../../assets/img/campaigncarousel/palestine-emergency-relief.webp';
import EducationImg from '../../assets/img/campaigncarousel/education.webp';
import HealthcareImg from '../../assets/img/campaigncarousel/healthcare.webp';
import WaterRelief from '../../assets/img/campaigncarousel/water-relief.webp'

const CampaignCarousel = () => {
  const campaigns = [
    {
      title: "Palestine Emergency Relief",
      image: PalestineImg,
    },
    {
      title: "Education",
      image: EducationImg,
    },
    {
      title: "Healthcare",
      image: HealthcareImg,
    },
    {
      title: "Water Relief",
      image:WaterRelief,
    },
  ];

  return (
    <section className="campaign-carousel-wrapper">
      <div className="stamp-border">
        <div className="left-right-borders"></div>
        <div className="campaign-carousel">
          <div className="campaign-carousel-inner">
            {/* Section Header */}
            <div className="campaign-carousel-header">
              <h2 className="campaign-carousel-title">READY TO MAKE A DIFFERENCE?</h2>
              <h3 className="campaign-carousel-subtitle">ACT TODAY</h3>
              <p className="campaign-carousel-description">
                Provide food, clean water or emergency relief, where needed most. Your support brings care, relief, and dignity to those struggling every day.
              </p>
            </div>

            {/* Carousel */}
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView={3}
              slidesPerGroup={1}
              pagination={{
                clickable: true,
                el: '.campaign-swiper-pagination',
              }}
              navigation={{
                nextEl: '.campaign-swiper-next',
                prevEl: '.campaign-swiper-prev',
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  slidesPerGroup: 1,
                  spaceBetween: 0,
                },
                1200: {
                  slidesPerView: 3,
                  slidesPerGroup: 1,
                  spaceBetween: 0,
                },
              }}
            >
              {campaigns.map((campaign, index) => (
                <SwiperSlide key={index}>
                  <div className="campaign-card">
                    <div className="campaign-card-stamp">
                      <div className="card-side-borders"></div>
                      <div className="campaign-card-image-wrapper">
                        <img
                          src={campaign.image}
                          alt={campaign.title}
                          className="campaign-card-image"
                        />
                      </div>
                    </div>
                    <div className="campaign-card-footer">
                      <h3 className="campaign-card-title">{campaign.title}</h3>
                      <div className="campaign-card-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation and Pagination */}
            <div className="campaign-nav-pagination-wrapper">
              <div className="campaign-swiper-prev">
                <FaChevronLeft className="campaign-arrow" />
              </div>
              <div className="campaign-swiper-pagination"></div>
              <div className="campaign-swiper-next">
                <FaChevronRight className="campaign-arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignCarousel;
