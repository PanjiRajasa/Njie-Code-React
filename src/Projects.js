import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description:
        "Website e-commerce modern dengan fitur lengkap, seperti sistem pembayaran, pencarian produk, dan dashboard admin.",
      image: "/e-commerce-project.jpg",
    },
    {
      id: 2,
      title: "Mobile App untuk Pendidikan",
      description:
        "Aplikasi edukasi interaktif yang membantu siswa belajar dengan kuis dan materi pembelajaran online.",
      image: "/education-app.jpg",
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      description:
        "Dashboard data analytics yang menyediakan visualisasi data lengkap dan performa real-time untuk bisnis.",
      image: "/dashboard-analytics.jpg",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/spruce-landscape.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 className="text-white fw-bold">Proyek Kami</h1>
      </div>

      {/* Projects Section */}
      <Container className="mt-5">
        <h2 className="text-center fw-bold mb-4">Proyek Unggulan Kami</h2>
        <Row>
          {projects.map((project) => (
            <Col md={4} className="mb-4" key={project.id}>
              <Card className="shadow-sm">
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
