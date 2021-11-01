import { STAFFS, DEPARTMENTS } from '../component/staffs';

// Khởi tạo giá trị ban đầu
const initialState = {
    list: STAFFS,
    departments: DEPARTMENTS,
    arrSearch: [],
    item: {}
}
export const DataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_STAFF': {
            const { values } = action;
            const renderDep = (item) => {
                let dep = '';
                switch (item) {
                    case 'Sale':
                        dep = state.departments[0];
                        break;
                    case 'HR':
                        dep = state.departments[1];
                        break;
                    case 'Marketing':
                        dep = state.departments[2];
                        break;
                    case 'IT':
                        dep = state.departments[3];
                        break;
                    case 'Finance':
                        dep =state.departments[4];
                        break;
                    default: dep = '';
                }
                return dep;
            }
            const newStaff = {
                id: state.list.length,
                name: values.name,
                doB: values.doB,
                salaryScale: values.salaryScale,
                startDate: values.startDate,
                department: renderDep(values.department),
                annualLeave: values.annualLeave,
                overTime: values.overTime,
                image: '/assets/images/alberto.png',
            }


            let newList = [...state.list];
            console.log('ADD_STAFF', newStaff)
            console.log(values);
            newList.push(newStaff);
            state.list = newList;
            return state
        }
        default : {}
    }

    return state
}