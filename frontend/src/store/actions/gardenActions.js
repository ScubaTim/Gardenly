import axios from 'axios'
import { url } from '../../api'

export const addPlant = (plant) => {
    return (dispatch, getState) => {
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

