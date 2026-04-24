//About.js

import React from "react";
import Layout from "../../components/Layouts/Layout";
import { Container, Row, Col } from "react-bootstrap";
import "../../styles/AboutStyle.css";
import AboutImage from "../../assets/about/about-1.jpg";

function About() {
  return (
    <Layout>
      <section className="about_page">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <div className="about_text">
                <h2>Sobre a nossa hamburgueria</h2>
                <p>
                  Somos apaixonados por hambúrgueres artesanais e por criar experiências únicas para nossos clientes.
                  Desde o início, nossa missão sempre foi oferecer produtos de alta qualidade, com ingredientes frescos
                  e muito sabor em cada detalhe.
                </p>
                <p>
                  Nosso ambiente foi pensado para reunir amigos e família em momentos especiais, onde cada pedido
                  se transforma em uma lembrança inesquecível.
                </p>
              </div>
            </Col>

            <Col lg={6}>
              <div className="about_image text-center">
                <img src={AboutImage} alt="Sobre nós" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default About;