import React from 'react';

import { Link } from 'react-router-dom'

import PlantsList from '../garden/PlantsList'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Garden = () => {

    return (
        <Container fluid className="mt-4">
            <Row className="my-3 d-flex justify-content-between">
                <Col xs="auto">
                    <h1 className="text-success font-weight-bold" >Your Garden</h1>
                </Col>
                <Col xs="auto">
                    <Button variant="success"><Link className="text-white" to="/addplant">Add Plant</Link></Button>
                </Col>
            </Row>
            <Row className="border border-success rounded mx-2 pb-5 d-flex justify-content-center">
                <PlantsList />
            </Row>
        </Container>
    )
}

export default Garden