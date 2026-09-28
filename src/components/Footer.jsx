import './Footer.css';
import {HeartIcon, ChevronUpIcon} from '../assets/icons';

export default function Footer() {
  return(
    <>
    <footer>
        <div className="footer-top">
            <p className="logo-footer">دیجی شاپ</p>
            <div>
                <button className="back-to-top">
                    <a href="#">
                        بازگشت به بالا
                        <ChevronUpIcon />
                    </a>
                </button>
            </div>
        </div>
        <div className="footer-section">
            <div className="footer-desc">
                دنیای دیجیتال در دسترس شما
                در دیجی شاپ تلاش می‌کنیم جدیدترین محصولات دیجیتال را با اطلاعات کامل، قیمت مناسب و تجربه‌ای ساده و مطمئن در اختیار شما قرار دهیم.
                از موبایل و لپ‌تاپ گرفته تا تبلت، کنسول، ساعت هوشمند و لوازم جانبی؛ انتخاب کنید و با خیال راحت خرید کنید.
            </div>
            <div className="footer-badges">
                <div className="footer-badge">
                    <img src="https://khoshtipkocholo.ir/wp-content/uploads/2024/02/enamad-logo.ac482e80.jpeg" />
                </div>
                <div className="footer-badge">
                    <img src="https://www.digikala.com/statics/img/png/rezi.webp" />
                </div>
            </div>
        </div>
    </footer>
        <div className="copyright-section">
            <p>
                <span>ساخته شده با </span>
                <HeartIcon />
                <span>توسط</span>
                <a href="https://www.linkedin.com/in/mohammad-hossein-kasirloo-8a38912aa/">MKasirloo</a>
            </p>
            <p>
                تمامی حقوق متعلق به دیجی شاپ است ©
            </p>
        </div>
        <div className="mobile-menu-fixer"></div>
    </>
  );
}