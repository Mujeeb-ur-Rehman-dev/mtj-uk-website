import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './CampaignCarousel.css';
import PalestineImg from '../../assets/img/imgi_7_Palestine-Emergency-Relief-1.webp';
import EducationImg from '../../assets/img/imgi_8_Education-1.webp';
import HealthcareImg from '../../assets/img/imgi_9_Healthcare-1.webp';

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
              spaceBetween={10}
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
                  spaceBetween: 25,
                },
                1200: {
                  slidesPerView: 3,
                  slidesPerGroup: 1,
                  spaceBetween: 10,
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" className="campaign-arrow">
                  <polygon points="24 12.001 2.914 12.001 8.208 6.706 7.501 5.999 1 12.501 7.5 19.001 8.207 18.294 2.914 13.001 24 13.001 24 12.001" />
                </svg>
              </div>
              <div className="campaign-swiper-pagination"></div>
              <div className="campaign-swiper-next">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" className="campaign-arrow">
                  <polygon points="17.5 5.999 16.793 6.706 22.086 11.999 1 11.999 1 12.999 22.086 12.999 16.792 18.294 17.499 19.001 24 12.499 17.5 5.999" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignCarousel;
