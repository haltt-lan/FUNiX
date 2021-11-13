import { baseUrl } from "./baseUrl";
//Thêm nhân viên

export const addStaff = (info) => ({
    type: "ADD_STAFF",
    payload: info
});
export const postStaff = (id, name, doB, startDate, department, salaryScale, annualLeave, overTime) => dispatch => {
    const basicSalary = 3000000;
    const overTimeSalary = 200000;
    const newStaff = {
        id: id,
        name: name,
        doB: doB,
        salaryScale: salaryScale,
        startDate: startDate,
        departmentId: department,
        annualLeave: annualLeave,
        overTime: overTime,
        image: "/asset/images/alberto.png",
        salary: (salaryScale * basicSalary) + (overTime * overTimeSalary)
    };
    return fetch(baseUrl + 'staffs', {
        method: "POST",
        body: JSON.stringify(newStaff),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
        .then(response => {
            if (response.ok) {
                return response
            } else {
                var error = new Error('Error' + response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(() => dispatch(addStaff(newStaff)))
        .catch(error => {
            console.log('post staff', error.message);
        });
};


//Lấy dữ liệu Tab Nhân viên
export const fetchList = () => (dispatch) => {
    dispatch(listLoading(true));
    return fetch(baseUrl + 'staffs')

        .then(response => {
            if (response.ok) { return response }
            else {
                var error = new Error('Error ' + response.status + ':' + response.statusText);
                error.response = response;
                console.log(error);
                throw error;
            }
        },
            error => {
                var errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(response => dispatch(addList(response)))
        .catch(response => dispatch(listFailed(response.message)));
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


//Xóa nhân viên
export const delStaff = (id) => ({
    type: "DELETE_STAFF",
    payload: id
});
export const deleteStaff = (id) => dispatch => {
    return fetch(baseUrl + 'staffs/' + id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })

        .then(response => {
            if (response.ok) { return response }
            else {
                var error = new Error('Error ' + response.status + ':' + response.statusText);
                error.response = response;
                console.log(error);
                throw error;
            }
        },
            error => {
                var errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(response => dispatch(delStaff(id)))
        .catch(error => { console.log('delete staff', error.message) });

}
//Chỉnh sửa thông tin nhân viên
export const editStaff = (newInfo) => ({
    type: "EDIT_STAFF",
    payload: newInfo

});
export const patchStaff = (newInfo) => dispatch => {
    const basicSalary = 3000000;
    const overTimeSalary = 200000;
    const newStaff = {
        id: newInfo.id,
        name: newInfo.name,
        doB: newInfo.doB,
        salaryScale: newInfo.salaryScale,
        startDate: newInfo.startDate,
        departmentId: newInfo.department,
        annualLeave: newInfo.annualLeave,
        overTime: newInfo.overTime,
        image: "/asset/images/alberto.png",
        salary: (newInfo.salaryScale * basicSalary) + (newInfo.overTime * overTimeSalary)
    };
    return fetch(baseUrl + 'staffs', {
        method: "PATCH",
        body: JSON.stringify(newStaff),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
        .then(response => {
            if (response.ok) {
                return response
            } else {
                var error = new Error('Error' + response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(response => dispatch(editStaff(response)))
        .catch(error => {
            console.log('edit staff', error.message);
        });
};



//Lấy dữ liệu Tab Phòng Ban
export const fetchDepartments = () => (dispatch) => {
    dispatch(depLoading(true));
    return fetch(baseUrl + 'departments')

        .then(response => {
            if (response.ok) { return response }
            else {
                var error = new Error('Error ' + response.status + ':' + response.statusText);
                error.response = response;
                console.log(error);
                throw error;
            }
        },
            error => {
                var errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(response => dispatch(addDepartments(response)))
        .catch(response => dispatch(depFailed(response.message)));
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

//Lấy dữ liệu Tab Bảng lương
export const fetchStaffSalary = () => (dispatch) => {
    dispatch(staffSalaryLoading(true));
    return fetch(baseUrl + 'staffsSalary')

        .then(response => {
            console.log('bbbbbbbbbbb', response)
            if (response.ok) { return response }
            else {
                var error = new Error('Error ' + response.status + ':' + response.statusText);
                error.response = response;
                console.log(error);
                throw error;
            }
        },
            error => {
                var errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(response => dispatch(addStaffSalary(response)))
        .catch(response => dispatch(staffSalaryFailed(response.message)));
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

//Lấy dữ liệu chi tiết nhân viên theo phòng ban
export const fetchDetaiDep = (id) => (dispatch) => {
    dispatch(detailDepLoading(true));
    return fetch(baseUrl + 'departments/' + id)

        .then(response => {
            // console.log('haaaa',response)
            if (response.ok) { return response }
            else {
                var error = new Error('Error ' + response.status + ':' + response.statusText);
                error.response = response;
                console.log(error);
                throw error;
            }
        },
            error => {
                var errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(response => dispatch(addDetailDep(response)))
        .catch(response => dispatch(detailDepFailed(response.message)));
};
export const detailDepLoading = () => ({
    type: "DETAILDEP_LOADING"
})
export const detailDepFailed = (errMess) => ({
    type: "DETAILDEP_FAILED",
    payload: errMess
});
export const addDetailDep = (detail) => ({
    type: "ADD_DETAILDEP",
    payload: detail
});