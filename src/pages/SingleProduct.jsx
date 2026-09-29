import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as Icons from "../assets/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import styles from "./SingleProduct.module.css";

import products from "../data/products";
import brands from "../data/brands"

//Sample product:
const product = products[5];

export default function SingleProduct() {
  const insuranceCost = product.price * 0.1;
  const [currentPhoto, setCurrentPhoto] = useState(product.images[0]);
  const [hasInsurance, setHasInsurance] = useState(true);
  const [cartCount, setCartCount] = useState(0);
  const [totalCost, setTotalCost] = useState(
    product.price * (1 - product.discount_percent / 100) + insuranceCost
  );
  const [timeLeft, setTimeLeft] = useState(219478);
  const [isLiked, setIsLiked] = useState(false);
  const [color, setColor] = useState(product.colors[0].name);

  useEffect(() => {
    if (timeLeft > 0) {
      setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    }
  });
  function renderAddToCart() {
    if (cartCount === 0) {
      return (
        <button className={styles.addToCartBtn} onClick={() => setCartCount(1)}>
          افزودن به سبد خرید
        </button>
      );
    } else {
      return (
        <div className={styles.afterAddedToCart}>
          <div className={styles.quantityContainer}>
            <button
              className={styles.quantityButton}
              onClick={() => setCartCount(cartCount - 1)}
            >
              {cartCount === 1 ? (
                <Icons.TrashCanIcon />
              ) : (
                <Icons.RemoveLineIcon />
              )}
            </button>
            <div className={styles.quantity}>{cartCount}</div>
            <button
              className={styles.quantityButton}
              onClick={() => setCartCount(cartCount + 1)}
            >
              <Icons.AddIcon />
            </button>
          </div>
          <button className={styles.viewCartBtn}>
            <span>مشاهده سبد خرید</span>
            <span>
              <Icons.ChevronLeftIcon />
            </span>
          </button>
        </div>
      );
    }
  }

  return (
    <>
      <Header />
      <div className={styles.breadcrumbContainer}>
        <ul className={styles.breadcrumb}>
          <li className={styles.breacrumbItem}>
            <a href="/">دیجی شاپ</a>
          </li>
          <span>{">"}</span>
          <li className={styles.breacrumbItem}>
            <a href="/">محصولات</a>
          </li>
          <span>{">"}</span>
          <li className={styles.breadcrumbActive}>
            <a href="/">گوشی موبایل</a>
          </li>
        </ul>
      </div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          {product.discount_percent > 0 && (
            <div className={styles.timer}>
              <div className={styles.seconds}>
                <span>ثانیه</span>
                {timeLeft % 60}
              </div>
              <div className={styles.timerDivider}>:</div>
              <div className={styles.minutes}>
                <span>دقیقه</span>
                {Math.floor(timeLeft / 60) % 60}
              </div>
              <div className={styles.timerDivider}>:</div>
              <div className={styles.hours}>
                <span>ساعت</span>
                {Math.floor(timeLeft / 3600) % 24}
              </div>
              <div className={styles.timerDivider}>:</div>
              <div className={styles.days}>
                <span>روز</span>
                {Math.floor(timeLeft / 86400)}
              </div>
            </div>
          )}
          <div className={styles.currentImage}>
            <span className={styles.discountBadge}>
              {product.discount_percent + "%"}
            </span>
            <img src={currentPhoto} alt={product.name} />
          </div>
          <Swiper
            className={styles.images}
            modules={[FreeMode]}
            slidesPerView="auto"
            freeMode={true}
            spaceBetween={40}
          >
            {product.images.map((i) => {
              return (
                <SwiperSlide
                  className={styles.imagesImage}
                  onClick={() => setCurrentPhoto(i)}
                >
                  <img src={i} alt={product.name} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className={styles.info}>
          <div className={styles.title}>
            <h2>{product.name}</h2>
          </div>
          <div className={styles.titleBottom}>
            <div className={styles.englishTitle}>
              <h4>{product.english_name}</h4>
            </div>
            <div className={styles.titleBottomIcons}>
              <div
                className={`${styles.likeBtn} ${styles.titleBottomIcon} ${
                  isLiked ? styles.liked : ""
                }`}
                onClick={() => setIsLiked(!isLiked)}
              >
                <Icons.HeartIcon />
              </div>
              <div className={styles.titleBottomIcon}>
                <Icons.ShareIcon />
              </div>
            </div>
          </div>
          <div className={styles.ratingAndComments}>
            <div className={styles.rating}>
              <Icons.YellowStarIcon />
              <span>{product.rating}</span>
            </div>
            <div className={styles.commentsAndQuestions}>
              <a href="#">{product.comments + " دیدگاه"}</a>
              <span>.</span>
              <a href="#">{product.questions + " پرسش"}</a>
            </div>
          </div>
          <div className={styles.brandContainer}>
            <p className={styles.brandContainerTitle}>
              برند:
            </p>
            {brands.filter(b => (b.name === product.brand)).map(b => {
              return (
                <a href="#" className={styles.brand}>
                  <p className={styles.brandName}>
                    {b.name}
                  </p>
                  <div className={styles.brandImage}>
                    <img src={b.image_src} alt={b.alt} />
                  </div>
                </a>
              );
            })}
          </div>
          <div className={styles.colorsContainer}>
            <p className={styles.colorTitle}>
              رنگ:
            </p>
            <div className={styles.colors}>
              {product.colors.map(c => {
                return(
                  <button key={c.id} className={`${styles.colorOption} ${c.name === color ? styles.selected : ''}`} onClick={() => setColor(c.name)}>
                    <div className={styles.colorPreview} style={{ backgroundColor: c.code }}></div>
                    <p>{c.name}</p>
                  </button>
                );
              })}
            </div>
          </div>
          <div className={styles.keyFeaturesContainer}>
            <div className={styles.keyFeaturesTitle}>
              <p>ویژگی های کلیدی:</p>
            </div>
            <ul className={styles.keyFeatures}>
              {product.key_features.map(f => {
                return(
                  <li key={f.id} className={styles.keyFeature}>
                    <p className={styles.keyFeatureTitle}>
                      {f.name + ": "}
                    </p>
                    <p className={styles.keyFeatureBody}>
                      {f.body}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className={styles.purchaseContainer}>
          <div className={styles.insurance}>
            <div className={styles.insuranceTitle}>
              <span className={styles.insuranceTitleIcon}>
                {hasInsurance ? (
                  <Icons.CircleCheckIcon color={"green"} />
                ) : (
                  <Icons.ShieldIcon color={"#4d00ff"} />
                )}
              </span>
              <span>
                {hasInsurance
                  ? "بیمه به کالا اضافه شد."
                  : "افزودن بیمه به کالا"}
              </span>
            </div>
            <div className={styles.insuranceBottom}>
              {hasInsurance ? (
                <button
                  className={styles.insuranceRemoveBtn}
                  onClick={() => {
                    setHasInsurance(!hasInsurance);
                    setTotalCost(totalCost - insuranceCost);
                  }}
                >
                  حذف بیمه از کالا
                  <span>
                    <Icons.TrashCanIcon />
                  </span>
                </button>
              ) : (
                <button
                  className={styles.insuranceAddBtn}
                  onClick={() => {
                    setHasInsurance(!hasInsurance);
                    setTotalCost(totalCost + insuranceCost);
                  }}
                >
                  افزودن بیمه به کالا
                  <span>
                    <Icons.AddIcon />
                  </span>
                </button>
              )}
              <div className={styles.insurancePrice}>
                <span>{insuranceCost.toLocaleString()}</span>
                <span className={styles.insurancePriceTooman}>تومان</span>
              </div>
            </div>
          </div>
          <div className={styles.expressDelivery}>
            <Icons.ExpressDeliveryIcon />
            <p>ارسال سریع دیجی شاپ</p>
            <span>زیر 1 روز!</span>
          </div>
          <div className={styles.snappPay}>
            <p>قابلیت پرداخت اقساطی با اسنپ پی!</p>
            <span>
              <Icons.SnappPayIcon />
            </span>
          </div>
          <div className={styles.price}>
            {product.discount_percent > 0 && (
              <div className={styles.discount}>
                {(
                  (product.price * product.discount_percent) /
                  100
                ).toLocaleString() + " "}
                تومان تخفیف!
              </div>
            )}
            <div className={styles.priceContainer}>
              {product.discount_percent > 0 && (
                <div className={styles.originalPriceContainer}>
                  <div className={styles.originalPrice}>
                    {product.price.toLocaleString()}
                  </div>
                  <span className={styles.priceDiscountBadge}>
                    {product.discount_percent + '%'}
                  </span>
                </div>
              )}
              <div className={styles.finallPrice}>
                {totalCost.toLocaleString()}
                <span>
                  <Icons.TomanIcon width={20} />
                </span>
              </div>
            </div>
            <div className={styles.cartSection}>{renderAddToCart()}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
