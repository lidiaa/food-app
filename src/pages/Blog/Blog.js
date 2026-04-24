import React from "react";
import Layout from "../../components/Layouts/Layout";
import { Container, Row, Carousel } from "react-bootstrap";
import "../../styles/BlogStyle.css";

import User1 from "../../assets/blog/review-author-1.jpg";
import User2 from "../../assets/blog/review-author-2.jpg";
import User3 from "../../assets/blog/review-author-3.jpg";
import User4 from "../../assets/blog/review-author-5.jpg";

function Blog() {
  return (
    <Layout>
      <section className="blog_page">
        <Container>
          <Row>
            <Carousel>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="user_img">
                    <img src={User1} className="img-fluid" alt="User 1" />
                  </div>
                  <p>
                    "Atendimento excelente e hambúrguer muito saboroso. Tudo chegou rápido e bem embalado."
                  </p>
                  <h5>Lidia Santos</h5>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <Carousel.Caption>
                  <div className="user_img">
                    <img src={User2} className="img-fluid" alt="User 2" />
                  </div>
                  <p>
                    "A opção vegana me surpreendeu. Muito bem feita e cheia de sabor."
                  </p>
                  <h5>Maria Oliveira</h5>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <Carousel.Caption>
                  <div className="user_img">
                    <img src={User3} className="img-fluid" alt="User 3" />
                  </div>
                  <p>
                    "Ótimo custo-benefício. Os combos são muito bem servidos, com batata."
                  </p>
                  <h5>João Silva</h5>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <Carousel.Caption>
                  <div className="user_img">
                    <img src={User4} className="img-fluid" alt="User 4" />
                  </div>
                  <p>
                    "Facilidade de pedir pelo app e entrega rápida: Recomendo muito!!!"
                  </p>
                  <h5>Juliana Costa</h5>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default Blog;