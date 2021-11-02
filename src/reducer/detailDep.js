
export const DetailDep= (state={
    isLoading:true,
    errMess: null,
    detailDep:[]
}, action) => {
switch(action.type){
    case "DETAILDEP_LOADING":
        return {...state, isLoading: true, errMess: null, detailDep:[]}
    case "ADD_DETAILDEP" :
        return {...state, isLoading:false, errMess: null, detailDep: action.payload}
    case "DETAILDEP_FAILED":
        return {...state, isLoading:false, errMess: action.payload}
    default:
        return state
}
}