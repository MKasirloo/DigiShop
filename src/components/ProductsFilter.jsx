import { useState } from 'react';
import './ProductsFilter.css'

export default function ProductsFilter({ products, setFilteredProducts }) {
  const [price, setPrice] = useState({min: 0, max: Infinity});
  const [inStockOnly, setInStockOnly] = useState(false);
  function onMinChange(e) {
    const newPrice = {...price, min: Number(e.target.value)};
    setPrice(newPrice);
    filterProducts(newPrice);
  }

  function onMaxChange(e) {
    const newPrice = {...price, max: (e.target.value === '' ? Infinity : Number(e.target.value))};
    setPrice(newPrice);
    filterProducts(newPrice);
  }

  function onInStockChange(e) {
    setInStockOnly(e.target.checked);
    filterProducts(price, e.target.checked);
  }

  function filterProducts(price, inStockOnly) {
    setFilteredProducts(products.filter(
      p => ((
        p.price * (1 - p.discount_percent / 100)) >= price.min
        && (p.price * (1 - p.discount_percent / 100)) <= price.max
        && (!inStockOnly || p.in_stock)
      )
    ));
  }
  return(
    <div className="filters">
      <div className="filter">
        <label htmlFor="min-filter">از:</label>
        <input id="min-filter" type="number" className="min-price" onChange={onMinChange} />
      </div>
      <div className="filter">
        <label htmlFor="max-filter">تا:</label>
        <input id="max-filter" type="number" className="max-price" onChange={onMaxChange} />
      </div>
      <div className="filter">
        <label htmlFor="in-stock-only">فقط نمایش کالا های موجود: </label>
        <input id="in-stock-only" type="checkbox" checked={inStockOnly} onChange={onInStockChange} />
      </div>
    </div>
  );
}