import './ProductCard.css'

export default function ProductGrid({ product }) {
  return(
    <a href="/single-product" className="product-card">
      <div className="product-card__info">
          <div className="product-card__img-container">
              <img src={product.image_src} />
          </div>
          <div className="product-card__product-name">
              <p>{product.name}</p>
          </div>
          <div className="product-card__offer">
              <span className="product-card__old-price">{product.price.toLocaleString()}</span>
              {product.discount_percent !== 0 && <span className="product-card__offer-percent">{product.discount_percent}%</span>}
          </div>
      </div>
      <div className="product-card__price-wrapper">
          <div className="product-card__price">
              <span className="toman">تومان</span>
              <span>{(product.price * (1 - product.discount_percent / 100)).toLocaleString()}</span>
          </div>
      </div>
    </a>
  );
}