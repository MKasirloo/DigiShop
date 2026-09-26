//Mobile menu

const mobile_menu_btn = document.querySelector(".mobile-menu__btn");

mobile_menu_btn.addEventListener("click", () => {
    document.querySelector(".navbar-bottom").style.transform = "translateX(0)";
    document.querySelector(".mible-menu__overlay").style.display = "block";
});

document.querySelector(".mible-menu__overlay").addEventListener("click", () => {
    document.querySelector(".navbar-bottom").style.transform = "translateX(300px)";
    document.querySelector(".mible-menu__overlay").style.display = "none";
});

//Offer carousel
let offerLeftButton = document.querySelector(".offer-cards__left-button");
let offerRightButton = document.querySelector(".offer-cards__right-button");
let offerCards = document.querySelector(".offer-cards");
offerLeftButton.addEventListener("click", () => {
    offerCards.scrollBy({
        left: -180,
        behavior: "smooth"
    });
});
offerRightButton.addEventListener("click", () => {
    offerCards.scrollBy({
        left: 180,
        behavior: "smooth"
    });
});

//Categories

const categories_container = document.querySelector(".categories");

const categories = [
    {
        name: "موبایل",
        image_src: "./images/categories/Phone.png"
    },
    {
        name: "لپ تاپ",
        image_src: "./images/categories/laptop.png"
    },
    {
        name: "تبلت",
        image_src: "./images/categories/iPad.png"
    },
    {
        name: "کنسول بازی",
        image_src: "./images/categories/Play_station.png"
    },
    {
        name: "ساعت هوشمند",
        image_src: "./images/categories/watchs.png"
    },
    {
        name: "قاب و کاور موبایل",
        image_src: "./images/categories/case-cover.png"
    },
    {
        name: "سیم کارت",
        image_src: "./images/categories/SIM-Card.png"
    },
    {
        name: "هندزفری",
        image_src: "./images/categories/handsfree.png"
    }
];

for(let c of categories) {
    categories_container.innerHTML += `
        <a href="#" class="category-card">
            <img src="${c.image_src}">
            <p>${c.name}</p>
        </a>
    `;
}

// Offer cards

const offer_products = [
    {
        name: "گوشی موبایل آیفون مدل iPhone 12 Pro Max",
        original_price: 80000000,
        discount_percent: 10,
        image_src: "./images/products/iPhone-12-pro-max-black.png"
    },
    {
        name: "کنسول بازی سونی مدل PS5 Slim Digital Edition",
        original_price: 120000000,
        discount_percent: 4,
        image_src: "./images/products/ps5-slim-digital.jpg"
    },
    {
        name: "تبلت اپل مدل iPad 12 Pro",
        original_price: 100000000,
        discount_percent: 8,
        image_src: "./images/products/iPad-12-pro-black.jpg"
    },
    {
        name: "گوشی موبایل اپل مدل iPhone X",
        original_price: 50000000,
        discount_percent: 20,
        image_src: "./images/products/iPhone-X-black.jpg"
    },
    {
        name: "لپ تاپ اپل مدل Macbook Air",
        original_price: 100000000,
        discount_percent: 3,
        image_src: "./images/products/macBook-Air.png"
    },
    {
        name: "گوشی موبایل Xiaomi مدل 11T Pro",
        original_price: 60000000,
        discount_percent: 15,
        image_src: "./images/products/xiaomi-11T-pro.jpg"
    },
    {
        name: "گوشی موبایل اپل مدل iPhone 13",
        original_price: 90000000,
        discount_percent: 7,
        image_src: "./images/products/iPhone-13-red.png"
    },
    {
        name: "هندزفری بیسیم اپل مدل Airpods Pro",
        original_price: 50000000,
        discount_percent: 10,
        image_src: "./images/products/airpods-pro.jpg"
    }
];

const offer_cards = document.querySelector(".offer-cards");

