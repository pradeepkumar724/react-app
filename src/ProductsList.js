import axios from "axios";
import { useEffect, useState } from "react";

function ProductsList() {
  let [productsList, setProductsList] = useState([]);

  useEffect(() => {
    async function apiCallig() {
      let dummyApiResponse = await axios.get("https://dummyjson.com/products");
      //   console.log(dummyApiResponse);
        // console.log(dummyApiResponse.data.products);

        var updatedApiResponse =  dummyApiResponse.data.products.map(product => {
          product.is_fav = false;
          return product
        });
        // console.log(updatedApiResponse);

      setProductsList(updatedApiResponse);
    }
    apiCallig();
  }, []);

function updateFavList(productData){
    console.log(productData.id)
    var tempData = productsList.map(product => {
      if(product.id === productData.id){
        if(productData.is_fav === false){
          product.is_fav = true;
        }else{
          product.is_fav = false;
        }
      }
      return product;
    })
    setProductsList(tempData);
  }

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
            <button className="btn btn-primary mb-4" onClick={event => updateFavList(product)}>
              {product.is_fav === true && <spam>Remove</spam> }
              {product.is_fav === false && <spam>Add</spam> }
              </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
