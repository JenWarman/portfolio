import { Container, Row, Col,  } from "react-bootstrap"

export default function ByteSizeHabitsDemo() {
    return <>
    <Container >
    <h2 className="display-8 fw-bold text-center p-2">Demo</h2>
        <Row className="d-flex pb-5">
          <Col>
            <iframe
              src="https://www.youtube.com/embed/WPAtkq1zvKI?si=ie-yvSHupAOpQSYC"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
      </Container>
    </>
 
}