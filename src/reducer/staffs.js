
var findIndex = (state, id) => {
    var result;
    state.list.forEach((staff, index) => {
        if (staff.id === id) {
            result = index
        }
        console.log('result:', result);
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
            var staff = action.payload;    //payload trả về object
            return { ...state,list:state.list.concat(staff)}
        case "DELETE_STAFF":
            var id = action.payload;
            var index = findIndex(state, id);
            console.log('id', id);
            state.list.splice(index, 1);
            return {...state }
        case "EDIT_STAFF":
            return { ...state, list:action.payload } //payload trả về array
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