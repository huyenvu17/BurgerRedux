import React, { Component } from 'react'
import BurgerComponent from './BurgerComponent'
import MenuComponent from './MenuComponent'
export default class BaiTapBurger extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="my-4">Burger Order</h3>
        <div className="row">
          <div className="col-7">
          <BurgerComponent />
          </div>
          <div className="col-5">
          <MenuComponent />
          </div>
        </div>
      </div>
    )
  }
}
