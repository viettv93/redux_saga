const initialState = {
    value: 0
}
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Increase_Action':
            const rs = { ...state, value: action.value + state.value }
           return rs

        case 'Decrease_Action':
            return { ...state, value: state.value - action.value }
        default:
            return state
    }

}
export default Reducer