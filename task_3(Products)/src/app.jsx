import ProdCards from './prodcards';
import Header from './header';

function App() {
    const products = [
        {
            id: 1,
            name: "iPhone 15 Pro",
            price: 2799,
            image: "https://qiymeti.net/wp-content/uploads/apple-iphone-15-pro-qiymeti.jpg"
        },
        {
            id: 2,
            name: "Samsung Galaxy S24 Ultra",
            price: 2599,
            image: "https://s7d1.scene7.com/is/image/dmqualcommprod/galaxy-s24ultra-titaniumgray-device-spen-front?$QC_Responsive$&fmt=png-alpha"
        },
        {
            id: 3,
            name: "Xiaomi Redmi Note 13 Pro",
            price: 899,
            image: "https://kontakt.az/media/catalog/product/cache/a252e3db3d11365dd1457895056a5f34/t/m/tm-dg-sbp-1105-sm-2670_1.png"
        },
        {
            id: 4,
            name: "PlayStation 5 Slim",
            price: 1599,
            image: "https://storage.irshad.az/products/93528/sony-playstation-5-slim-1tb.png"
        },
    ];

    return (

        <div>
            <Header />

            <div className='product-page'>

                <h1>Mehsullar</h1>

                <div className='product-grid'>

                    {products.map(p => (
                        <ProdCards
                            key={p.id}
                            img={p.image}
                            name={p.name}
                            price={p.price}
                        />
                    ))}

                </div>

            </div>

        </div>
    )
}

export default App;