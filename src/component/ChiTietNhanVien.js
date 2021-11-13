import React, { Fragment, Component } from 'react';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Header from './Header';
import ModalChinhSua from './ModalChinhSua';

class ChiTietNhanVien extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            staff: this.props.item
        }
    }
    renderEdit = () => {
        this.setState({ show: !this.state.show })
    }
    renderChangeStaff = (staffEdit) => {
        this.setState({
            staff: staffEdit
        })
    }

    render() {
        const dep = this.props.departments.find(x => x.id === this.props.item.departmentId);
        const { item } = this.props;
        return item ? (
            <Fragment>
                <Header handleSearch={this.props.handleSearch} />
                <div className="container">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home' className='text-decoration-none'>Nhân viên</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to={`/home/${this.state.staff.id}`} className='text-decoration-none'>{this.state.staff.name}</Link></BreadcrumbItem>
                    </Breadcrumb >
                    <div className="row mt-3">
                        <div className='col-lg-3 col-md-4 col-12'>
                            <img src={this.state.staff.image} alt="Alt" width={200} height={220} />
                        </div>
                        <div className='col-lg-9 col-md-8 col-12'>
                            <p style={{ fontSize: '18px' }}><b>Họ và tên : {this.state.staff.name}</b></p>
                            <p>Ngày sinh : {dateFormat(this.state.staff.doB, 'dd/mm/yyyy')}</p>
                            <p>Ngày vào công ty : {dateFormat(this.state.staff.startDate, 'dd/mm/yyyy')}</p>
                            <p>Phòng ban : {dep.name}</p>
                            <p>Số ngày nghỉ còn lại : {this.state.staff.annualLeave}</p>
                            <p>Số ngày đã làm thêm : {this.state.staff.overTime}</p>
                            <ModalChinhSua staff={this.state.staff} renderEdit={this.renderEdit} show={this.state.show}
                                renderChangeStaff={this.renderChangeStaff}
                            />
                        </div>
                    </div>
                </div>
            </Fragment>
        ) : null
    }
}



export default ChiTietNhanVien
