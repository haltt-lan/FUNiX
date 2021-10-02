import React, { Component, Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { connect } from 'react-redux';



const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => !(val) || (val.length >= len);
const isNumberPos = (val) => !(val) || (!isNaN(Number(val)) && Number(val) >= 0);
const isNumberHSL = (val) => !(val) || (!isNaN(Number(val)) && Number(val) >= 1 && Number(val) <= 3);

class ModalThemMoiRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,

        }
    }
    renderThemMoi = () => this.setState({ show: !this.state.show })

    submitThemMoi = (values) => {
        this.props.addStaff(values)
    }
    render() {
        return (
            <Fragment>
                <Button color="success" onClick={this.renderThemMoi}><i class="fa fa-user-plus" aria-hidden="true"></i></Button>
                <Modal isOpen={this.state.show} toggle={this.renderThemMoi} >
                    <ModalHeader toggle={this.renderThemMoi}>Thêm nhân viên</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.submitThemMoi(values)}>
                            <Row className="form-group mb-2">
                                <Label for="name" md={3} sm={12}>Tên</Label>
                                <Col md={9} sm={12}>
                                    <Control.text model=".name" id="name" name="name" className="form-control"
                                        validators={{
                                            required, minLength: minLength(2), maxLength: maxLength(30)
                                        }} />
                                    <Errors className="text-danger" model=".name" show="touched" messages={{
                                        required: "Bắt buộc nhập", minLength: "Yêu cầu nhiều hơn 2 kí tự", maxLength: "Yêu cầu ít hơn 30 kí tự"
                                    }} />
                                </Col>
                            </Row>

                            <Row className="form-group mb-2">
                                <Label for="doB" md={3} sm={12}>Ngày sinh</Label>
                                <Col md={9} sm={12}>
                                    <Control.text type="date" model=".doB" id="doB" name="doB" className="form-control"
                                        validators={{
                                            required
                                        }} />
                                    <Errors className="text-danger" model=".doB" show="touched" messages={{
                                        required: "bắt buộc"
                                    }} />
                                </Col>
                            </Row>
                            <Row className="form-group mb-2">
                                <Label for="date" md={3} sm={12}>Ngày vào công ty</Label>
                                <Col md={9} sm={12}>
                                    <Control.text type="date" model=".startDate" id="startDate" name="startDatee" className="form-control"
                                        validators={{
                                            required
                                        }} />
                                    <Errors className="text-danger" model=".startDate" show="touched" messages={{
                                        required: "bắt buộc"
                                    }} />
                                </Col>
                            </Row>
                            <Row className="form-group mb-2">
                                <Label for="department" md={3} sm={12}>Phòng ban</Label>
                                <Col md={9} sm={12}>
                                    <Control.select model=".department" id="department" name="department" className="form-control"
                                        validators={{
                                            required
                                        }}>
                                        <option value=''></option>
                                        <option value="Sale">Sale</option>
                                        <option value="HR">HR</option>
                                        <option value="Marketing">Marketing</option>
                                        <option value="IT">IT</option>
                                        <option value="Finance">Finance</option>
                                    </Control.select>
                                    <Errors className="text-danger" model=".department" show="touched" messages={{
                                        required: "bắt buộc"
                                    }} />
                                </Col>
                            </Row>
                            <Row className="form-group mb-2">
                                <Label for="salaryScale" md={3} sm={12}>Hệ số lương</Label>
                                <Col md={9} sm={12}>
                                    <Control.text type="number" model=".salaryScale" id="salaryScale" name="salaryScale" className="form-control"
                                        validators={{
                                            required, isNumberHSL
                                        }} />
                                    <Errors className="text-danger" model=".salaryScale" show="touched" messages={{
                                        required: "bắt buộc", isNumberHSL: "Phải nhập số trong khoảng từ 1 đến 3"
                                    }} />
                                </Col>
                            </Row>
                            <Row className="form-group mb-2">
                                <Label for="annualLeave" md={3} sm={12}>Số ngày nghỉ còn lại</Label>
                                <Col md={9} sm={12}>
                                    <Control.text type="number" model=".annualLeave" id="annualLeave" name="annualLeave" className="form-control"
                                        validators={{
                                            required, isNumberPos
                                        }} />
                                    <Errors className="text-danger" model=".annualLeave" show="touched" messages={{
                                        required: "bắt buộc", isNumberPos: "Phải nhập số > 0"
                                    }} />
                                </Col>
                            </Row>
                            <Row className="form-group mb-2">
                                <Label for="overTime" md={3} sm={12}>Số ngày đã làm thêm</Label>
                                <Col md={9} sm={12}>
                                    <Control.text type="number" model=".overTime" id="overTime" name="overTime" className="form-control"
                                        validators={{
                                            required, isNumberPos
                                        }} />
                                    <Errors className="text-danger" model=".overTime" show="touched" messages={{
                                        required: "bắt buộc", isNumberPos: "Phải nhập số > 0"
                                    }} />
                                </Col>
                            </Row>
                            <Col sm={12}>
                            <Button color="success" type="submit" style={{marginLeft:'30%',marginRight:'10px'}}>Thêm Mới</Button>{' '}
                            <Button color="danger" onClick={this.renderThemMoi}>Cancel</Button>
                           </Col>
                        </LocalForm>
                    </ModalBody>

                </Modal>
            </Fragment>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addStaff: (values) => {
           
            const action = {
                type: 'ADD_STAFF',
                values
            }
            dispatch(action)
        }
    }
}
export default connect(null, mapDispatchToProps)(ModalThemMoiRedux)