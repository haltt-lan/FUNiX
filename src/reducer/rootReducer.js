import { combineReducers } from "redux";
// import {DataReducer} from './DataReducer';
import {Staffs} from './staffs';
import { Departments } from "./departments";
import { StaffSalary } from "./staffSalary";



 export const rootReducer = combineReducers  ({
     list: Staffs,
     departments: Departments,
     staffSalary: StaffSalary
 })
