
export const Departments= (state={
    isLoading: true, 
    errMess: null,
    departments:[]
}, action) => {
switch(action.type){
    case "ADD_DEPARTMENTS" :
        return {...state, isLoading:false, errMess: null, departments: action.payload}
    case "DEPARTMENTS_LOADING":
        return {...state, isLoading: true, errMess: null, departments:[]}
    case "DEPARTMENTS_FAILED":
        return {...state, isLoading:false, errMess: action.payload}
    default:
        return state
}
}