import React from 'react';

import PlantCard from '../plantCard/PlantCard'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Garden = () => {
    return (
        <>
            <Row className="my-4">
                <Col>
                    <h4>Your Garden</h4>
                </Col>
            </Row>
            <Row className="border border-success rounded mx-2 pb-5 d-flex justify-content-center">
                <Col xs="auto">
                    <PlantCard />
                </Col>
            </Row>
        </>
    )
}

export default Garden