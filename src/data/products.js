import brands from "./brands";

const products = [
  {
    id: 1,
    name: "گوشی موبایل آیفون مدل iPhone 12 Pro Max",
    english_name: "Apple iPhone 12 Pro Max",
    price: 80000000,
    discount_percent: 10,
    in_stock: true,
    sold: 2847,
    rating: 4.7,
    comments: 384,
    questions: 47,
    brand: "Apple",
    image_src: "/images/products/iPhone-12-pro-max-black.png",
    images: [
      "/images/products/iPhone-12-pro-max-black.png"
    ],
    colors: [
      { id: 1, name: "مشکی", code: "#000000" },
      { id: 2, name: "سفید", code: "#ffffff" },
      { id: 3, name: "نقره ای", code: "#cccccc" }
    ],
    key_features: [
      { id: 1, name: "نمایشگر", body: "6.7 اینچی Super Retina XDR OLED" },
      { id: 2, name: "پردازنده", body: "Apple A14 Bionic" },
      { id: 3, name: "دوربین", body: "سه‌گانه 12 مگاپیکسلی" },
      { id: 4, name: "زوم اپتیکال", body: "2.5 برابر" },
      { id: 5, name: "حافظه داخلی", body: "128 / 256 / 512 گیگابایت" },
      { id: 6, name: "شبکه", body: "پشتیبانی از 5G" },
      { id: 7, name: "مقاومت", body: "IP68 در برابر آب و گردوغبار" },
      { id: 8, name: "احراز هویت", body: "Face ID" },
      { id: 9, name: "شارژ بی‌سیم", body: "MagSafe و Qi" },
      { id: 10, name: "نرخ نوسازی", body: "60 هرتز" }
    ]
  },

  {
    id: 2,
    name: "کنسول بازی سونی مدل PS5 Slim Digital Edition",
    english_name: "Sony PlayStation 5 Slim Digital Edition",
    price: 120000000,
    discount_percent: 4,
    in_stock: false,
    sold: 1923,
    rating: 4.5,
    comments: 217,
    questions: 31,
    brand: "Sony",
    image_src: "/images/products/ps5-slim-digital.jpg",
    images: [
      "/images/products/ps5-slim-digital.jpg"
    ],
    colors: [
      { id: 1, name: "سفید", code: "#ffffff" },
      { id: 2, name: "مشکی", code: "#111111" }
    ],
    key_features: [
      { id: 1, name: "پردازنده", body: "AMD Zen 2 هشت هسته‌ای" },
      { id: 2, name: "پردازنده گرافیکی", body: "AMD RDNA 2" },
      { id: 3, name: "حافظه داخلی", body: "1 ترابایت SSD" },
      { id: 4, name: "رزولوشن", body: "تا 4K" },
      { id: 5, name: "دسته بازی", body: "DualSense" },
      { id: 6, name: "نوع حافظه", body: "SSD پرسرعت" },
      { id: 7, name: "خروجی تصویر", body: "HDMI 2.1" },
      { id: 8, name: "اتصال شبکه", body: "Wi-Fi و Ethernet" }
    ]
  },

  {
    id: 3,
    name: "تبلت اپل مدل iPad 12 Pro",
    english_name: "Apple iPad 12 Pro",
    price: 100000000,
    discount_percent: 8,
    in_stock: true,
    sold: 1356,
    rating: 4.8,
    comments: 163,
    questions: 28,
    brand: "Apple",
    image_src: "/images/products/iPad-12-pro-black.jpg",
    images: [
      "/images/products/iPad-12-pro-black.jpg"
    ],
    colors: [
      { id: 1, name: "مشکی", code: "#1c1c1c" },
      { id: 2, name: "نقره ای", code: "#d9d9d9" },
      { id: 3, name: "خاکستری", code: "#777777" }
    ],
    key_features: [
      { id: 1, name: "نمایشگر", body: "12.9 اینچی Liquid Retina" },
      { id: 2, name: "پردازنده", body: "Apple M2" },
      { id: 3, name: "حافظه داخلی", body: "128 / 256 / 512 گیگابایت" },
      { id: 4, name: "دوربین اصلی", body: "12 مگاپیکسلی" },
      { id: 5, name: "دوربین سلفی", body: "12 مگاپیکسلی" },
      { id: 6, name: "سیستم عامل", body: "iPadOS" },
      { id: 7, name: "قلم", body: "پشتیبانی از Apple Pencil" },
      { id: 8, name: "درگاه", body: "USB-C" }
    ]
  },

  {
    id: 4,
    name: "گوشی موبایل اپل مدل iPhone X",
    english_name: "Apple iPhone X",
    price: 50000000,
    discount_percent: 20,
    in_stock: true,
    sold: 4218,
    rating: 4.3,
    comments: 526,
    questions: 64,
    brand: "Apple",
    image_src: "/images/products/iPhone-X-black.jpg",
    images: [
      "/images/products/iPhone-X-black.jpg"
    ],
    colors: [
      { id: 1, name: "مشکی", code: "#111111" },
      { id: 2, name: "نقره ای", code: "#d6d6d6" }
    ],
    key_features: [
      { id: 1, name: "نمایشگر", body: "5.8 اینچی Super Retina OLED" },
      { id: 2, name: "پردازنده", body: "Apple A11 Bionic" },
      { id: 3, name: "دوربین", body: "دوگانه 12 مگاپیکسلی" },
      { id: 4, name: "حافظه داخلی", body: "64 / 256 گیگابایت" },
      { id: 5, name: "احراز هویت", body: "Face ID" },
      { id: 6, name: "شبکه", body: "4G LTE" },
      { id: 7, name: "مقاومت", body: "IP67" }
    ]
  },

  {
    id: 5,
    name: "لپ تاپ اپل مدل MacBook Air",
    english_name: "Apple MacBook Air",
    price: 100000000,
    discount_percent: 3,
    in_stock: false,
    sold: 987,
    rating: 4.6,
    comments: 142,
    questions: 19,
    brand: "Apple",
    image_src: "/images/products/macBook-Air.png",
    images: [
      "/images/products/macBook-Air.png"
    ],
    colors: [
      { id: 1, name: "نقره ای", code: "#c8c8c8" },
      { id: 2, name: "خاکستری", code: "#777777" }
    ],
    key_features: [
      { id: 1, name: "پردازنده", body: "Apple M2" },
      { id: 2, name: "نمایشگر", body: "13.6 اینچی Liquid Retina" },
      { id: 3, name: "حافظه رم", body: "8 گیگابایت" },
      { id: 4, name: "حافظه داخلی", body: "256 گیگابایت SSD" },
      { id: 5, name: "گرافیک", body: "Apple GPU" },
      { id: 6, name: "سیستم عامل", body: "macOS" },
      { id: 7, name: "درگاه", body: "USB-C / Thunderbolt" }
    ]
  },

  {
    id: 6,
    name: "گوشی موبایل Xiaomi مدل 11T Pro",
    english_name: "Xiaomi 11T Pro",
    price: 60000000,
    discount_percent: 15,
    in_stock: true,
    sold: 3164,
    rating: 4.4,
    comments: 341,
    questions: 52,
    brand: "Xiaomi",
    image_src: "/images/products/xiaomi-11T-pro.jpg",
    images: [
      "/images/products/xiaomi-11T-pro.jpg"
    ],
    colors: [
      { id: 1, name: "مشکی", code: "#111111" },
      { id: 2, name: "سفید", code: "#eeeeee" },
      { id: 3, name: "آبی", code: "#4b78a8" }
    ],
    key_features: [
      { id: 1, name: "نمایشگر", body: "6.67 اینچی AMOLED" },
      { id: 2, name: "پردازنده", body: "Snapdragon 888" },
      { id: 3, name: "دوربین اصلی", body: "108 مگاپیکسلی" },
      { id: 4, name: "حافظه داخلی", body: "128 / 256 گیگابایت" },
      { id: 5, name: "حافظه رم", body: "8 / 12 گیگابایت" },
      { id: 6, name: "باتری", body: "5000 میلی‌آمپرساعت" },
      { id: 7, name: "شارژ سریع", body: "120 وات" },
      { id: 8, name: "شبکه", body: "پشتیبانی از 5G" }
    ]
  },

  {
    id: 7,
    name: "گوشی موبایل اپل مدل iPhone 13",
    english_name: "Apple iPhone 13",
    price: 90000000,
    discount_percent: 7,
    in_stock: false,
    sold: 2471,
    rating: 4.9,
    comments: 298,
    questions: 43,
    brand: "Apple",
    image_src: "/images/products/iPhone-13-red.png",
    images: [
      "/images/products/iPhone-13-red.png"
    ],
    colors: [
      { id: 1, name: "قرمز", code: "#a00000" },
      { id: 2, name: "مشکی", code: "#171717" },
      { id: 3, name: "سفید", code: "#eeeeee" },
      { id: 4, name: "آبی", code: "#3d5d7a" }
    ],
    key_features: [
      { id: 1, name: "نمایشگر", body: "6.1 اینچی Super Retina XDR OLED" },
      { id: 2, name: "پردازنده", body: "Apple A15 Bionic" },
      { id: 3, name: "دوربین", body: "دوگانه 12 مگاپیکسلی" },
      { id: 4, name: "حافظه داخلی", body: "128 / 256 / 512 گیگابایت" },
      { id: 5, name: "شبکه", body: "پشتیبانی از 5G" },
      { id: 6, name: "مقاومت", body: "IP68" },
      { id: 7, name: "احراز هویت", body: "Face ID" },
      { id: 8, name: "نرخ نوسازی", body: "60 هرتز" }
    ]
  },

  {
    id: 8,
    name: "هندزفری بیسیم اپل مدل AirPods Pro",
    english_name: "Apple AirPods Pro",
    price: 50000000,
    discount_percent: 10,
    in_stock: true,
    sold: 5382,
    rating: 4.7,
    comments: 613,
    questions: 76,
    brand: "Apple",
    image_src: "/images/products/airpods-pro.jpg",
    images: [
      "/images/products/airpods-pro.jpg"
    ],
    colors: [
      { id: 1, name: "سفید", code: "#ffffff" }
    ],
    key_features: [
      { id: 1, name: "نوع اتصال", body: "بی‌سیم" },
      { id: 2, name: "نوع هدفون", body: "داخل گوش" },
      { id: 3, name: "حذف نویز", body: "Active Noise Cancellation" },
      { id: 4, name: "مقاومت", body: "IPX4" },
      { id: 5, name: "درگاه شارژ", body: "USB-C" },
      { id: 6, name: "قابلیت‌ها", body: "Transparency Mode و Adaptive Audio" }
    ]
  },
  {
    id: 9,
    name: "گوشی موبایل اپل مدل iPhone 14 Pro Max",
    english_name: "Apple iPhone 14 Pro Max",
    price: 125000000,
    discount_percent: 0,
    in_stock: true,
    sold: 3276,
    rating: 4.8,
    comments: 472,
    questions: 58,
    brand: "Apple",
    image_src: "/images/products/14-pro-max.png",
    images: [
      "/images/products/14-pro-max.png"
    ],
    colors: [
      {
        id: 1,
        name: "بنفش تیره",
        code: "#4b4158"
      },
      {
        id: 2,
        name: "مشکی",
        code: "#1d1d1f"
      },
      {
        id: 3,
        name: "نقره ای",
        code: "#e3e4e5"
      },
      {
        id: 4,
        name: "طلایی",
        code: "#f4e4d0"
      }
    ],
    key_features: [
      {
        id: 1,
        name: "نمایشگر",
        body: "6.7 اینچی Super Retina XDR OLED"
      },
      {
        id: 2,
        name: "پردازنده",
        body: "Apple A16 Bionic"
      },
      {
        id: 3,
        name: "دوربین اصلی",
        body: "سه‌گانه 48 مگاپیکسلی"
      },
      {
        id: 4,
        name: "دوربین تله‌فوتو",
        body: "زوم اپتیکال 3 برابر"
      },
      {
        id: 5,
        name: "حافظه داخلی",
        body: "128 / 256 / 512 گیگابایت و 1 ترابایت"
      },
      {
        id: 6,
        name: "شبکه",
        body: "پشتیبانی از 5G"
      },
      {
        id: 7,
        name: "مقاومت",
        body: "IP68 در برابر آب و گردوغبار"
      },
      {
        id: 8,
        name: "احراز هویت",
        body: "Face ID"
      },
      {
        id: 9,
        name: "شارژ بی‌سیم",
        body: "MagSafe و Qi"
      },
      {
        id: 10,
        name: "نرخ نوسازی",
        body: "120 هرتز ProMotion"
      }
  ]
}
];

export default products;
