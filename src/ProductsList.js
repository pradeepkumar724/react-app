import axios from "axios";
import { useEffect, useState } from "react";

function ProductsList() {
  let [productsList, setProductsList] = useState([]);

  useEffect(() => {
    async function apiCallig() {
      let dummyApiResponse = await axios.get("https://dummyjson.com/products");
      //   console.log(dummyApiResponse);
        console.log(dummyApiResponse.data.products);
      setProductsList(dummyApiResponse.data.products);
    }
    apiCallig();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {productsList.map((product) => (
          <div className="col-3 card shadow mt-2 mb-2">
            <img src={product.images[0]} className="card-img-top" alt={product.title} height="300px"/>
            <div>
              <h6>{product.title}</h6>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
