
export const StaffSalary= (state={
    isLoading: true, 
    errMess: null,
    staffSalary:[]
}, action) => {
switch(action.type){
    case "ADD_STAFFSALARY" :
        return {...state, isLoading:false, errMess: null, staffSalary: action.payload}
    case "STAFFSALARY_LOADING":
        return {...state, isLoading: true, errMess: null, staffSalary:[]}
    case "STAFFSALARY_FAILED":
        return {...state, isLoading:false, errMess: action.payload}
    default:
        return state
}
}