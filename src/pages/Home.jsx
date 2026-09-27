import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Home.css";

import products from '../data/products'

export default function Home() {
  return (
    <>
      <Header cartCount={0} />
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
              <img
                src="/images/posters/iPhone-13-sale.png"
                alt="iPhone 13 sale"
              />
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
              <img
                src="/images/stories/iPhone-17-Pro-Max.png"
                alt="iPhone 17 Pro Max"
              />
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
        <div className="categoriesSectionTitle">
          <span>دسته بندی ها</span>
        </div>
        <div className="categoriesSection">
          <div className="category">
            <img src="/images/categories/Phone.png" alt="Phone category" />
            <span>موبایل</span>
          </div>
          <div className="category">
            <img src="/images/categories/iPad.png" alt="Tablet category" />
            <span>تبلت</span>
          </div>
          <div className="category">
            <img
              src="/images/categories/Play_station.png"
              alt="Play station category"
            />
            <span>کنسول بازی</span>
          </div>
          <div className="category">
            <img src="/images/categories/laptop.png" alt="Laptop category" />
            <span>لپ تاپ</span>
          </div>
          <div className="category">
            <img src="/images/categories/watchs.png" alt="Watch category" />
            <span>ساعت هوشمند</span>
          </div>
          <div className="category">
            <img
              src="/images/categories/handsfree.png"
              alt="Handsfree category"
            />
            <span>هندزفری</span>
          </div>
          <div className="category">
            <img
              src="/images/categories/case-cover.png"
              alt="Case and cover category"
            />
            <span>قاب و کاور</span>
          </div>
          <div className="category">
            <img
              src="/images/categories/SIM-Card.png"
              alt="SIM card category"
            />
            <span>سیمکارت</span>
          </div>
        </div>
        <div className="offer">
          <div className="offer-title">
						<div className="offerTitleImageContainer">
            	<img src="./images/offer.png" />
						</div>
            <div className="offerTitleTextContainer">
              <p>
                پیشنهاد <br />
                شگفت انگیز!
              </p>
            </div>
          </div>
          <Swiper
						slidesPerView="auto"
						spaceBetween={8}
						navigation
						freeMode={true}
						modules={[Navigation, FreeMode]}
						className="offer-cards"
					>
						{products.map(p => {
							if(p.discount_percent > 0) {
								return(
									<SwiperSlide className="offerCardSlide">
										<a href="#" className="offer-card">
											<div className="offer-card__info">
													<div className="offer-card__img-container">
															<img src={p.image_src} />
													</div>
													<div className="offer-card__product-name">
															<p>{p.name}</p>
													</div>
													<div className="offer-card__offer">
															<span className="offer-card__old-price">{p.price.toLocaleString()}</span>
															<span className="offer-card__offer-percent">{p.discount_percent}%</span>
													</div>
											</div>
											<div className="offer-card__price-wrapper">
													<div className="offer-card__price">
															<span className="toman">تومان</span>
															<span>{(p.price - p.price * (1 - (p.discount_percent / 100))).toLocaleString()}</span>
													</div>
											</div>
									</a>
									</SwiperSlide>
								);
							}
						})}
					</Swiper>
        </div>
      </Container>
      <Footer />
    </>
  );
}
