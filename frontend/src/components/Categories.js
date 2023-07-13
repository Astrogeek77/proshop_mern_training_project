import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get(
        "https://proshop-dyti.onrender.com/api/products/categories"
      );
      setCategories(res.data);
    };

    fetchCategories();
  }, []);

  return (
    <>
      <Container className="mb-4 px-0 d-flex justify-content-start flex-wrap">
        {categories.map((category) => (
          <Button
            className="m-2"
            variant="dark"
            size="lg"
            href={`/category/${category}`}
          >
            {category}
          </Button>
        ))}
      </Container>
    </>
  );
}

export default Categories;
