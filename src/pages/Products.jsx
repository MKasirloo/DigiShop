import { use, useState } from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductsGrid";
import ProductsFilter from "../components/ProductsFilter";
import products from "../data/products";
import * as Icons from "../assets/icons";
import "./Products.css";

export default function Products() {
  const [filteredProducts, setFilteredProducts] = useState(products);
	const [currentOrderBy, setCurrentOrderBy] = useState("bestSelling");
	const [isOrderByClosed, setIsOrderByClosed] = useState(true);
	const orderByText = {
		bestSelling: "پرفروش ترین",
		mostExpensive: "گران ترین",
		cheapest: "ارزان ترین",
		mostPopular: "محبوب ترین",
	}

	function orderProducts(action) {
		const tempFilteredProducts = [...filteredProducts];
		switch(action) {
			case "bestSelling":
				setFilteredProducts(tempFilteredProducts.sort((a, b) => a.sold - b.sold));
				break;
			case "cheapest":
				setFilteredProducts(tempFilteredProducts.sort((a, b) => a.price - b.price));
				break;
			case "mostExpensive":
				setFilteredProducts(tempFilteredProducts.sort((a, b) => b.price - a.price));
				break;
			case "mostPopular":
				setFilteredProducts(tempFilteredProducts.sort((a, b) => a.rating - b.rating));
				break;
		}
	}

  return (
    <>
      <Header />
      <Container>
				<div className={`OrderListOverlay ${isOrderByClosed ? 'hidden' : ''}`} onClick={() => setIsOrderByClosed(true)}></div>
        <div className="productsWrapper">
          <div className="productsContainer">
						<div className="orderBySection">
							<div className="mobileOrderByButton">
								<div className="orderByText" onClick={() => setIsOrderByClosed(false)}>
									<Icons.OrderIcon />
									<span>مرتب سازی بر اساس:</span>
								</div>
								<div className="currentOrderBy">
									{orderByText[currentOrderBy]}
								</div>
							</div>
							<div className={`orderByList ${isOrderByClosed ? 'closed' : ''}`}>
								<button
									className={`orderByListItem ${currentOrderBy === 'bestSelling' ? 'selected' : ''}`}
									onClick={() => {
										setCurrentOrderBy("bestSelling");
										orderProducts("bestSelling");
										setIsOrderByClosed(true);
									}}
								>
									پرفروش ترین
								</button>
								<button
									className={`orderByListItem ${currentOrderBy === 'cheapest' ? 'selected' : ''}`}
									onClick={() => {
										setCurrentOrderBy("cheapest");
										orderProducts("cheapest");
										setIsOrderByClosed(true);
									}}
								>
									ارزان ترین
								</button>
								<button
									className={`orderByListItem ${currentOrderBy === 'mostExpensive' ? 'selected' : ''}`}
									onClick={() => {
										setCurrentOrderBy("mostExpensive");
										orderProducts("mostExpensive");
										setIsOrderByClosed(true);
									}}
								>
									گران ترین
								</button>
								<button
									className={`orderByListItem ${currentOrderBy === 'mostPopular' ? 'selected' : ''}`}
									onClick={() => {
										setCurrentOrderBy("mostPopular");
										orderProducts("mostPopular");
										setIsOrderByClosed(true);
									}}
								>
									محبوب ترین
								</button>
							</div>
						</div>
            <ProductGrid products={filteredProducts} />
          </div>
					<div className="productFilters">	
						<ProductsFilter
							products={products}
							setFilteredProducts={setFilteredProducts}
						/>
					</div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
