import React, { useState } from "react";
import Layout from "../../components/Layouts/Layout";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../../styles/ContactStyle.css";

function Contact() {
  //os dados de contato
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Layout>
      <section className="contact_page">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="contact_form">
                <h2 className="text-center mb-4">Fale Conosco</h2>

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Seu nome"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder="Seu e-mail"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Sua mensagem aqui"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Button type="submit" className="btn_red w-100">
                    Enviar mensagem
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default Contact;