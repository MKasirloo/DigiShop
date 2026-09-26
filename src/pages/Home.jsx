import Container from '../components/Container'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Home.css'

export default function Home() {
  return(
		<>
			<Header cartCount={0}/>
			<div className="header-fixer"></div>
			<Container>
			<Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={1}
          className="mainSlider"
        >
					<SwiperSlide>
						<div className="mainSiderSlideContainer">
							<img src="/images/posters/iPhone-13-sale.png" alt="iPhone 13 sale" />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="mainSiderSlideContainer">
							<img src="/images/posters/iPhone-14.png" alt="iPhone 14 show" />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="mainSiderSlideContainer">
							<img src="/images/posters/Gifts.png" alt="Gifts" />
						</div>
					</SwiperSlide>
				</Swiper>
			</Container>
			<Footer />
		</>
  );
}