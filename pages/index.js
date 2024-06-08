import Link from 'next/link'
import Head from 'next/head'
import DivContainer from '../components/container'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Toast from 'react-bootstrap/Toast';


const HomePage = (props) => {
    return (
        <>
            <Head>
                <title>Welcome Page</title>
            </Head>
            <DivContainer>
                <Container>
                    <Row>
                        <Col>
                            <Accordion defaultActiveKey="0" >
                                <Accordion.Item eventKey="0" >
                                    <Accordion.Header>Account Details</Accordion.Header>
                                    <Accordion.Body>
                                        <Card style={{ width: 'auto' }}>
                                            <Card.Body>
                                                <Card.Title>Account No.1248</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                                <Card.Text style={{width: '48%'}}>
                                                   305 Palm Breeze way
                                                   Miami FL 33140
                                                   305-480-0013
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        <Card style={{ width: 'auto' }}>
                                            <Card.Body>
                                                <Card.Title>Account Type</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the
                                                    bulk of the card's content.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Contacts</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                           
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Agenda</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>SP Growth Target</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Account Opportunities</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                        <Col>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Account Alerts</Accordion.Header>
                                    <Accordion.Body>
                                        <Toast>
                                            <Toast.Header>
                                                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                                                <strong className="me-auto">Finance Head</strong>
                                                {/* <small>11 mins ago</small> */}
                                            </Toast.Header>
                                            <Toast.Body>9hrs past due.</Toast.Body>
                                        </Toast>
                                        <Toast>
                                            <Toast.Header>
                                                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                                                <strong className="me-auto">Ecom order not placed</strong>
                                                {/* <small>11 mins ago</small> */}
                                            </Toast.Header>
                                            <Toast.Body>9hrs past due.</Toast.Body>
                                        </Toast>
                                        <Toast>
                                            <Toast.Header>
                                                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                                                <strong className="me-auto">Order below minimum</strong>
                                                {/* <small>11 mins ago</small> */}
                                            </Toast.Header>
                                            <Toast.Body>9hrs past due.</Toast.Body>
                                        </Toast>
                                        <Toast>
                                            <Toast.Header>
                                                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                                                <strong className="me-auto">Ram block in stock</strong>
                                                {/* <small>11 mins ago</small> */}
                                            </Toast.Header>
                                            <Toast.Body>9hrs past due.</Toast.Body>
                                        </Toast>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                        <Col>3 of 3</Col>
                    </Row>
                </Container>
                {/* {props.content} */}
            </DivContainer>
        </>
    )
}
export async function getStaticProps(context) {
    const response = await fetch("http://localhost:8080/content")
    const data = await response.json()
    console.log("CONTENT DATA==>", data)
    return {
        props: {
            content: data.content
        }
    }

}
export default HomePage