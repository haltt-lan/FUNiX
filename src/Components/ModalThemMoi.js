import React, { Component, Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Col } from 'reactstrap';

export default class ModalThemMoi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            themMoi: {
                id: '',
                name: '',
                doB: '',
                salaryScale: '',
                startDate: '',
                department: '',
                annualLeave: '',
                overTime: '',
                image: '/assets/images/alberto.png',
            },
            errors: {
                name: '',
                doB: '',
                salaryScale: '',
                startDate: '',
                department: '',
                annualLeave: '',
                overTime: '',
            }
        }
    }
    renderThemMoi = () => this.setState({ show: !this.state.show });


    handleThemMoi = (event) => {
        let { name, value } = event.target;
        let idNewStaff = this.props.list.length;
        let newerror = { ...this.state.errors };
        if (value === '') {
            newerror[name] = 'Không được bỏ trống'
        } else { newerror[name] = '' }
        if (name === 'name') {
            if (value.length <= 2) {
                newerror[name] = "Yêu cầu nhập trên 2 kí tự"
            }
            if (value.length > 30) {
                newerror[name] = 'Yêu cầu nhập dưới 30 kí tự'
            }
        }
        if (name === 'salaryScale') {
            if ((value < 1 || value > 3) && value !== '') {
                newerror[name] = 'Yêu cầu nhập trong khoảng 1-3'
            }
        }
        if (name === 'annualLeave' || name === 'overTime') {
            if (value < 0) {
                newerror[name] = 'Dữ liệu không hợp lệ'
            }
        }
        this.setState({
            themMoi: {
                ...this.state.themMoi,
                [name]: value,
                id: idNewStaff,
            },
            errors: newerror
        })
        if (name === 'department') {
            let dep = '';
            switch (value) {
                case 'Sale':
                    dep = this.props.departments[0];
                    break;
                case 'HR':
                    dep = this.props.departments[1];
                    break;
                case 'Marketing':
                    dep = this.props.departments[2];
                    break;
                case 'IT':
                    dep = this.props.departments[3];
                    break;
                case 'Finance':
                    dep = this.props.departments[4];
                    break;
                default: dep = '';
            }
            this.setState({
                themMoi: {
                    ...this.state.themMoi,
                    department: dep
                }
            })
        }


    }
    submitThemMoi = (event) => {
        const { addStaff } = this.props;
        event.preventDefault();
        let valid = true;
        let newerror = { ...this.state.errors }
        for (let key in this.state.themMoi) {
            if (this.state.themMoi[key] === '') {
                newerror[key] = 'Không được bỏ trống';
                this.setState({
                    errors: newerror
                })
                valid = false
            }
        }
        for (let key in this.state.errors) {
            if (this.state.errors[key] !== '') { valid = false }
        }
        if (valid) {
            addStaff(this.state.themMoi)
        }

    }
    render() {
        return (
            <Fragment>
                <Button color="success" onClick={this.renderThemMoi}><i class="fa fa-user-plus" aria-hidden="true"></i></Button>
                <Modal isOpen={this.state.show} toggle={this.renderThemMoi} >
                    <ModalHeader toggle={this.renderThemMoi}>Thêm nhân viên</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.submitThemMoi}>
                            <FormGroup row>
                                <Label for='name' sm={12} md={3}>Tên</Label>
                                <Col sm={12} md={9}>
                                    <Input type='text' id='name' name='name' className="form-control" onChange={this.handleThemMoi} />
                                    <span className="text-danger"><i>{this.state.errors.name}</i></span>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for='doB' sm={12} md={3}>Ngày sinh</Label>
                                <Col sm={12} md={9}>
                                    <Input type='date' id='doB' name='doB' className="form-control" onChange={this.handleThemMoi} />
                                    <span className="text-danger"><i>{this.state.errors.doB}</i></span>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for='startDate' sm={12} md={3}>Ngày vào công ty</Label>
                                <Col sm={12} md={9}>
                                    <Input type='date' id='startDate' name='startDate' className="form-control" onChange={this.handleThemMoi} />
                                    <span className="text-danger"><i>{this.state.errors.startDate}</i></span>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for='department' sm={12} md={3}>Phòng ban</Label>
                                <Col sm={12} md={9}>
                                    <Input type='select' className='form-control' name='department' onChange={this.handleThemMoi}>
                                        <option value=''></option>
                                        <option value="Sale">Sale</option>
                                        <option value="HR">HR</option>
                                        <option value="Marketing">Marketing</option>
                                        <option value="IT">IT</option>
                                        <option value="Finance">Finance</option>
                                    </Input>
                                    <span className="text-danger"><i>{this.state.errors.department}</i></span>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for='salaryScale' sm={12} md={3}>Hệ số lương</Label>
                                <Col sm={12} md={9}>
                                    <Input type='number' id='salaryScale' name='salaryScale' className="form-control" onChange={this.handleThemMoi} />
                                    <span className="text-danger"><i>{this.state.errors.salaryScale}</i></span>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for='annualLeave' sm={12} md={3}>Số ngày nghỉ còn lại </Label>
                                <Col sm={12} md={9}>
                                    <Input type='number' id='annualLeave' name='annualLeave' className="form-control" onChange={this.handleThemMoi} />
                                    <span className="text-danger"><i>{this.state.errors.annualLeave}</i></span>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for='overTime' sm={12} md={3}>Số ngày đã làm thêm</Label>
                                <Col sm={12} md={9}>
                                    <Input type='number' id='overTime' name='overTime' className="form-control" onChange={this.handleThemMoi} />
                                    <span className="text-danger"><i>{this.state.errors.overTime}</i></span>
                                </Col>
                            </FormGroup>
                           <Col sm={12}>
                            <Button color="success" type="submit" value="submit" style={{marginLeft:'30%',marginRight:'10px'}}>Thêm Mới</Button>
                            <Button color="danger" onClick={this.renderThemMoi} >Cancel</Button>
                           </Col>
                        </Form>
                    </ModalBody>
                </Modal>
            </Fragment>
        )
    }
}
