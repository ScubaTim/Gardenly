import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux'

import { Redirect } from 'react-router-dom'

import { getPlants, updatePlant } from '../../store/actions/gardenActions'

import PlantCard from './PlantCard'

import Col from 'react-bootstrap/Col'

const PlantsList = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)

    useEffect(() => {
        dispatch(getPlants())
    }, [dispatch])

    if (!state.auth._id) return <Redirect to="/signin" />

    return (
        <>
            {state.garden.length === 0
                ? <div className="text-center"><h2 className="my-5 text-muted font-weight-light">Your garden is empty..</h2><h2 className="my-5 text-muted font-weight-light">Add Some Plants!</h2></div>
                : state.garden.map((plant) => (
                    <Col xs="auto" key={plant._id}>
                        <PlantCard
                            plant={plant}
                            updatePlant={updatePlant}
                        />
                    </Col>
                ))
            }
        </>
    )
}

export default PlantsList