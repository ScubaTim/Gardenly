import React from 'react';
import { Link } from 'react-router-dom'

import PlantCard from '../plantCard/PlantCard'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Garden = () => {

    return (
        <>
            <Row className="my-4 d-flex justify-content-between">
                <Col xs="auto">
                    <h4>Your Garden</h4>
                </Col>
                <Col xs="auto">
                    <Button><Link className="text-white" to="/addplant">Add Plant</Link></Button>
                </Col>
            </Row>
            <Row className="border border-success rounded mx-2 pb-5 d-flex justify-content-center">
                <Col xs="auto">
                    <PlantCard />
                </Col>
                <Col xs="auto">
                    <PlantCard />
                </Col>
                <Col xs="auto">
                    <PlantCard />
                </Col>
                <Col xs="auto">
                    <PlantCard />
                </Col>
            </Row>
        </>
    )
}

export default Garden