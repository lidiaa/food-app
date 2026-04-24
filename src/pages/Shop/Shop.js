//Shop.js

import React from "react";
import Layout from "../../components/Layouts/Layout";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/ShopStyle.css";

import StoreIOS from "../../assets/shop/appstore.png";
import StoreGoogle from "../../assets/shop/googleplay.png";
import DownloadImage from "../../assets/shop/e-shop.png";

function Shop() {
  return (
    <Layout>
      <section className="shop_page">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
              <h4>Baixe nosso App e</h4>
              <h2>economize até 20%</h2>
              <p>
                Peça seu burger favorito com apenas alguns toques. Tenha acesso a cupons exclusivos,
                acompanhe seu pedido em tempo real e ganhe descontos especiais na sua primeira compra pelo app.
              </p>

              <Link to="/">
                <img
                  src={StoreIOS}
                  alt="App Store"
                  className="img-fluid store me-3"
                />
              </Link>

              <Link to="/">
                <img
                  src={StoreGoogle}
                  alt="Google Play"
                  className="img-fluid store"
                />
              </Link>
            </Col>

            <Col lg={6}>
              <img
                src={DownloadImage}
                alt="App"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default Shop;