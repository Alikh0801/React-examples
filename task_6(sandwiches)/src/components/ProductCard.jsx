function ProdCard({ img, name, dsc, price }) {
    const onerrorimg = "https://demofree.sirv.com/nope-not-here.jpg"
    return (
        <div className="card">
            <img
                src={img}
                alt={name}
                onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = onerrorimg;
                }}
                className="card-img"
            />

            <h3>{name}</h3>
            <p>{dsc}</p>
            <p><strong>{price}$</strong></p>
            <button className="add-btn">Add to Card</button>
        </div>
    )
}

export default ProdCard;