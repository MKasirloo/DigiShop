import ProductCard from './ProductCard'
import './ProductsGrid.css'

export default function ProductGrid({ products }) {
  return(
    <div className="products-grid">
      {products.map(p => {
        return(<ProductCard key={p.id} product={p}/>);
      })}
    </div>
  );
}