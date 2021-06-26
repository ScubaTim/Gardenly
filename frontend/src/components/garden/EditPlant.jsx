import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux'

import { useParams, useHistory } from 'react-router-dom'

import ToggleButton from "react-bootstrap/ToggleButton";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { getPlant, updatePlant } from '../../store/actions/gardenActions'

const EditPlant = () => {
    let history = useHistory()
    const dispatch = useDispatch(getPlant())
    const state = useSelector((state) => state.garden)
    const { id } = useParams()

    const plant = state.filter((plant) => plant._id === id)

    const [name, setName] = useState(plant[0]?.name)
    const [checked, setChecked] = useState(plant[0]?.isInGarden)
    const [growingZone, setGrowingZone] = useState(plant[0]?.growingZone)
    const [seedDepth, setSeedDepth] = useState(plant[0]?.seedDepth)
    const [soilType, setSoilType] = useState(plant[0]?.soilType)
    const [sunlight, setSunlight] = useState(plant[0]?.sunlight)
    const [harvestIn, setHarvestIn] = useState(plant[0]?.harvestIn)
    const [watering, setWatering] = useState(plant[0]?.watering)
    const [fromSeed, setFromSeed] = useState(plant[0]?.fromSeed)
    const [heirloom, setHeirloom] = useState(plant[0]?.heirloom)
    const [imageUrl, setImageUrl] = useState(plant[0]?.image)


    const handleUpdateSubmit = (e) => {
        e.preventDefault()

        let updatedPlant = {
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

        dispatch(updatePlant(updatedPlant, id))
        history.push('/')
    }

    return (
        <Container fluid className="d-flex flex-column">
            <div className="mt-3 mx-3">
                <h1>Edit Plant Details</h1>
            </div>
            <Form className="border rounded p-4 m-3 shadow" onSubmit={handleUpdateSubmit} >
                <Row className="mb-3">
                    <Form.Group controlid="plant-name" as={Col} >
                        <Form.Label>Plant Name</Form.Label>
                        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group constrolId="heirloom" as={Col}>
                        <Form.Label>Heirloom</Form.Label>
                        <Form.Control as="select" defaultValue={heirloom} onChange={(e) => setHeirloom(e.target.value)}>
                            <option>Yes</option>
                            <option>No</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlid="from-seed" as={Col} >
                        <Form.Label>From Seed</Form.Label>
                        <Form.Control as="select" defaultValue={fromSeed} onChange={(e) => setFromSeed(e.target.value)}>
                            <option>Yes</option>
                            <option>No</option>
                        </Form.Control>
                    </Form.Group>
                </Row>

                <Row className="my-3">
                    <Form.Group controlid="growing-zone" as={Col} >
                        <Form.Label>Growing Zone</Form.Label>
                        <Form.Control as="select" defaultValue={growingZone} onChange={(e) => setGrowingZone(e.target.value)}>
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

                    <Form.Group controlid="seed-depth" as={Col}>
                        <Form.Label>Seed Depth (Inches)</Form.Label>
                        <Form.Control onChange={(e) => setSeedDepth(e.target.value)} defaultValue={seedDepth} />
                    </Form.Group>

                    <Form.Group controlid="soil-type" as={Col}>
                        <Form.Label>Soil Type</Form.Label>
                        <Form.Control as="select" defaultValue={soilType} onChange={(e) => setSoilType(e.target.value)}>
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
                    <Form.Group as={Col} controlid="formGridCity">
                        <Form.Label>Sunlight</Form.Label>
                        <Form.Control as="select" defaultValue={sunlight} onChange={(e) => setSunlight(e.target.value)}>
                            <option>Shade</option>
                            <option>Dappled</option>
                            <option>Full Sun</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlid="harvest-in" as={Col}>
                        <Form.Label>Harvest In (Days)</Form.Label>
                        <Form.Control defaultValue={harvestIn} onChange={(e) => setHarvestIn(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlid="watering-frequency" as={Col}>
                        <Form.Label>Watering Frequency</Form.Label>
                        <Form.Control as="select" defaultValue={watering} onChange={(e) => setWatering(e.target.value)}>
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
                    <Form.Group controlid="image" as={Col} >
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
                        <Form.Group controlid="currently-planted" className="pl-0" as={Col}>
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

export default EditPlant