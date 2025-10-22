function CarCard({ image, name, model, price }) {
    const errorImg = "https://thumbs.dreamstime.com/b/error-cartoon-creative-design-31278970.jpg";

    return (
        <div className="card">
            <img
                src={image}
                alt={name}
                onError={(e) => (e.target.src = errorImg)}
            />
            <h3>{name}</h3>
            <p>Model: {model}</p>
            <p className="price">{price} ₼</p>
            <button className="buy-btn">Buy Now</button>
        </div>
    );
}

export default CarCard;
