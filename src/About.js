import React from 'react';
import { Container, Row, Col, Button, Carousel  } from 'react-bootstrap';
import "./App.css";

function About() {
    return (
        <Container fluid>
            <div style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/luise-and-nic-43SoHFBVVHg-unsplash.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center'
        }}>
            <Container>
                    <Row className="justify-content-center text-center">
                    <Col lg={8}>
                        <h1 className="text-white fw-bold mb-4">Selamat Datang di Perusahaan Kami</h1>
                        <p className="text-white fs-4 mb-4">
                        Kami menyediakan solusi terbaik untuk kebutuhan Anda dengan inovasi, kepercayaan, dan dedikasi yang tinggi.
                        </p>
                        <Button variant="primary" size="lg" className="me-2" href="/"> 
                              Pelajari Lebih Lanjut
                        </Button>
                        <Button variant="outline-light" size="lg" href='/contact'>Hubungi Kami</Button>
                    </Col>
                    </Row>
            </Container>
        </div>

            <Container className='mt-5'>
                    <Row className="justify-content-center text-center">
                    <Col lg={8}>
                        <h1 className="text-black fw-bold mb-4">Apa itu Njie Code?</h1>
                        <p className="text-black fs-4 mb-4">
                        Kami merupakan perusahaan yang bergerak di bidang pemrograman website dan aplikasi untuk membantu masyarakat dalam memecahkan masalah sehari-hari mereka
                        </p>
                    </Col>
                    </Row>
            </Container>

      <Container className="mt-5">
      <h1 className="text-black fw-bold mb-4 text-center">Kegiatan-Kegiatan Kami</h1>
      <Carousel>
        <Carousel.Item>
          <div
            style={{
              position: 'relative',
              height: '400px',
              backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/carriza-maiquez-sUIdCvblysI-unsplash.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <Carousel.Caption>
              <h3>Website Development</h3>
              <p>Kami melayani website development dengan berbagai jenis framework dan bahasa pemrograman!</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              position: 'relative',
              height: '400px',
              backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/jexo-yVxUC9I9Cik-unsplash.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Carousel.Caption>
              <h3>Desktop App Development</h3>
              <p>Kami melayani desktop app development dengan berbagai jenis arsitektur pemrograman mobile!</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              position: 'relative',
              height: '400px',
              backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/mobile-app-about.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Carousel.Caption>
              <h3>Mobile App Development</h3>
              <p>Kami melayani mobile app development dengan menerapkan UI dan UX yang intuitif, user-friendly serta efisien dengan menerapkan teknologi terbaru dan sesuai kebutuhan Anda.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
        </Container> 
    );
}

export default About;