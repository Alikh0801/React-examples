import products from "../db/data";
import ProductCard from "./ProductCard";

function ProductList() {
    return (
        <div className="product-list">

            {products.map((prod => (
                <ProductCard
                    key={prod.id}
                    image={prod.img}
                    name={prod.name}
                    price={prod.price}
                />
            )))}

        </div>
    )
}

export default ProductList;