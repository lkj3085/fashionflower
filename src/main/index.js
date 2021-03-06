import "./index.css";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(
        "https://a8b2e974-fc54-45cd-8969-16f1c04c3bf4.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.error("애러 발생 : ", error);
      });
  }, []);
  //   axios
  // .get("https://a8b2e974-fc54-45cd-8969-16f1c04c3bf4.mock.pstmn.io/products")
  // .then(function (result) {
  //   const products = result.data.products;
  //   setProducts(products);
  // })
  // .catch(function (error) {
  //   console.error("애러 발생 : ", error);
  // });
  return (
    <div>
      <div id="banner">
        <img src="images/banners/banner1.jpg" />
      </div>
      <h1>상품리스트</h1>
      <div id="product-list">
        {products.map(function (product, index) {
          return (
            <div className="product-card">
              <Link className="product-link" to={`/products/${product.id}`}>
                <div>
                  <img className="product-img" src={product.imageUrl} />
                </div>
                <div className="product-contents">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price}원</span>
                  <div className="product-seller">
                    <img
                      className="product-avatar"
                      src="images/icons/avatar.png"
                    />
                    <span>{product.seller}</span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
        {/* <div className="product-card">
            <div>
              <img className="product-img" src="images/products/1.jpg" />
            </div>
            <div className="product-contents">
              <span className="product-name">댄디남 셔츠</span>
              <span className="product-price">30000원</span>
              <div className="product-seller">
                <img className="product-avatar" src="images/icons/avatar.png" />
                <span>운영자</span>
              </div>
            </div>
          </div> */}
      </div>
    </div>
  );
}

export default MainPage;
