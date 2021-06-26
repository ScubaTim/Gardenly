import React, { useState } from 'react';

import { useDispatch } from 'react-redux'

import { useHistory } from 'react-router-dom'

import ToggleButton from "react-bootstrap/ToggleButton";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { addPlant } from '../../store/actions/gardenActions'
//I was adding images, and destructured a bunch of other stuff on backend i think
const AddPlant = () => {
    let history = useHistory()
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [checked, setChecked] = useState(false);
    const [growingZone, setGrowingZone] = useState("1")
    const [seedDepth, setSeedDepth] = useState("0")
    const [soilType, setSoilType] = useState("Sandy")
    const [sunlight, setSunlight] = useState("Shade")
    const [harvestIn, setHarvestIn] = useState("0")
    const [watering, setWatering] = useState("Twice Daily")
    const [fromSeed, setFromSeed] = useState("No")
    const [heirloom, setHeirloom] = useState("No")
    const [imageUrl, setImageUrl] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        let plant = {
            name,
            isInGarden: checked,
            growingZone,
            seedDepth,
            soilType,
            sunlight,
            harvestIn,
            watering,
            fromSeed,
            heirloom,
            image: imageUrl
        }

        dispatch(addPlant(plant))
        history.push("/");
    }

    return (
        <Container fluid className=" mt-3 d-flex flex-column">
            <div className="mt-3 mx-3">
                <h1>Add New Plant</h1>
            </div>
            <Form className="border rounded p-4 m-3 shadow" onSubmit={handleSubmit} >
                <Row className="mb-3">
                    <Form.Group as={Col} >
                        <Form.Label>Plant Name</Form.Label>
                        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Heirloom</Form.Label>
                        <Form.Control as="select" defaultValue="Yes" onChange={(e) => setHeirloom(e.target.value)}>
                            <option>Yes</option>
                            <option>No</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Label>From Seed</Form.Label>
                        <Form.Control as="select" defaultValue="Yes" onChange={(e) => setFromSeed(e.target.value)}>
                            <option>Yes</option>
                            <option>No</option>
                        </Form.Control>
                    </Form.Group>
                </Row>

                <Row className="my-3">
                    <Form.Group as={Col} >
                        <Form.Label>Growing Zone</Form.Label>
                        <Form.Control as="select" defaultValue="1" onChange={(e) => setGrowingZone(e.target.value)}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Seed Depth (Inches)</Form.Label>
                        <Form.Control onChange={(e) => setSeedDepth(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Soil Type</Form.Label>
                        <Form.Control as="select" defaultValue="Sandy" onChange={(e) => setSoilType(e.target.value)}>
                            <option>Sandy</option>
                            <option>Silty</option>
                            <option>Arid</option>
                            <option>Rocky</option>
                            <option>Clay</option>
                            <option>Fertile</option>
                        </Form.Control>
                    </Form.Group>
                </Row>

                <Row className="my-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Sunlight</Form.Label>
                        <Form.Control as="select" defaultValue="Shade" onChange={(e) => setSunlight(e.target.value)}>
                            <option>Shade</option>
                            <option>Dappled</option>
                            <option>Full Sun</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Harvest In (Days)</Form.Label>
                        <Form.Control onChange={(e) => setHarvestIn(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Watering Frequency</Form.Label>
                        <Form.Control as="select" defaultValue="Twice Daily" onChange={(e) => setWatering(e.target.value)}>
                            <option>Twice Daily</option>
                            <option>Daily</option>
                            <option>Every Other Day</option>
                            <option>Weekly</option>
                            <option>Monthly</option>
                            <option>When Dry</option>
                        </Form.Control>
                    </Form.Group>
                </Row>

                <Row className="my-3">
                    <Form.Group as={Col} >
                        <Row>
                            <Col>
                                <Form.Label>Image</Form.Label>
                            </Col>
                            <Col xs="auto">
                                <span className="text-muted font-weight-light font-italic text-right">Paste image url here. We recommend using a free image hosting service like <strong><a href="https://postimages.org/" target="_blank" rel="noopener noreferrer">PostImages</a></strong></span>
                            </Col>
                        </Row>
                        <Form.Control type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Enter image url" />
                    </Form.Group>
                </Row>

                <Row className="d-flex justify-content-between">
                    <Col xs="auto" >
                        <Form.Group className="pl-0" as={Col}>
                            <Form.Label><strong>Currently planted?</strong>&nbsp;&nbsp;</Form.Label>
                            <ToggleButton
                                type="checkbox"
                                checked={checked}
                                value="1"
                                onChange={(e) => setChecked(e.currentTarget.checked)}
                                className="mt-1"
                                style={{ backgroundColor: "inherit", padding: "0", border: "none" }}
                            />
                        </Form.Group>
                    </Col>
                    <Col xs="auto">
                        <Button variant="primary" type="submit" size="lg">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default AddPlant