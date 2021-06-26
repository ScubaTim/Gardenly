import axios from 'axios'
import { url, setHeaders } from '../../api'
import { toast } from 'react-toastify'

export const addPlant = (plant) => {
    return (dispatch, getState) => {
        const author = getState().auth.name
        const uid = getState().auth._id

        axios
            .post(`${url}/garden`, { ...plant, author, uid }, setHeaders())
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
            .get(`${url}/garden`, setHeaders())
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
            .put(`${url}/garden/${id}`, updatedPlant, setHeaders())
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

export const deletePlant = (id) => {
    return (dispatch) => {
        axios
            .delete(`${url}/garden/${id}`, setHeaders())
            .then(() => {
                dispatch({
                    type: "DELETE_PLANT",
                    id
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


