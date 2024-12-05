import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/landscape.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            alignItems: 'center'
        }}
      >
        <Container className="text-center text-white">
          <h1 className="fw-bold mb-4">Selamat Datang di Njie Code</h1>
          <p className="fs-4 mb-4">
            Kami menciptakan solusi digital inovatif melalui pengembangan aplikasi dan website untuk memenuhi kebutuhan Anda. Mari berkembang bersama kami!
          </p>
          <Button variant="light" size="lg" href="/contact">
            Mari Berkembang Bersama Kami!
          </Button>
        </Container>
      </div>

      {/* About Section */}
      <Container className="mt-5">
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <h2 className="fw-bold mb-4">Komitmen Kami</h2>
            <p className="fs-4 mb-4">
              Di Njie Code, kami berkomitmen untuk memberikan solusi terbaik di
              bidang pengembangan website dan aplikasi. Dengan pengalaman dan
              keahlian yang mendalam dalam berbagai framework dan bahasa
              pemrograman, kami siap membantu Anda membangun proyek digital yang
              Anda impikan.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Services Section */}
      <Container className="mt-5">
        <h2 className="fw-bold text-center mb-4">Layanan Kami</h2>
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src="/carriza-maiquez-sUIdCvblysI-unsplash.jpg"
                alt="Website Development"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>Website Development</Card.Title>
                <Card.Text>
                  Kami mengembangkan website yang responsif dan dapat diandalkan
                  menggunakan teknologi terbaru.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src="/jexo-yVxUC9I9Cik-unsplash.jpg"
                alt="App Development"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>Desktop App Development</Card.Title>
                <Card.Text>
                  Kami merancang desktop app yang user-friendly dan efisien,
                  menggunakan teknologi yang sesuai dengan kebutuhan Anda.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src="/mobile-app-about.jpg"
                alt="App Development"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>Mobile App Development</Card.Title>
                <Card.Text>
                  Kami mengembangkan aplikasi mobile dengan UI/UX intuitif dan teknologi terkini, memastikan pengalaman pengguna yang optimal.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Contact Section */}
      <Container className="mt-5 text-center">
        <h2 className="fw-bold mb-4">Hubungi Kami</h2>
        <p className="fs-4 mb-4">
          Ingin memulai proyek bersama kami? Kami siap membantu Anda!
        </p>
        <Button variant="primary" size="lg" href="/contact">
          Hubungi Kami
        </Button>
      </Container>
    </div>
  );
}

export default Home;
