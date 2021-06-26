import { toast } from 'react-toastify'

const gardenReducer = (state = [], action) => {
    switch (action.type) {
        case "GET_PLANTS":
            return action.plants.data
        case "GET_PLANT":
            return action.plant.data
        case "ADD_PLANT":
            toast.success("A plant was added!", {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            return [action.plant.data, ...state]
        case "UPDATE_PLANT":
            toast.success("A plant was updated!", {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            return state.map((plant) => (
                plant._id === action.plant.data._id ? action.plant.data : plant
            ))
        default:
            return state
    }
}

export default gardenReducer