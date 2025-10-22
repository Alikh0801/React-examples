

function ProductCard({ image, name, price }) {
    const onerrorimg = "https://thumbs.dreamstime.com/b/error-cartoon-creative-design-31278970.jpg"
    return (
        <div className="product-card">

            <img
                src={image}
                alt={name}
                onError={(e) => (e.target.src = onerrorimg)}
            />
            <div className="product-info">

                <h3>{name}</h3>
                <p className="price">{price}$</p>

            </div>

        </div>
    )
}

export default ProductCard;