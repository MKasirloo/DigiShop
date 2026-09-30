import { useState } from 'react';
import './ProductsFilter.css'
import { ChevronDownIcon, TomanIcon } from '../assets/icons';

export default function ProductsFilter({ products, setFilteredProducts }) {
  const [isFilterOpen, setIsFilterOpen] = useState(
    {
      price: false,
      inStock: false
    }
  );
  const [inStockOnly, setInStockOnly] = useState(false);
  const [offerOnly, setOfferOnly] = useState(false);
  const productsMaxPrice = Math.max(...products.map(p => p.price));
  const [price, setPrice] = useState({min: 0, max: productsMaxPrice});
  function onMinChange(e) {
    let newPrice = {...price, min: Number(e.target.value)};
    newPrice.min = Math.max(newPrice.min, 0);
    if(newPrice.min > price.max) {
      newPrice.min = price.max;
    }
    setPrice(newPrice);
    filterProducts(newPrice);
  }

  function onMaxChange(e) {
    let newPrice = {...price, max: (e.target.value === '' ? productsMaxPrice : Number(e.target.value))};
    newPrice.max = Math.min(newPrice.max, productsMaxPrice);
    if(newPrice.max < price.min) {
      newPrice.max = price.min;
    }
    setPrice(newPrice);
    filterProducts(newPrice);
  }

  function onInStockChange() {
    setInStockOnly(!inStockOnly);
    filterProducts(price, !inStockOnly, offerOnly);
  }

  function onOfferOnlyChange() {
    setOfferOnly(!offerOnly);
    filterProducts(price, inStockOnly, !offerOnly);
  }

  function filterProducts(price, inStockOnly, offerOnly) {
    setFilteredProducts(products.filter(
      p => ((
        p.price * (1 - p.discount_percent / 100)) >= price.min
        && (p.price * (1 - p.discount_percent / 100)) <= price.max
        && (!inStockOnly || p.in_stock)
        && (!offerOnly || (p.discount_percent > 0))
      )
    ));
  }
  return(
    <>
      
      <ul className="filters">
        <li className="filter">
          <div className="inStockOnly">
            <p>فقط نمایش کالا های موجود: </p>
            <div className={`switch ${inStockOnly ? "on" : ''}`} onClick={onInStockChange}></div>
          </div>
        </li>
        <li className="filter">
          <div className="offerOnly">
            <p>فقط نمایش کالا های تخفیف دار: </p>
            <div className={`switch ${offerOnly ? "on" : ''}`} onClick={onOfferOnlyChange}></div>
          </div>
        </li>
        <li className={`filter ${isFilterOpen.price ? "open" : ''}`}>
          <div className={`filterTitle ${isFilterOpen.price ? "open" : ''}`} onClick={() => setIsFilterOpen({...isFilterOpen, price: !isFilterOpen.price})}>
            <p>فیلتر قیمت</p>
            <ChevronDownIcon />
          </div>
          <div className="filterBody">
            <div className="minFilterContainer">
              <label htmlFor="min-filter">از</label>
              <input id="min-filter" type="text" className="min-price" onChange={onMinChange} value={(price.min > 0 ? price.min : 0)} />
              <TomanIcon width={20} />
            </div>
            <div className="maxFilterContainer">
              <label htmlFor="max-filter">تا</label>
              <input id="max-filter" type="text" className="max-price" onChange={onMaxChange} value={price.max} />
              <TomanIcon width={20} />
            </div>
            <div className="priceRange">
              <div className="priceRangeDefault"></div>
              <div className="priceRangeProgressBar"
              style={{
                left: Math.floor((price.min / productsMaxPrice) * 100) + '%',
                right: Math.floor(100 - ((price.max / productsMaxPrice) * 100)) + '%'
              }}>
              </div>
              <input id="minPriceSlider" type="range" step={500000} min={0} max={productsMaxPrice} onChange={onMinChange} value={price.min} />
              <input id="maxPriceSlider" type="range" step={500000} min={0} max={productsMaxPrice} onChange={onMaxChange} value={price.max} />
            </div>
          </div>
        </li>
        {/* <li className="filter"></li> */}
      </ul>
    </>
  );
}