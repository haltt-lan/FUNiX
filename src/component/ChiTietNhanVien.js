import React, { Fragment, Component } from 'react';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Header from './Header';
import ModalChinhSua from './ModalChinhSua';
import { connect } from 'react-redux';

class ChiTietNhanVien extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    renderEdit = () => {
        this.setState({ show: !this.state.show })
    }
    render() {
        const staff= this.props.list.list.find(x => x.id === this.props.idStaff);
        return staff ? (
            <Fragment>
                <Header handleSearch={this.props.handleSearch} />
                <div className="container">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home' className='text-decoration-none'>Nhân viên</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to={`/home/${staff.id}`} className='text-decoration-none'>{staff.name}</Link></BreadcrumbItem>
                    </Breadcrumb >
                    <div className="row mt-3">
                        <div className='col-lg-3 col-md-4 col-12'>
                            <img src={staff.image} alt="Alt" width={200} height={220} />
                        </div>
                        <div className='col-lg-9 col-md-8 col-12'>
                            <p style={{ fontSize: '18px' }}><b>Họ và tên : {staff.name}</b></p>
                            <p>Ngày sinh : {dateFormat(staff.doB, 'dd/mm/yyyy')}</p>
                            <p>Ngày vào công ty : {dateFormat(staff.startDate, 'dd/mm/yyyy')}</p>
                            <p>Phòng ban : {this.props.departments.departments.find(x => x.id === staff.departmentId).name}</p>
                            <p>Số ngày nghỉ còn lại : {staff.annualLeave}</p>
                            <p>Số ngày đã làm thêm : {staff.overTime}</p>
                            <ModalChinhSua staff={staff} renderEdit={this.renderEdit} show={this.state.show}
                                renderChangeStaff={this.renderChangeStaff}
                            />
                        </div>
                    </div>
                </div>
            </Fragment>
        ) : null
    }
}
const mapStateToProps = (state) => {
    return {
      list: state.list,
      departments: state.departments
    }
  }
export default connect(mapStateToProps,null)(ChiTietNhanVien)
