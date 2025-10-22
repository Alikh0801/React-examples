import Header from "./components/Header";
import CarCard from "./components/CarCard";
import cars from "./db/data";
import "./style.css";

function App() {
  return (
    <div>
      <Header />

      <div className="container">
        <h2>Cars</h2>

        <div className="card-grid">
          {cars.map((car) => (
            <CarCard
              key={car.id}
              image={car.image}
              name={car.name}
              model={car.model}
              price={car.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
