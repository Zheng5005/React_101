import { useEffect, useState } from "react";
import "./style.css";

function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }` // The logic is that every the components fetchs the products, there will be an array of products(20).
        // So that's why you multiply by 20, in order to skip those 20 that you already have
      );
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts(() => [...products, ...result.products]); //This prevents the products array from rendereing twice at the beggining.
        //it means that we will spread the prev products from the state which in the initial state is set to [ ] so it means
        // if there is no products then there will be no previos products to be spread and no error will appear

        setLoading(false);
      }

      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  if (loading) {
    return <div>Loading data! Please wait</div>;
  }

  return (
    <>
      <div className="load-more-container">
        <div className="product-container">
          {products && products.length
            ? products.map((item) => (
                <div className="product" key={item.id}>
                  <img src={item.thumbnail} alt={item.title} />
                  <p>{item.title}</p>
                </div>
              ))
            : null}
        </div>
        <div className="button-container">
          <button
            disabled={disableButton}
            onClick={() => setCount((c) => c + 1)}
          >
            Load more Products
          </button>
        </div>
      </div>
    </>
  );
}

export default LoadMore;
