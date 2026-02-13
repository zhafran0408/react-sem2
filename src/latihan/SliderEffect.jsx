import { useEffect, useState } from "react";
import "./slider.css";

export default function Slider() {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);
  const [index, setIndex] = useState(0);

  function handleClick() {
    setLoad(true);
  }

  function nextSlide() {
    setIndex((prev) => (prev + 1) % products.length);
  }

  function prevSlide() {
    setIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  }

  useEffect(() => {
    if (load) {
      fetch("/matcha.json")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }
  }, [load]);

  return (
    <div className="container">
      <h1>Matcha Menu</h1>

      {!load && (
        <button className="load-btn" onClick={handleClick}>
          Load Menu
        </button>
      )}

      {products.length > 0 && (
        <div className="slider">
          <button className="prev-btn" onClick={prevSlide}>
            Prev
          </button>

          <div className="card">
            <img src={products[index].image} alt={products[index].name} />

            <div className="title-row">
              <h2>{products[index].name}</h2>
              <span className="price">{products[index].price}</span>
            </div>

            <p className="description">{products[index].description}</p>
          </div>

          <button className="next-btn" onClick={nextSlide}>
            Next
          </button>
        </div>
      )}
    </div>
  );
}
