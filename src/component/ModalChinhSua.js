import React, { Component, Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { connect } from 'react-redux';
import { patchStaff } from '../reducer/ActionCreators';



const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => !(val) || (val.length >= len);
const isNumberPos = (val) => !(val) || (!isNaN(Number(val)) && Number(val) >= 0);
const isNumberHSL = (val) => !(val) || (!isNaN(Number(val)) && Number(val) >= 1 && Number(val) <= 3);


class ModalEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            newInfo: {
                id:this.props.id,
                name:this.props.name,
                doB:this.props.doB,
                startDate:this.props.startDate,
                department: this.props.department,
                salaryScale:this.props.salaryScale,
                annualLeave:this.props.annualLeave,
                overTime: this.props.overTime
            }
        }
    }
    renderEdit = () => this.setState({ show: !this.state.show })

    submitEdit = (values) => {
        console.log('values',values);
        this.setState({
            newInfo:{
                name:values.name,
                doB:values.doB,
                startDate: values.startDate,
                department: values.department,
                salaryScale:values.salaryScale,
                annualLeave:values.annualLeave,
                overTime: values.overTime
            }
        },()=>{
            console.log('new',this.state.newInfo);
            this.props.patchStaff(this.state.newInfo);
        })
        
    }
    render() {
        return (
            <Fragment>
                <Button color="success" onClick={this.renderEdit}><i class="fa fa-pencil-square-o" aria-hidden="true"> Chỉnh sửa</i></Button>
                <Modal isOpen={this.state.show} toggle={this.renderEdit} >
                    <ModalHeader toggle={this.renderEdit}>Sửa thông tin nhân viên</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.submitEdit(values)}>
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
                                        <option value=""></option>
                                        <option value="Dept01">Sale</option>
                                        <option value="Dept02">HR</option>
                                        <option value="Dept03">Marketing</option>
                                        <option value="Dept04">IT</option>
                                        <option value="Dept05">Finance</option>
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
                            <Button color="success" type="submit" style={{marginLeft:'30%',marginRight:'10px'}}>Chỉnh sửa</Button>{' '}
                            <Button color="danger" onClick={this.renderEdit}>Cancel</Button>
                           </Col>
                        </LocalForm>
                    </ModalBody>

                </Modal>
            </Fragment>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    patchStaff:(newInfo)=>{dispatch(patchStaff(newInfo))},
})
export default connect(null, mapDispatchToProps)(ModalEdit)