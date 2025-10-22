import products from "./db/data";
import Header from "./components/Header";
import ProdCard from "./components/ProductCard";
import "./index.css"

function App() {

  return (

    <div>

      <Header />

      <div className="container">

        <h1>Sandwiches stores</h1>

        <div>

          {products.map((p) => (
            <ProdCard

              key={p.id}
              img={p.img}
              name={p.name}
              dsc={p.dsc}
              price={p.price}
            />
          ))}

        </div>

      </div>


    </div>
  )
}
export default App;