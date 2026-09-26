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
					{/* Stories section */}
					<div className="storiesSection">
						<div className="storyContainer">
							<div className="story">
								<img src="/images/stories/iPhone-18.png" alt="iPhone 18" />
							</div>
						</div>
						<div className="storyContainer">
							<div className="story">
								<img src="/images/stories/PS5.webp" alt="PS5" />
							</div>
						</div>
						<div className="storyContainer">
							<div className="story">
								<img src="/images/stories/LOQ.webp" alt="LOQ" />
							</div>
						</div>
						<div className="storyContainer">
							<div className="story">
								<img src="/images/stories/Powerbank.webp" alt="Powerbank" />
							</div>
						</div>
						<div className="storyContainer">
							<div className="story">
								<img src="/images/stories/iPhone-17-Pro-Max.png" alt="iPhone 17 Pro Max" />
							</div>
						</div>
						<div className="storyContainer">
							<div className="story">
								<img src="/images/stories/Realme-C56.webp" alt="" />
							</div>
						</div>
						<div className="storyContainer">
							<div className="story">
								<img src="/images/stories/S26-Ultra.webp" alt="S26 Ultra" />
							</div>
						</div>
						<div className="storyContainer">
							<div className="story">
								<img src="/images/stories/Headphone.webp" alt="Headphone" />
							</div>
						</div>
					</div>
				</Container>
			<Footer />
		</>
  );
}