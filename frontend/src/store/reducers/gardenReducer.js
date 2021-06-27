import { toast } from 'react-toastify'

const gardenReducer = (state = [], action) => {
    switch (action.type) {
        case "GET_PLANTS":
            return action.plants.data
        case "GET_PLANT":
            return action.plant.data
        case "ADD_PLANT":
            toast.success("Plant Added!", {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            return [...state, action.plant.data]
        case "UPDATE_PLANT":
            toast.success("Plant Updated!", {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            return state.map((plant) => (
                plant._id === action.plant.data._id ? action.plant.data : plant
            ))
        case "DELETE_PLANT":
            toast.warning("Plant Deleted.", {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            return state.filter((plant) => plant._id !== action.id)
        default:
            return state
    }
}

export default gardenReducer