import React, { Component } from 'react';
import MenuComponent from './component/MenuComponent';
import { DISHES } from './shared/dishes';
import {Navbar, NavbarBrand} from 'reactstrap'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    }
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <MenuComponent dishes={this.state.dishes} />
      </div>
    )
}
}