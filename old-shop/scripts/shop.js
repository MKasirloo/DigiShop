const products = [
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

const products_container = document.querySelector(".products");

for(let p of products) {
    products_container.innerHTML += `
        <a href="#" class="product-card">
            <div class="product-card__info">
                <div class="product-card__img-container">
                    <img src="${p.image_src}">
                </div>
                <div class="product-card__product-name">
                    <p>${p.name}</p>
                </div>
                <div class="product-card__offer">
                    <span class="product-card__old-price">${p.original_price.toLocaleString()}</span>
                    <span class="product-card__offer-percent">${p.discount_percent}%</span>
                </div>
            </div>
            <div class="product-card__price-wrapper">
                <div class="product-card__price">
                    <span class="toman">تومان</span>
                    <span>${(p.original_price * (1 - p.discount_percent / 100)).toLocaleString()}</span>
                </div>
            </div>
        </a>
    `;
}