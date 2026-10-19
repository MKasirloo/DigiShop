import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '@videojs/react/video/skin.css';
import * as Icons from '../assets/icons'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";
import { VideoPlayer, VideoSkin, Video } from '@videojs/react/video';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Home.css";

import products from '../data/products'
import brands from "../data/brands"
import { useState } from "react";

export default function Home() {
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  return (
    <>
      <Header cartCount={0} />
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
      <Container>
        {/* Stories section */}
        <div className="storiesSection">
          <div className="storyContainer" onClick={() => setIsStoryModalOpen(true)}>
            <div className="story">
              <img src="/images/stories/iPhone-18.png" alt="iPhone 18" />
            </div>
          </div>
          <div className="storyContainer" onClick={() => setIsStoryModalOpen(true)}>
            <div className="story">
              <img src="/images/stories/PS5.webp" alt="PS5" />
            </div>
          </div>
          <div className="storyContainer" onClick={() => setIsStoryModalOpen(true)}>
            <div className="story">
              <img src="/images/stories/LOQ.webp" alt="LOQ" />
            </div>
          </div>
          <div className="storyContainer" onClick={() => setIsStoryModalOpen(true)}>
            <div className="story">
              <img src="/images/stories/Powerbank.webp" alt="Powerbank" />
            </div>
          </div>
          <div className="storyContainer" onClick={() => setIsStoryModalOpen(true)}>
            <div className="story">
              <img
                src="/images/stories/iPhone-17-Pro-Max.png"
                alt="iPhone 17 Pro Max"
              />
            </div>
          </div>
          <div className="storyContainer" onClick={() => setIsStoryModalOpen(true)}>
            <div className="story">
              <img src="/images/stories/Realme-C56.webp" alt="" />
            </div>
          </div>
          <div className="storyContainer" onClick={() => setIsStoryModalOpen(true)}>
            <div className="story">
              <img src="/images/stories/S26-Ultra.webp" alt="S26 Ultra" />
            </div>
          </div>
          <div className="storyContainer" onClick={() => setIsStoryModalOpen(true)}>
            <div className="story">
              <img src="/images/stories/Headphone.webp" alt="Headphone" />
            </div>
          </div>
        </div>
        <div className="mainPageSectionTitle">
          <h2>دسته بندی ها</h2>
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
										<a href="/single-product" className="offer-card">
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
															<span>{(p.price * (1 - (p.discount_percent / 100))).toLocaleString()}</span>
													</div>
											</div>
									</a>
									</SwiperSlide>
								);
							}
						})}
					</Swiper>
        </div>
				<div className="mainPageSectionTitle">
					<h2>برند های برتر</h2>
				</div>
				<Swiper
					modules={[Autoplay]}
					slidesPerView="auto"
					speed={2000}
					spaceBetween={20}
					loop={true}
					autoplay={{
						delay: 0,
						disableOnInteraction: false
					}}
					allowTouchMove={false}
					className="brandCarousel"
				>
					{brands.map(b => {
						return(
							<SwiperSlide className="brandCarouselItem">
								<img src={b.image_src} alt={b.alt} />
							</SwiperSlide>
						);
					})}
				</Swiper>
        <div className="relative isolate my-14 overflow-hidden rounded-[28px] bg-[#1b075c] text-white">
          
          <div className="absolute -right-16 -top-24 -z-10 size-80 rounded-full bg-[#4d00ff]/70 blur-[90px]" />
          <div className="absolute -bottom-32 left-1/4 -z-10 size-80 rounded-full bg-[#7c3aed]/50 blur-[100px]" />
          <div className="absolute -left-20 top-1/3 -z-10 size-64 rounded-full bg-[#4d00ff]/30 blur-[80px]" />

          <div className="grid items-center gap-8 px-6 py-10 sm:px-10 md:grid-cols-2 md:px-14 md:py-14">
            <div className="space-y-5 text-center md:text-right">
              <span className="inline-flex rounded-full border border-violet-300/20 bg-[#4d00ff]/25 px-4 py-2 text-xs text-violet-100 backdrop-blur">
                انتخاب هوشمندانه، خرید مطمئن
              </span>

              <h2 className="text-3xl font-black leading-relaxed sm:text-4xl lg:text-5xl">
                تکنولوژی جدید،
                <span className="block text-[#ddd4ff]">
                  تجربه‌ای متفاوت!
                </span>
              </h2>

              <p className="mx-auto max-w-md text-sm leading-8 text-white/70 md:mx-0">
                محصولات دیجیتال مورد علاقه‌ات رو پیدا کن و با چند کلیک خرید کن.
              </p>

              <a
                href="/products"
                className="inline-flex items-center gap-3 rounded-xl bg-[#4d00ff] px-6 py-3 font-bold text-white shadow-lg shadow-[#4d00ff]/30 transition duration-300 hover:-translate-y-1 hover:bg-[#6526ff] hover:shadow-xl hover:shadow-[#4d00ff]/40"
              >
                مشاهده محصولات
                <span aria-hidden="true">
                  <Icons.ArrowLeftIcon />
                </span>
              </a>
            </div>

            <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center">
              <div className="absolute inset-8 rounded-full border border-violet-300/15" />
              <div className="absolute inset-14 rounded-full border border-violet-300/20" />
              <div className="absolute inset-12 rounded-full bg-[#4d00ff]/30 blur-2xl" />

              <div className="relative flex size-44 rotate-[-8deg] items-center justify-center rounded-[36px] border border-violet-200/25 bg-linear-to-br from-[#8b5cf6]/35 via-[#4d00ff]/20 to-white/5 shadow-2xl shadow-[#4d00ff]/30 backdrop-blur-xl sm:size-52">
                <span
                  className="text-8xl drop-shadow-[0_0_25px_rgba(167,139,250,0.5)] sm:text-9xl"
                  aria-hidden="true"
                >
                  <img src="/images/products/iPhone-18-Pro-Max.webp" alt="iPhone 15 Pro Max" className="scale-125" />
                </span>
              </div>

              <span className="absolute right-2 top-12 rounded-2xl border border-violet-200/15 bg-[#4d00ff]/30 px-4 py-3 text-sm font-bold shadow-lg shadow-[#4d00ff]/10 backdrop-blur-md">
                کیفیت بهتر
              </span>

              <span className="absolute bottom-10 left-0 rounded-2xl border border-violet-200/15 bg-[#4d00ff]/30 px-4 py-3 text-sm font-bold shadow-lg shadow-[#4d00ff]/10 backdrop-blur-md">
                انتخاب هوشمند
              </span>
            </div>
          </div>
        </div>
        <div className="my-14 rounded-3xl border border-violet-100 bg-linear-to-br from-white via-violet-50/60 to-white p-5 sm:p-8">
          <div className="mb-8 text-center">
            <span className="inline-block rounded-full bg-violet-100 px-4 py-2 text-xs font-bold text-[#4d00ff]">
              خرید مطمئن
            </span>

            <h2 className="mt-4 text-xl font-black text-gray-900 sm:text-2xl">
              چرا از دیجی‌شاپ خرید کنیم؟
            </h2>

            <p className="mt-2 text-sm leading-7 text-gray-500">
              تجربه‌ای راحت‌تر و مطمئن‌تر در خرید محصولات دیجیتال
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            
            <div className="group flex flex-col items-center text-center">
              <div className="flex size-14 items-center justify-center rounded-2xl border border-violet-100 bg-white text-[#4d00ff] shadow-sm transition duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="size-7">
                  <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-black text-gray-800 sm:text-base">
                ضمانت اصالت کالا
              </h3>
              <p className="mt-2 max-w-52 text-xs leading-6 text-gray-500 sm:text-sm">
                اطمینان از اصالت محصولات خریداری‌شده
              </p>
            </div>

            <div className="group flex flex-col items-center text-center">
              <div className="flex size-14 items-center justify-center rounded-2xl border border-violet-100 bg-white text-[#4d00ff] shadow-sm transition duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="size-7">
                  <path d="m12 3 9 5-9 5-9-5 9-5Z" strokeLinejoin="round" />
                  <path d="M3 8v9l9 5 9-5V8M12 13v9" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-black text-gray-800 sm:text-base">
                بسته‌بندی مطمئن
              </h3>
              <p className="mt-2 max-w-52 text-xs leading-6 text-gray-500 sm:text-sm">
                توجه به سلامت کالا هنگام آماده‌سازی سفارش
              </p>
            </div>

            <div className="group flex flex-col items-center text-center">
              <div className="flex size-14 items-center justify-center rounded-2xl border border-violet-100 bg-white text-[#4d00ff] shadow-sm transition duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="size-7">
                  <path d="M3 14v-3a9 9 0 0 1 18 0v3" strokeLinecap="round" />
                  <path d="M5 14h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4Zm14 0h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4Z" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-black text-gray-800 sm:text-base">
                پشتیبانی خرید
              </h3>
              <p className="mt-2 max-w-52 text-xs leading-6 text-gray-500 sm:text-sm">
                پاسخ‌گویی به پرسش‌ها و راهنمایی پیش از خرید
              </p>
            </div>

            <div className="group flex flex-col items-center text-center">
              <div className="flex size-14 items-center justify-center rounded-2xl border border-violet-100 bg-white text-[#4d00ff] shadow-sm transition duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="size-7">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-black text-gray-800 sm:text-base">
                پیگیری سفارش
              </h3>
              <p className="mt-2 max-w-52 text-xs leading-6 text-gray-500 sm:text-sm">
                دسترسی به وضعیت سفارش از حساب کاربری
              </p>
            </div>
          </div>
        </div>

      </Container>
      <Footer />
      <div className={`${!isStoryModalOpen ? "hidden" : ''} fixed inset-0 z-100000 flex justify-center items-center`}>
        <div onClick={() => setIsStoryModalOpen(false)} className="fixed inset-0 bg-black opacity-30 isolate z-100001"></div>
        <VideoPlayer>
          <VideoSkin className="w-80 h-fit z-100002 relative">
            <button onClick={() => setIsStoryModalOpen(false)} className="absolute top-4 left-4 bg-gray-500/70 text-white p-1 backdrop-blur-lg rounded-full z-100002 h-7 w-7 border border-white/10"><Icons.CrossIcon /></button>
            <Video src={"https://video.digikala.com/qwkg7wg610/ZR2LDzdNAE/h_,360_800,480_1500,720_2500,k.mp4.list/index-f2-v1-a1.m3u8"} playsInline />
          </VideoSkin>
        </VideoPlayer>
      </div>
    </>
  );
}
