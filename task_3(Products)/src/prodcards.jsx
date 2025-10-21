function ProdCards({ img, name, price }) {

    return (
        <div className="product-card">

            <img src={img} alt="" />
            <h3> {name} </h3>
            <p className="price">{price} Azn</p>
            <button className="add-btn">Add to Card</button>

        </div>
    )
}

export default ProdCards;