import React, { useState } from "react";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Paginate from "../components/Paginate";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const CategoryProducts = () => {
  const error = false;
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const useGetProductsByCategory = async (category) => {
    const res = await axios.get(
      "https://proshop-dyti.onrender.com/api/products/category/" + category
    );

    setProducts(res.data);
  };

  useGetProductsByCategory(category);

  console.log("PRODUCTS - ", products);
  return (
    <>
      <h2 className="mt-4 mb-0">{category}</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          {/* <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          /> */}
        </>
      )}
    </>
  );
};

export default CategoryProducts;
