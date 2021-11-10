import React, { Fragment } from 'react';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Header from './Header';
import ModalChinhSua from './ModalChinhSua';

function ChiTietNhanVien(props) {
    const dep = props.departments.find(x => x.id === props.item.departmentId);
    const { item } = props;
    return item ? (
        <Fragment>
            <Header handleSearch={props.handleSearch} />
            <div className="container">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home' className='text-decoration-none'>Nhân viên</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to={`/home/${item.id}`} className='text-decoration-none'>{item.name}</Link></BreadcrumbItem>
                </Breadcrumb >
                <div className="row mt-3">
                    <div className='col-lg-3 col-md-4 col-12'>
                        <img src={item.image} alt="Alt" width={200} height={220} />
                    </div>
                    <div className='col-lg-9 col-md-8 col-12'>
                        <p style={{ fontSize: '18px' }}><b>Họ và tên : {item.name}</b></p>
                        <p>Ngày sinh : {dateFormat(item.doB, 'dd/mm/yyyy')}</p>
                        <p>Ngày vào công ty : {dateFormat(item.startDate, 'dd/mm/yyyy')}</p>
                        <p>Phòng ban : {dep.name}</p>
                        <p>Số ngày nghỉ còn lại : {item.annualLeave}</p>
                        <p>Số ngày đã làm thêm : {item.overTime}</p>
                        <ModalChinhSua id={item.id} 
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    ) : null
}

export default ChiTietNhanVien
