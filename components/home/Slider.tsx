import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import EventCard from '../atom/EventCard';

const Slider = () => {
  const slides = [];

  for (let i = 0; i < 8; i++) {
    slides.push(
      <SwiperSlide
        key={`slide-${i}`}
        className="top-[10px] left-[2.4vw] overflow-hidden"
      >
        <EventCard />
      </SwiperSlide>
    );
  }

  return (
    <div>
      <Swiper
        className="w-[70vw] h-[500px] "
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
          1024: {
            width: 1024,
            slidesPerView: 3,
          },
        }}
        navigation
        pagination
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {slides}
      </Swiper>
    </div>
  );
};

export default Slider;
