import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { postComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,  // state.dishes ={isLoading: true,errMess: null,  dishes: []}
    comments: state.comments, //COMMENTS tu share/comments
    promotions: state.promotions,  // PROMOTIONS tu share/promotions 
    leaders: state.leaders //LEADERS tu share/leaders
  }
}
const mapDispatchToProps = dispatch => ({
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes()) },
  resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
  fetchComments: () => { dispatch(fetchComments()) },
  fetchPromos: () => { dispatch(fetchPromos()) },
  fetchLeaders: () => { dispatch(fetchLeaders()) }
});


class Main extends Component {


  //dispatch (dishesLoading(true)) , 2s sau dispatch (addDishes(DISHES))
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }
  render() {
    const HomePage = () => {
      console.log('location',this.props.location)
      return (
        <Home
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]} // lúc này dishes = [] chưa có dữ liệu
          dishesLoading={this.props.dishes.isLoading} // lúc này isLoading = true, hiển thị biểu tượng Loading
          dishesErrMess={this.props.dishes.errMess} // lúc này errMess = null
          promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
          promosLoading={this.props.promotions.isLoading} // lúc này isLoading = true, hiển thị biểu tượng Loading
          promosErrMess={this.props.promotions.errMess}
          leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
          leadersLoading={this.props.leaders.isLoading} // lúc này isLoading = true, hiển thị biểu tượng Loading
          leadersErrMess={this.props.leaders.errMess}
        />
      );
    }
    const DishWithId = ({ match }) => {
      console.log("dishWithId:", match.params.dishId)
      return (
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
          postComment={this.props.postComment}
          commentsErrMess={this.props.comments.errMess}
        />
      );
    };
    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
