import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const PlantDetail = () => {
    return (
        <>
            <Container fluid >
                <Row className="border-bottom my-4">
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
                    <Col xs="auto" className="border rounded m-2 ">
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

                    <Col xs="auto" className="border rounded m-2">
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
                <Row className="d-flex justify-content-center my-2" >
                    <Col xs="auto" className="text-center">
                        <Button variant="success">Planted</Button>
                    </Col>
                    <Col xs="auto" className="text-center">
                        <Button>Edit Details</Button>
                    </Col>
                    <Col xs="auto" className="text-center">
                        <Button variant="danger">Remove</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default PlantDetail