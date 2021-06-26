import React, { useState } from 'react'

import { useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import moment from 'moment'

import { deletePlant } from '../../store/actions/gardenActions'

const PlantCard = ({ plant }) => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);

    const { date, name, fromSeed, growingZone, harvestIn, heirloom, isInGarden, seedDepth, soilType, sunlight, watering } = plant;

    const formattedDate = moment(date).fromNow()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDeleteTodo = (id) => {
        dispatch(deletePlant(id))
    }

    return (
        <Card className="shadow m-4">
            <Card.Header className="d-flex justify-content-between font-weight-bold p-1"><Button variant="link">{isInGarden ? <>&#10004;</> : null}</Button><Button variant="link" className="text-dark font-weight-bold" size="lg">X</Button></Card.Header>
            <Card.Body className="text-center">
                <Card.Title>{name}</Card.Title>
                <div className="mb-3 rounded" style={{ width: "180px", height: "100px", backgroundColor: "mediumSeaGreen" }}></div>
                <Card.Text>
                    <h6 className="font-italic font-weight-light">Added {formattedDate}</h6>
                </Card.Text>
                <Button variant="success" onClick={handleShow}>
                    Plant Details
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row className="my-4">
                            <Col>
                                <div className="mx-auto rounded" style={{ width: "420px", height: "260px", backgroundColor: "mediumSeaGreen" }}></div>
                            </Col>
                        </Row>
                        <Row className="d-flex">
                            <Col xs="auto" className=" m-1 ">
                                <Row xs="auto" className=" m-4 ">
                                    <strong>Growing Zone:&nbsp;</strong>{growingZone}
                                </Row>
                                <Row xs="auto" className=" m-4 ">
                                    <strong>Seed Depth:&nbsp;</strong>{seedDepth}"
                                </Row>
                                <Row xs="auto" className=" m-4 ">
                                    <strong>Soil Type:&nbsp;</strong>{soilType}
                                </Row>
                                <Row xs="auto" className=" m-4 ">
                                    <strong>Sunlight:&nbsp;</strong>{sunlight}
                                </Row>
                                <Row xs="auto" className=" m-4 ">
                                    <strong>Harvest in:&nbsp;</strong>{harvestIn}&nbsp;days
                                </Row>
                            </Col>
                            <Col xs="auto" className=" m-1">
                                <Row xs="auto" className=" m-4 ">
                                    <strong>Watering:&nbsp;</strong>{watering}
                                </Row>
                                <Row xs="auto" className=" m-4 ">
                                    <strong>Planted:&nbsp;</strong>{formattedDate}
                                </Row>
                                <Row xs="auto" className=" m-4 ">
                                    <strong>From Seed:&nbsp;</strong>{fromSeed}
                                </Row>
                                <Row xs="auto" className=" m-4 ">
                                    <strong>Heirloom:&nbsp;</strong>{heirloom}
                                </Row>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button><Link className="text-white" to={`/editplant/${plant._id}`}>Edit</Link></Button>
                        <Button variant="danger" onClick={() => handleDeleteTodo(plant._id)}>Remove</Button>
                    </Modal.Footer>
                </Modal>
            </Card.Body>
        </Card>
    )
}

export default PlantCard