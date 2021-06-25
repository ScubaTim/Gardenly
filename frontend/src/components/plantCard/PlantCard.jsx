import React, { useState } from 'react'

import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import moment from 'moment'

const PlantCard = ({ date, name }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Card className="shadow m-4">
            <Card.Header className="d-flex justify-content-between font-weight-bold p-1"><Button variant="link">&#10004;</Button><Button variant="link" className="text-dark font-weight-bold" size="lg" >X</Button></Card.Header>
            <Card.Body className="text-center">
                <Card.Title>{name}</Card.Title>
                <div className="mb-3 rounded" style={{ width: "180px", height: "100px", backgroundColor: "mediumSeaGreen" }}></div>
                <Card.Text>
                    <h6 className="font-italic font-weight-light">Added {moment(date).fromNow()}</h6>
                </Card.Text>


                <Button variant="success" onClick={handleShow}>
                    Plant Details
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row className="my-4">
                            <Col className="text-center mb-3">
                                <h1>Plant Name</h1>
                            </Col>
                        </Row>
                        <Row className="my-4">
                            <Col>
                                <div className=" mx-auto rounded" style={{ width: "420px", height: "260px", backgroundColor: "mediumSeaGreen" }}></div>
                            </Col>
                        </Row>
                        <Row className="d-flex justify-content-center">
                            <Col xs="auto" className=" m-2 ">
                                <Row xs="auto" className=" m-4 ">
                                    <strong>Growing Zone:&nbsp;</strong>1
                                </Row>
                                <Row xs="auto" className=" m-4 ">
                                    <strong>Ideal Temp:&nbsp;</strong>Hot
                                </Row>
                                <Row xs="auto" className=" m-4 ">
                                    <strong>Seed Depth:&nbsp;</strong>9"
                                </Row>
                                <Row xs="auto" className=" m-4 ">
                                    <strong>Soil Type:&nbsp;</strong>Sandy
                                </Row>
                                <Row xs="auto" className=" m-4 ">
                                    <strong>Sunlight:&nbsp;</strong>Full
                                </Row>
                            </Col>
                            <Col xs="auto" className=" m-2">
                                <Row xs="auto" className=" m-4 ">
                                    <strong>Harvest in:&nbsp;</strong>3 months
                                </Row>
                                <Row xs="auto" className=" m-4 ">
                                    <strong>Watering:&nbsp;</strong>Daily
                                </Row>
                                <Row xs="auto" className=" m-4 ">
                                    <strong>Planted:&nbsp;</strong>6/17/2021
                                </Row>
                                <Row xs="auto" className=" m-4 ">
                                    <strong>From Seed:&nbsp;</strong>Yes
                                </Row>
                                <Row xs="auto" className=" m-4 ">
                                    <strong>Heirloom:&nbsp;</strong>Yes
                                </Row>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button>Edit Details</Button>
                        <Button variant="danger">Remove</Button>
                    </Modal.Footer>
                </Modal>
            </Card.Body>
        </Card>
    )
}

export default PlantCard