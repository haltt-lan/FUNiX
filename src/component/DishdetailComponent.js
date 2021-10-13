import React, { Component } from 'react';
import dateFormat from 'dateformat';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

export default class Dishdetail extends Component {
    renderDish(props) {
        console.log('detail', this.props.dish);
        if (this.props.dish != null)
            return (
                <Card>
                    <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                        <CardTitle>{this.props.dish.name}</CardTitle>
                        <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }

    renderComment(props) {
        if (this.props.dish != null) {
            const comment = this.props.dish.comments.map((dish, index) => {
                console.log(dish.comment);
                return (
                    <div key={index} className="m-2">
                        <p>{dish.comment}</p>
                        <p>--{dish.author}, {dateFormat(dish.date,'dd/mm/yyyy')}</p>
                    </div>)
            })
            return comment;
        }

        else
            return (
                <div></div>
            );
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5">
                        {this.renderDish()}
                    </div>
                    <div className="col-12 col-md-7">
                        <h4>Comments</h4>
                        {this.renderComment()}
                    </div>
                </div>
            </div>
        );
    }
}


