import React from 'react';
import dateFormat from 'dateformat';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';



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


function RenderComment(props) {
    const comment = props.comments.map((dish, index) => {
        console.log(props.comments);
        return (
            <div key={index} className="m-2">
                <p>{dish.comment}</p>
                <p>--{dish.author}, {dateFormat(dish.date, 'dd/mm/yyyy')}</p>
            </div>)
    })
    return comment;
}
const Dishdetail = (props) => {
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
