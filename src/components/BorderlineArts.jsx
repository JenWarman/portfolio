import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function BorderlineArts() {
    return (
        <>
        <Container classname='byte-size-habits'>
          <Row className='byte-size-row'>
            <Col className='byte-size-col'xs={10} md={4}>
            <h1 className="byte-size-title"><Link className='recent-projects-link'to='https://byte-size-habits.vercel.app/'>Borderline Arts</Link></h1>
            <h5 className="byte-size-intro"><Link className='recent-projects-link' to='https://github.com/DannyGreenan/byte-size-habits'><strong></strong></Link> Redesign of a local mental health charity’s website as part of their online initiative to rebrand for their 10 year anniversary.<br></br>

<br></br>The redesign focussed on two key areas. The first was updating the branding, with a vibrant colour palette, a dynamic and modern layout combined with energetic character designs and graphics.<br></br>

<br></br>The second area of focus was accessibility and ease of information. To achieve this the contents of the website was simplified and streamlined with call to action buttons and page anchors to help navigate to vital information such as medical or emergency contacts.<br></br>

<br></br>This project utilised Wix’s customisable website builder and Customer Management Software to ensure the website was easy to maintain by volunteer staff and Wave to identify areas where accessibility standards could be improved. 
</h5>
            </Col>
            <Col xs={10} md={8}>
            <Image classname='byte-size-group-image'src='../ByteSizeGroupCropped.png'fluid />
            </Col>
          </Row>
          <Row className='byte-size-row'>
            <Col xs={5} md={5}>
            <h2 className="byte-size-sub-header">Project</h2>
            <h5 className="byte-size-intro">Volunteer position</h5>
            <h2 className="byte-size-sub-header">Role</h2>
            <h5 className="byte-size-intro">UI/UX design and....</h5>
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
          </Container>       
  </>
    )
}

export default BorderlineArts;