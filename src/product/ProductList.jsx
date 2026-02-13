import { useEffect, useState } from "react";

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
    setIndex((prev) =>
      prev === 0 ? products.length - 1 : prev - 1
    );
  }

  useEffect(() => {
    if (load) {
      fetch("/matcha.json")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }
  }, [load]);

  return (
    <div>
      <h1>Matcha Menu</h1>

      {!load && (
        <button onClick={handleClick}>
          Load Menu
        </button>
      )}

      {products.length > 0 && (
        <div>
          <button onClick={prevSlide}>Prev</button>

          <div>
            <h2>{products[index].name}</h2>
            <p>{products[index].price}</p>
            <p>{products[index].description}</p>
          </div>

          <button onClick={nextSlide}>Next</button>
        </div>
      )}
    </div>
  );
}



