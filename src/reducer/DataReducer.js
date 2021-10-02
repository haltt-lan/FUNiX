// Khởi tạo giá trị ban đầu
import { STAFFS, DEPARTMENTS } from '../component/staffs';



const initialState = {
    list: STAFFS,
    departments: DEPARTMENTS,
    arrSearch: [],
    item: {}
}
export const DataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'handle_Search':{
            const {keyword} =action;
            console.log(keyword);
            let arrSearchNew = [...state.arrSearch];
            arrSearchNew = state.list.filter(data => data.name.toLowerCase().includes(keyword.toLowerCase()))
            state.arrSearch = arrSearchNew;
            return { ...state }
        }
            

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
            return { ...state }
        }
        default : {}


    }

    // const StaffWithId = ({ match }) => {
    //     const staff = this.state.list.find(x => x.id === parseInt(match.params.id))
    //     return <DetailStaff item={staff} handleSearch={this.handleSearch} />
    //   }


    return { ...state }
}