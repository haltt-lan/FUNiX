
var findIndex = (state, id) => {
    var result;
    state.list.forEach((staff, index) => {
        if (staff.id === id) {
            result = index
        }
    });
    return result;
}


export const Staffs = (state = {
    isLoading: true,
    errMess: null,
    list: []
}, action) => {
    switch (action.type) {
        case "ADD_STAFF":
            var staff = action.payload;
            return { ...state, list: state.list.concat(staff) }
        case "DELETE_STAFF":
            console.log('delete_staff', action.payload);
            var index = findIndex(state,action.payload.id);
            console.log('id',action.payload.id)
            state.splice(index, 1);
            return {...state}
        case "ADD_LIST":
            return { ...state, isLoading: false, errMess: null, list: action.payload }
        case "LIST_LOADING":
            return { ...state, isLoading: true, errMess: null, list: [] }
        case "LIST_FAILED":
            return { ...state, isLoading: false, errMess: action.payload }
        default:
            return state
    }
}