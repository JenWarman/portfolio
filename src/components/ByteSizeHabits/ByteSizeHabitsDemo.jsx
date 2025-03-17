import { Container, Row, Col,  } from "react-bootstrap"

export default function ByteSizeHabitsDemo() {
    return <>
    <Container className="youtube-container">
        <Row className="youtube-row">
          <Col className="youtube-col">
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