for(let p of offer_products) {
    offer_cards.innerHTML += `
        <a href="#" class="offer-card">
            <div class="offer-card__info">
                <div class="offer-card__img-container">
                    <img src="${p.image_src}">
                </div>
                <div class="offer-card__product-name">
                    <p>${p.name}</p>
                </div>
                <div class="offer-card__offer">
                    <span class="offer-card__old-price">${p.original_price.toLocaleString()}</span>
                    <span class="offer-card__offer-percent">${p.discount_percent}%</span>
                </div>
            </div>
            <div class="offer-card__price-wrapper">
                <div class="offer-card__price">
                    <span class="toman">تومان</span>
                    <span>${(p.original_price * (1 - p.discount_percent / 100)).toLocaleString()}</span>
                </div>
            </div>
        </a>
    `;
}

//brand carousel

const brands = [
    {
        name: "Apple",
        alt: "Apple logo",
        image_src: "./images/brands/apple.png"
    },
    {
        name: "HP",
        alt: "HP logo",
        image_src: "./images/brands/hp.png"
    },
    {
        name: "Huawei",
        alt: "Huawei logo",
        image_src: "./images/brands/huawei.png"
    },
    {
        name: "Samsung",
        alt: "Samsung logo",
        image_src: "./images/brands/samsung.png"
    },
    {
        name: "Xiaomi",
        alt: "Xiaomi logo",
        image_src: "./images/brands/xiaomi.png"
    },
    {
        name: "Oneplus",
        alt: "Oneplus logo",
        image_src: "./images/brands/oneplus.png"
    },
    {
        name: "Motorola",
        alt: "Motorola logo",
        image_src: "./images/brands/motorola.png"
    },
    {
        name: "ROG",
        alt: "ROG logo",
        image_src: "./images/brands/ROG.png"
    },
    {
        name: "Asus",
        alt: "Asus logo",
        image_src: "./images/brands/asus.png"
    },
    {
        name: "Sony",
        alt: "Sony logo",
        image_src: "./images/brands/sony.png"
    },
    {
        name: "Xbox",
        alt: "Xbox logo",
        image_src: "./images/brands/xbox.png"
    }
];

const brand_carousels = document.querySelectorAll(".brand-carousel")

for(let brand_carousel of brand_carousels) {
    for(let b of brands) {
        brand_carousel.innerHTML += `
            <div class="brand-carousel__item">
                <img src="${b.image_src}" alt="${b.alt}">
            </div>
        `;
    }
}

//Cart add

const cart_btn = document.querySelector(".cart");
const cart_count_badge = document.querySelector(".cart span");

cart_btn.addEventListener("click", () => {
    let x = Number(cart_count_badge.innerHTML);
    x++;
    cart_count_badge.innerHTML = x;
    if(x > 0) {
        cart_count_badge.style.transform = "scale(1)";
    }
});


//Slider

const slider_left_arrow = document.querySelector(".slider-arrow-left");
const slider_right_arrow = document.querySelector(".slider-arrow-right");
const slide_container = document.querySelector(".slide-container");
const slider_images = [
    {
        src: "./images/posters/iPhone-13-sale.png",
        alt: "iPhone 13 sale"
    },
    {
        src: "./images/posters/iPhone-14.png",
        alt: "iPhone 14"
    },
    {
        src: "./images/posters/Gifts.png",
        alt: "Gifts"
    }
];

let slider_image_index = 0;

for(let i = 0; i < slider_images.length; i++) {
    document.querySelector(".slider-balls").innerHTML += `<div class="slider-ball"></div>`;
    console.log("added");
}

const slider_balls = document.querySelectorAll(".slider-ball");
slider_balls[0].classList.add("selected");

function show_slide(i) {
    const img = document.querySelector(".slide-container img");
    img.style.opacity = 0;
    setTimeout(() => {
        img.src = slider_images[i].src;
        img.alt = slider_images[i].alt;
        img.style.opacity = 1;
    }, 200);
    slider_balls[i].classList.add("selected");
}

slider_left_arrow.addEventListener("click", () => {
    slider_balls[slider_image_index].classList.remove("selected");
    slider_image_index = (slider_image_index > 0 ? slider_image_index - 1 : slider_images.length - 1);
    show_slide(slider_image_index);
});
slider_right_arrow.addEventListener("click", () => {
    slider_balls[slider_image_index].classList.remove("selected");
    slider_image_index = (slider_image_index + 1) % slider_images.length;
    show_slide(slider_image_index);
});