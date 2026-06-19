import './ImpactSection.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import iconBg from '../../assets/img/impacts/icons/icon-background/icon-bg.png';

// Import icons
import helpIcon from '../../assets/img/impacts/icons/help.svg';
import medicineIcon from '../../assets/img/impacts/icons/medicine.svg';
import cleanWaterIcon from '../../assets/img/impacts/icons/group.svg';
import scholarshipIcon from '../../assets/img/impacts/icons/scholership.svg';

// Map icon names to components
const iconMap = {
  help: helpIcon,
  medicine: medicineIcon,
  'clean-water': cleanWaterIcon,
  scholarship: scholarshipIcon
};

const ImpactSection = ({
  title = "Our Work For Humanity",
  subtitle = "THE IMPACT OF YOUR DONATIONS",
  backgroundImage,
  cards = []
}) => {
  return (
    <section className="impact-section-wrapper">
      <div className="stamp-border">
        {/* <div className="left-right-borders"></div> */}
        <div 
          className="impact-section"
          style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
        >
          <div className="impact-section-inner">
            {/* Section Header */}
            <div className="impact-section-header">
              <p className="impact-section-title">{title}</p>
              <h2 className="impact-section-subtitle">{subtitle}</h2>
            </div>

            {/* Carousel */}
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={4}
              slidesPerGroup={1}
              pagination={{ 
                clickable: true,
                el: '.impact-swiper-pagination'
              }}
              navigation={{
                nextEl: '.impact-swiper-next',
                prevEl: '.impact-swiper-prev'
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 20
                },
                768: {
                  slidesPerView: 2,
                  slidesPerGroup: 1,
                  spaceBetween: 25
                },
                1200: {
                  slidesPerView: 4,
                  slidesPerGroup: 1,
                  spaceBetween: 30
                }
              }}
            >
              {cards.map((card, index) => (
                <SwiperSlide key={index}>
                  <div className="impact-card">
                    <div className="impact-card-stamp">
                      <div className="card-side-borders"></div>
                      <div className="impact-card-icon-wrapper">
                        <img 
                          src={typeof card.icon === 'string' ? (iconMap[card.icon] || card.icon) : card.icon} 
                          alt={card.title || ""}
                          className="impact-card-icon-img"
                        />
                      </div>
                    </div>
                    <h3 className="impact-card-title">{card.title}</h3>
                    <p className="impact-card-description">{card.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation and Pagination */}
            <div className="impact-nav-pagination-wrapper">
              <div className="impact-swiper-prev">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" className="impact-arrow">
                  <polygon points="24 12.001 2.914 12.001 8.208 6.706 7.501 5.999 1 12.501 7.5 19.001 8.207 18.294 2.914 13.001 24 13.001 24 12.001" />
                </svg>
              </div>
              <div className="impact-swiper-pagination"></div>
              <div className="impact-swiper-next">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" className="impact-arrow">
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

export default ImpactSection;
