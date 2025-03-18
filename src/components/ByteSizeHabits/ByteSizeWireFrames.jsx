import { Col, Image, Container, Row } from "react-bootstrap"

export default function ByteSizeWireFrames() {
    return <>
    
    <Container >
       <h2 className="display-8 fw-bold text-center pb-1">Wire Frames</h2>
          <Row >
            <Col xs={6} md={4}>
              <Image  src="../../ByteSizeHabits/wireframe1.png" fluid/>
            </Col>
            <Col xs={6} md={4}>
              <Image  src="../../ByteSizeHabits/wireframe2.png" fluid/>
            </Col>
            <Col xs={6} md={4}>
              <Image  src="../../ByteSizeHabits/wireframe3.png"fluid />
            </Col>
            <Col xs={6} md={4}>
              <Image  src="../../ByteSizeHabits/wireframe4.png" fluid/>
            </Col>
            <Col xs={6} md={4}>
              <Image src="../../ByteSizeHabits/wireframe5.png"fluid />
            </Col>
            <Col xs={6} md={4}>
              <Image  src="../../ByteSizeHabits/wireframe6.png"fluid />
            </Col>
          </Row>
        
        </Container>
        </>
}