import axios from 'axios'
import { url } from '../../api'
import { toast } from 'react-toastify'

export const addPlant = (plant) => {
    return (dispatch) => {
        axios
            .post(`${url}/garden`, plant)
            .then(plant => {
                dispatch({
                    type: "ADD_PLANT",
                    plant
                })
            })
            .catch(error => {
                console.log('Updert Plant Error', error.response)
                toast.error(error.response?.data, {
                    position: toast.POSITION.BOTOM_RIGHT
                })
            })
    }
}

export const getPlants = () => {
    return (dispatch) => {
        axios
            .get(`${url}/garden`)
            .then(plants => {
                dispatch({
                    type: "GET_PLANTS",
                    plants
                })
            })
            .catch(error => {
                console.log('Updert Plant Error', error.response)
                toast.error(error.response?.data, {
                    position: toast.POSITION.BOTOM_RIGHT
                })
            })
    }
}

export const getPlant = (id) => {
    return (dispatch) => {
        axios
            .get(`${url}/garden/${id}`)
            .then(plant => {
                dispatch({
                    type: "GET_PLANT",
                    plant
                })
            })
            .catch(error => {
                console.log('Updert Plant Error', error.response)
                toast.error(error.response?.data, {
                    position: toast.POSITION.BOTOM_RIGHT
                })
            })
    }
}

export const updatePlant = (updatedPlant, id) => {
    return (dispatch) => {
        axios
            .put(`${url}/garden/${id}`, updatedPlant)
            .then(plant => {
                dispatch({
                    type: "UPDATE_PLANT",
                    plant
                })
            })
            .catch(error => {
                console.log('Updert Plant Error', error.response)
                toast.error(error.response?.data, {
                    position: toast.POSITION.BOTOM_RIGHT
                })
            })
    }
}


