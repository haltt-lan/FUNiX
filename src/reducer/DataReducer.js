// Khởi tạo giá trị ban đầu
import { STAFFS, DEPARTMENTS } from '../component/staffs';



const initialState = {
    list: STAFFS,
    departments: DEPARTMENTS,
    arrSearch: []
}
export const DataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'handle_Search':
            console.log(action.keyword);
            let arrSearchNew = [...state.arrSearch];
            arrSearchNew = state.list.filter(data => data.name.toLowerCase().includes(action.keyword.toLowerCase()))
            state.arrSearch = arrSearchNew;
            return { ...state }



    }
    // addStaff = (myobj) => {
    //     let newList= [...this.state.list];
    //     newList.push(myobj)
    //     console.log(newList)

    //     this.setState({
    //       list: newList
    //     })

    //   }


    // const StaffWithId = ({ match }) => {
    //     const staff = this.state.list.find(x => x.id === parseInt(match.params.id))
    //     return <DetailStaff item={staff} handleSearch={this.handleSearch} />
    //   }


    return { ...state }
}