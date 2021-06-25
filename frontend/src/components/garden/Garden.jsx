import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import { getPlants } from '../../store/actions/gardenActions'

import PlantCard from '../plantCard/PlantCard'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Garden = () => {
    const dispatch = useDispatch(getPlants())
    const garden = useSelector((state) => state.garden)

    useEffect(() => {
        dispatch(getPlants())
    }, [dispatch])



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
                {garden.length === 0
                    ? <h4>Your garden is empty. Add some plants!</h4>
                    : garden.map((plant) => (
                        <Col xs="auto">
                            <PlantCard
                                name={plant.name}
                                date={plant.date}
                                author={plant.author}
                                key={plant._id}
                            />
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}

export default Garden