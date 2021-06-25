const gardenReducer = (state = [], action) => {
    switch (action.type) {
        case "GET_PLANTS":
            return action.plants.data
        case "ADD_PLANT":
            return [action.plant.data, ...state]
        default:
            return state
    }
}

export default gardenReducer