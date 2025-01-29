import { Container, Row, Col,  } from "react-bootstrap"

export default function ByteSizeHabitsDemo() {
    return <>
    <Container className="youtube-container">
        <Row className="youtube-row">
          <Col className="youtube-col">
            <iframe
              src="https://www.youtube.com/embed/WPAtkq1zvKI?si=ie-yvSHupAOpQSYC"
              title="YouTube video player"
            //   frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            //   referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
      </Container>
    </>
 
}