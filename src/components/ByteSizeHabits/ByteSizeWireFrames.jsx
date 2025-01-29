import { Col, Image, Container, Row } from "react-bootstrap"

export default function ByteSizeWireFrames() {
    return <>
    
    <Container className="wireframe-container" fluid bg="dark">
        <Container className="inner-wireframe-container">
          <Row className="byte-size-wireframe-row">
            <Col xs={4} md={4}>
              <Image className="wireframe-image" src="../wireframe1.png" />
            </Col>
            <Col xs={4} md={4}>
              <Image className="wireframe-image" src="../wireframe2.png" />
            </Col>
            <Col xs={4} md={4}>
              <Image className="wireframe-image" src="../wireframe3.png" />
            </Col>
            <Col xs={4} md={4}>
              <Image className="wireframe-image" src="../wireframe4.png" />
            </Col>
            <Col xs={4} md={4}>
              <Image className="wireframe-image" src="../wireframe5.png" />
            </Col>
            <Col xs={4} md={4}>
              <Image className="wireframe-image" src="../wireframe6.png" />
            </Col>
          </Row>
        </Container>
        </Container>
        </>
}