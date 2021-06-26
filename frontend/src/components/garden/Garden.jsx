import React from 'react';
import { Link } from 'react-router-dom'

import PlantsList from '../garden/PlantsList'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Garden = () => {

    return (
        <>
            <Row className="my-4 d-flex justify-content-between">
                <Col xs="auto">
                    <h1>Your Garden</h1>
                </Col>
                <Col xs="auto">
                    <Button><Link className="text-white" to="/addplant">Add Plant</Link></Button>
                </Col>
            </Row>
            <Row className="border border-success rounded mx-2 pb-5 d-flex justify-content-center">
                <PlantsList />
            </Row>
        </>
    )
}

export default Garden