import React, { Component, Fragment } from 'react';
import dateFormat from 'dateformat';
import {
    Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button,
    Modal, ModalHeader, ModalBody, Label, Row, Col
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';



function RenderDish(props) {
    return (
        <Card>
            <CardImg top src={props.dish.image} alt={props.dish.name} />
            <CardBody>
                <CardTitle>{props.dish.name}</CardTitle>
                <CardText>{props.dish.description}</CardText>
            </CardBody>
        </Card>
    );
}


function RenderComment({ comments }) {
    const comment = comments.map((dish, index) => {
        return (
            <div key={index} className="m-2">
                <p>{dish.comment}</p>
                <p>--{dish.author}, {dateFormat(dish.date, 'dd/mm/yyyy')}</p>
            </div>)
    })
    return comment;
}

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    handleSubmit(values) {
        console.log('values', values);
        console.log(this.props);
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }
    renderAddComment = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <Fragment>
                <Button color="success" onClick={this.renderAddComment}>Add Comment</Button>
                <Modal isOpen={this.state.show} toggle={this.renderAddComment} >
                    <ModalHeader toggle={this.renderAddComment}>Add Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label for="rating" sm={12}>Rating</Label>
                                <Col sm={12}>
                                    <Control.select model=".rating" id="rating" name="rating" className="form-control" validators={{ required }}>
                                        <option value=''></option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </Control.select>
                                    <Errors className="text-danger" model=".rating" show="touched" messages={{
                                        required: "bắt buộc"
                                    }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label for="author" sm={12}>Name</Label>
                                <Col sm={12}>
                                    <Control.text model=".author" id="author" name="author" className="form-control"
                                        validators={{ required, minLength: minLength(2), maxLength: maxLength(15) }} />
                                    <Errors className="text-danger" model=".author" show="touched" messages={{
                                        required: "Bắt buộc nhập",
                                        minLength: "Yêu cầu nhiều hơn 2 kí tự",
                                        maxLength: "Yêu cầu ít hơn 30 kí tự"
                                    }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label for="Comment" sm={12}>Comment</Label>
                                <Col sm={12}>
                                    <Control.text model=".comment" id="Comment" name="comment" className="form-control" validators={{ required }} />
                                    <Errors className="text-danger" model=".comment" show="touched" messages={{
                                        required: "bắt buộc"
                                    }} />
                                </Col>
                            </Row>
                            <Col sm={12}>
                                <Button color="primary" type="submit">OK</Button>{' '}
                                <Button color="secondary" onClick={this.renderAddComment}>Cancel</Button>
                            </Col>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </Fragment>
        )
    }
}

const Dishdetail = (props) => {
    console.log('dishdetail', props)
    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-5">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-7">
                        <h4>Comments</h4>
                        <RenderComment comments={props.comments} />
                        <CommentForm addComment={props.addComment} dishId={props.dish.id} />
                    </div>
                </div>
            </div>
        );
    }
    else
        return (
            <div></div>
        );
}
export default Dishdetail
