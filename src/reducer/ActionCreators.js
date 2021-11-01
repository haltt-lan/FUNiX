import { baseUrl } from "./baseUrl";


export const fetchList =()=> (dispatch) => {
    dispatch (listLoading(true));
    return fetch(baseUrl+'staffs')

    .then (response => {
        if(response.ok){ return response}
        else {
            var error = new Error('Error ' + response.status + ':' + response.statusText);
            error.response = response;
            console.log(error);
            throw error;
        }},
    error => {
        var errMess = new Error (error.message);
        throw errMess;
    }
    )
    .then (response => response.json())
    .then (response => dispatch (addList(response)))
    .catch (response => dispatch(listFailed(response.message)));
};
export const listLoading = () => ({
    type: "LIST_LOADING"
});
export const listFailed = (errMess) => ({
    type: "LIST_FAILED",
    payload: errMess
});
export const addList = (list) => ({
    type: "ADD_LIST",
    payload: list
});

export const fetchDepartments =()=> (dispatch) => {
    dispatch (depLoading(true));
    return fetch(baseUrl+'departments')

    .then (response => {
        if(response.ok){ return response}
        else {
            var error = new Error('Error ' + response.status + ':' + response.statusText);
            error.response = response;
            console.log(error);
            throw error;
        }},
    error => {
        var errMess = new Error (error.message);
        throw errMess;
    }
    )
    .then (response => response.json())
    .then (response => dispatch (addDepartments(response)))
    .catch (response => dispatch(depFailed(response.message)));
};
export const depLoading = () => ({
    type: "DEPARTMENTS_LOADING"
});
export const depFailed = (errMess) => ({
    type: "DEPARTMENTS_FAILED",
    payload: errMess
});
export const addDepartments = (departments) => ({
    type: "ADD_DEPARTMENTS",
    payload: departments
});


export const fetchStaffSalary =()=> (dispatch) => {
    dispatch (staffSalaryLoading(true));
    return fetch(baseUrl+'staffsSalary')

    .then (response => {
        if(response.ok){ return response}
        else {
            var error = new Error('Error ' + response.status + ':' + response.statusText);
            error.response = response;
            console.log(error);
            throw error;
        }},
    error => {
        var errMess = new Error (error.message);
        throw errMess;
    }
    )
    .then (response => response.json())
    .then (response => dispatch (addStaffSalary(response)))
    .catch (response => dispatch(staffSalaryFailed(response.message)));
};
export const staffSalaryLoading = () => ({
    type: "STAFFSALARY_LOADING"
});
export const staffSalaryFailed = (errMess) => ({
    type: "STAFFSALARY_FAILED",
    payload: errMess
});
export const addStaffSalary = (staffsalary) => ({
    type: "ADD_STAFFSALARY",
    payload: staffsalary
});