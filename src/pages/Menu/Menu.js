import React from "react";
import Layout from "../../components/Layouts/Layout";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/MenuStyle.css";
import Cards from "../../components/Layouts/Cards";

import Image1 from "../../assets/menu/burger-11.jpg";
import Image2 from "../../assets/menu/burger-12.jpg";
import Image3 from "../../assets/menu/burger-13.jpg";
import Image4 from "../../assets/menu/burger-14.jpg";
import Image5 from "../../assets/menu/burger-15.jpg";
import Image6 from "../../assets/menu/burger-16.jpg";

const mockData = [
  {
    id: "0001",
    image: Image1,
    title: "Crispy Chicken",
    paragraph: "Frango crocante, molho chili, tomates, picles e coleslaw artesanal.",
    rating: 5,
    price: 34.9,
  },
  {
    id: "0002",
    image: Image2,
    title: "Ultimate Bacon",
    paragraph: "Blend da casa, queijo cheddar, bacon crocante, cebola e mostarda.",
    rating: 4.5,
    price: 38.5,
  },
  {
    id: "0003",
    image: Image3,
    title: "Black Sheep",
    paragraph: "Queijo prato, relish de tomate, abacate fresh, alface e cebola roxa.",
    rating: 4.5,
    price: 42.0,
  },
  {
    id: "0004",
    image: Image4,
    title: "Vegan Burger",
    paragraph: "Hambúrguer de grão-de-bico, queijo vegano, alface, tomate e maionese de ervas.",
    rating: 4,
    price: 36.9,
  },
  {
    id: "0005",
    image: Image5,
    title: "Double Burger",
    paragraph: "Dois blends, cheddar, picles e molho especial.",
    rating: 5,
    price: 45.9,
  },
  {
    id: "0006",
    image: Image6,
    title: "Turkey Burger",
    paragraph: "Hambúrguer de peru, cheddar, cebola caramelizada e alface.",
    rating: 4,
    price: 32.0,
  },
];

const renderRatingIcons = (rating) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (rating > 0.5) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
      rating--;
    } else if (rating > 0 && rating < 1) {
      stars.push(<i key={"half"} className="bi bi-star-half"></i>);
      rating--;
    } else {
      stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
    }
  }

  return stars;
};

function Menu() {
  return (
    <Layout>
      <section className="menu_page">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
              <h2>Nosso Menu</h2>
              <p>
                Escolha entre nossos hambúrgueres artesanais preparados com ingredientes frescos e muito sabor.
              </p>
            </Col>
          </Row>

          <Row>
            {mockData.map((cardData, index) => (
              <Cards
                key={index}
                image={cardData.image}
                rating={cardData.rating}
                title={cardData.title}
                paragraph={cardData.paragraph}
                price={cardData.price}
                renderRatingIcons={renderRatingIcons}
              />
            ))}
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default Menu;