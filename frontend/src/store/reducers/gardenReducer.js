const gardenReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_PLANT":
            return [action.data.plant, ...state]
        default:
            return state
    }
}

export default gardenReducer