import axios from 'axios'
import { url } from '../../api'

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
            .catch(error => console.log(error.response))
    }
}

export const getPlants = () => {
    return (dispatch) => {
        axios.get(`${url}/garden`)
            .then(plants => {
                dispatch({
                    type: "GET_PLANTS",
                    plants
                })
            })
            .catch(error => console.log(error.response))
    }
}


