import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function BookClubApp() {
    return (
        <>
        <Container classname='bok-club-container'>
          <Row className='book-club-row'>
            <Col className='book-club-row'>
            <h1 className="book-club-title">Book Club App</h1>
            </Col>
            </Row>
            <Row>
            <Col xs={3} md={2}>
            <Image classname='byte-size-group-image'src='../ByteSizeHabitsMobileLogin.png' fluid/>
            </Col >
            <Col xs={3} md={2}>
            <Image classname='byte-size-group-image'src='../ByteSizeHabitsMobileLogin.png' fluid/>
            </Col>
            <Col xs={3} md={2}>
            <Image classname='byte-size-group-image'src='../ByteSizeHabitsMobileLogin.png' fluid/>
            </Col>
            <Col xs={3} md={2}>
            <Image classname='byte-size-group-image'src='../ByteSizeHabitsMobileLogin.png' fluid/>
            </Col>
            <Col xs={3} md={2}>
            <Image classname='byte-size-group-image'src='../ByteSizeHabitsMobileLogin.png' fluid/>
            </Col>
            <Col xs={3} md={2}>
            <Image classname='byte-size-group-image'src='../ByteSizeHabitsMobileLogin.png' fluid/>
            </Col>
            </Row>
            <Row>
            <Col xs={10} md={12}><h3 className='book-club-intro'>ipsum dolor sit amet, consectetur adipiscing elit. <br></br><br></br>Duis auctor elit odio, nec dapibus orci malesuada a. Ut gravida, lorem eget mattis porta, ex enim condimentum erat, ac lacinia turpis nibh at ipsum.</h3></Col>
           </Row>
          <Row className='byte-size-row'>
            <Col>
            <h2 className="byte-size-sub-header">Project</h2>
            <h5 className="byte-size-intro">Self-initiated</h5>
            </Col>
            <Col>
            <h2 className="byte-size-sub-header">Role</h2>
            <h5 className="byte-size-intro">UI/UX Designer</h5>
            </Col>
          </Row>
          <Row className='byte-size-row'>
            <Col xs={11} md={11}className="byte-size-objectives">
            <h2 className="byte-size-sub-header">Objectives</h2>
          <ul>
              <li className="byte-size-list"><h5 className="byte-size-list"><span><strong>Set personal goals.</strong> The user can select a programming language to learn and set a daily target to study, for example 30 minutes per day. </span></h5></li>
              <li className="byte-size-list"><h5 className="byte-size-list"><span><strong>Motivate the user.</strong> Nibbler's health decreases over time and the only way to restore him to full charge is for the user to complete their daily learning objective.
              </span></h5></li>
              <li className="byte-size-list"><h5 className="byte-size-list"><span><strong>Reward the user. </strong> When the user completes a study session they are awarded coins in addition to restoring Nibbler’s health. These coins can be redeemed in store to treat your virtual pet.
              </span></h5></li>
              <li className="byte-size-list"><h5 className="byte-size-list"><span><strong> Track progress.</strong>The user can track their progress and compare their weekly or monthly streak.
              </span></h5></li>
            </ul>
            </Col>
          </Row>
          <Row className='byte-size-row'>
            <Col xs={11} md={8} className="byte-size-objectives">
            <h2 className="byte-size-sub-header">The User</h2>
          <ul>
              <li className="byte-size-list"><h5 className="byte-size-list"><span><strong>Set personal goals.</strong> The user can select a programming language to learn and set a daily target to study, for example 30 minutes per day. </span></h5></li>
              <li className="byte-size-list"><h5 className="byte-size-list"><span><strong>Motivate the user.</strong> Nibbler's health decreases over time and the only way to restore him to full charge is for the user to complete their daily learning objective.
              </span></h5></li>
              <li className="byte-size-list"><h5 className="byte-size-list"><span><strong>Reward the user. </strong> When the user completes a study session they are awarded coins in addition to restoring Nibbler’s health. These coins can be redeemed in store to treat your virtual pet.
              </span></h5></li>
              <li className="byte-size-list"><h5 className="byte-size-list"><span><strong> Track progress.</strong>The user can track their progress and compare their weekly or monthly streak.
              </span></h5></li>
            </ul>
            </Col>
            <Col xs={11} md={4}><Image src='../profile.jpg' fluid/></Col>
          </Row>
          </Container>

          <Container className='wireframe-container' fluid bg="dark">
            <Container className="inner-wireframe-container">
            <Row>
              <h2 id='wireframe-header'>Wireframes</h2>
            </Row>
          <Row className="byte-size-wireframe-row">
            <Col xs={4} md={4}>
            <Image className="wireframe-image" src=''/>
            </Col>
            <Col xs={4} md={4}>
            <Image className="wireframe-image" src=''/>
            </Col>
            <Col xs={4} md={4}>
            <Image className="wireframe-image"  src=''/>
            </Col>
            <Col xs={4} md={4}>
            <Image className="wireframe-image" src=''/>
            </Col>
            <Col xs={4} md={4}>
            <Image className="wireframe-image" src=''/>
            </Col>
            <Col xs={4} md={4}>
            <Image className="wireframe-image" src=''/>
            </Col>
          </Row>
          </Container>
          </Container> 
          <Container className="youtube-container">
              <Row className="youtube-row">
                <Col className="youtube-col">
                <iframe src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </Col>
              </Row>
          </Container>
        
  </>
    )
}

export default BookClubApp;

