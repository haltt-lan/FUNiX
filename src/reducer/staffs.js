export const Staffs= (state={
    isLoading: true, 
    errMess: null,
    list:[]
}, action) => {
switch(action.type){
    case "ADD_LIST" :
        return {...state, isLoading:false, errMess: null, list: action.payload}
    case "LIST_LOADING":
        return {...state, isLoading: true, errMess: null, list:[]}
    case "LIST_FAILED":
        return {...state, isLoading:false, errMess: action.payload}
    default:
        return state
}
}