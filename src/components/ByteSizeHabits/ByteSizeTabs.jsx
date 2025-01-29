import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ByteSizeWireFrames from './ByteSizeWireFrames';
import ByteSizeHabitsDemo from './ByteSizeHabitsDemo';
import { Container } from 'react-bootstrap';

export default function ByteSizeHabitsTabs() {
        return (
            <Container classname="byte-size-habits-tabs">
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="wireframes" title="Wireframes">
              <ByteSizeWireFrames/>
            </Tab>
            <Tab eventKey="demo" title="Demo">
              <ByteSizeHabitsDemo/>
            </Tab>
            <Tab eventKey="github" title="Github" disabled>
              Tab content for Contact
            </Tab>
          </Tabs>
          </Container>
        );
      }
