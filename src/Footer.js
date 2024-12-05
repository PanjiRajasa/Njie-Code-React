import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="mt-5 bg-dark text-white py-4">
      <Container>
        <Row>
          {/* About Section */}
          <Col md={4} className="mb-4">
            <h5>Tentang Kami</h5>
            <p>
              Dengan pengalaman mendalam di berbagai teknologi dan framework, Njie Code siap menjadi mitra Anda dalam membangun solusi digital terbaik.
            </p>
          </Col>

          {/* Links Section */}
          <Col md={4} className="mb-4">
            <h5>Link Cepat</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-white text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="text-white text-decoration-none">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          {/* Contact Section */}
          <Col md={4} className="mb-4">
            <h5>Hubungi Kami</h5>
            <p>
              Email: <a href="mailto:info@njiecode.com" className="text-white">info@njiecode.com</a>
            </p>
            <p>Nomor Telepon: +62 812-3456-7890</p>
            <p>Alamat: Jl. Teknologi No. 123, Jakarta</p>
          </Col>
        </Row>

        {/* Bottom Section */}
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Njie Code. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
