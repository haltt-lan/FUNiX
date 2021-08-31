import React, { Component } from 'react';
import { STAFFS } from "../component/staffs";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Header';
import dateFormat from 'dateformat';


export default class StaffListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: STAFFS,
            col: 'col-lg-4 col-md-6 col-sm-12',
            selected: 'Bấm vào tên nhân viên để xem thông tin chi tiết'
        }
    }
    changeCol = (col) => {
        let changeColumn = '';
        switch (col) {
            case '2':
                changeColumn = 'col-6';
                break;

            case '3':
                changeColumn = 'col-4';
                break;
            case '6':
                changeColumn = 'col-2';
                break;
            default:
                changeColumn = 'col-lg-4 col-md-6 col-sm-12'
        }
        this.setState({
            col: changeColumn
        })
    }



    renderList = () => {
        return this.state.list.map((item, index) => {
            return (
                <div className={this.state.col} onClick={() => this.itemSelected(item)}>
                    <div className="bg-light p-2 m-1 text-center">
                        {item.name}
                    </div>
                </div>)
        })
    }
    itemSelected = (item) => {
        this.setState({
            selected: item
        })
    }
    renderItemSelected = (item) => {
        if (item !== 'Bấm vào tên nhân viên để xem thông tin chi tiết') {
            return (
                <table className="table table-bordered">
                    <tr>
                        <th className="text-primary">Họ và tên :</th>
                        <td>{item.name}</td>
                    </tr>
                    <tr>
                        <th className="text-primary">Ngày sinh :</th>
                        <td>{dateFormat(item.doB, 'dd/mm/yyyy')}</td>
                    </tr>
                    <tr>
                        <th className="text-primary">Ngày vào công ty :</th>
                        <td>{dateFormat(item.startDate, 'dd/mm/yyyy')}</td>
                    </tr>
                    <tr>
                        <th className="text-primary">Phòng ban :</th>
                        <td>{item.department.name}</td>
                    </tr>
                    <tr>
                        <th className="text-primary">Số ngày nghỉ còn lại :</th>
                        <td>{item.annualLeave}</td>
                    </tr>
                    <tr>
                        <th className="text-primary">Số ngày đã làm thêm :</th>
                        <td>{item.overTime}</td>
                    </tr>
                </table>


            )
        }
        return (<div className="text-primary"><i>{this.state.selected}</i></div>)
    }


    render() {
        const styleTable = {
            marginRight: '20%',
            marginLeft: '20%',
            marginTop: '20px',
        }
        const styleButton = {
            marginRight: '10px'
        }
        return (
            <div>
                <Header />
                <div className="mt-2">
                    <button type="button" className="btn btn-warning" style={styleButton} onClick={() => this.changeCol('rest')}>Chế độ hiển thị </button>
                    <button type="button" className="btn btn-secondary" style={styleButton} onClick={() => this.changeCol('2')}>2 cột</button>
                    <button type="button" className="btn btn-secondary" style={styleButton} onClick={() => this.changeCol('3')}>3 cột</button>
                    <button type="button" className="btn btn-secondary" style={styleButton} onClick={() => this.changeCol('6')}>6 cột</button>
                </div>
                <div className="row">
                    <h2 className="text-center">DANH SÁCH NHÂN VIÊN</h2>
                    {this.renderList()}
                </div>


                <div className="container">
                    <div style={styleTable}>
                        {this.renderItemSelected(this.state.selected)}
                    </div>


                </div>


            </div>
        )
    }
}
