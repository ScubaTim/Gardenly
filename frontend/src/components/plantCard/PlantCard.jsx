import React from 'react'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const PlantCard = () => {
    return (
        <Card className="shadow m-4">
            <Card.Header className="d-flex justify-content-between font-weight-bold p-1"><Button variant="link">&#10004;</Button><Button variant="link" className="text-dark font-weight-bold" size="lg" >X</Button></Card.Header>
            <Card.Body className="text-center">
                <Card.Title>Plant Name</Card.Title>
                <div className="mb-3 rounded" style={{ width: "180px", height: "100px", backgroundColor: "mediumSeaGreen" }}></div>
                <Card.Text>
                    Basic Plant Info
                </Card.Text>
                <Button block variant="success"><Link className="text-white" to="/plantdetail">Details</Link></Button>
            </Card.Body>
        </Card>
    )
}

export default PlantCard