import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/beautiful-lake.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1 className="text-white fw-bold">Hubungi Kami</h1>
      </div>

      {/* Contact Form Section */}
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="text-center fw-bold mb-4">Kami Siap Membantu Anda</h2>
            <p className="text-center fs-5 mb-4">
              Jika Anda memiliki pertanyaan, saran, atau ingin berdiskusi lebih lanjut, jangan ragu untuk menghubungi kami melalui formulir di bawah ini.
            </p>
            <Form>
              <Form.Group className="mb-4" controlId="formName">
                <Form.Label>Nama Lengkap</Form.Label>
                <Form.Control type="text" placeholder="Masukkan nama Anda" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Masukkan email Anda" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formSubject">
                <Form.Label>Subjek</Form.Label>
                <Form.Control type="text" placeholder="Masukkan subjek pesan Anda" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formMessage">
                <Form.Label>Pesan</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Tulis pesan Anda di sini"
                />
              </Form.Group>
              <Button variant="primary" type="submit" size="lg" className="w-100">
                Kirim Pesan
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Additional Contact Information */}
      <Container className="mt-5 text-center">
        <h2 className="fw-bold mb-4">Informasi Kontak</h2>
        <Row className="mb-4">
          <Col md={4}>
            <h5>Alamat</h5>
            <p>Jl. Teknologi No. 123, Jakarta, Indonesia</p>
          </Col>
          <Col md={4}>
            <h5>Email</h5>
            <p>contact@njiecode.com</p>
          </Col>
          <Col md={4}>
            <h5>Telepon</h5>
            <p>+62 812-3456-7890</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
