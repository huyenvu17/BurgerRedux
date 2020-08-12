import React, { Component } from 'react'
import '../../../styles/burger.css';
import {connect} from 'react-redux';
class BurgerComponent extends Component {
  renderBurgerTopping = (burger) => {
    let content = [];
    for (let burgerItem in burger) {
      let mangBurger = [];
      for (let i = 0; i < burger[burgerItem]; i++) {
        mangBurger.push(<div key={i} className={burgerItem}></div>);
      }
      content.push(mangBurger);
    }
    return content;
  }
  render() {
    let {burger} = this.props;
    return (
      <div>
        <div className="breadTop"></div>
        {this.renderBurgerTopping(burger)}
        <div className="breadBottom"></div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    burger: state.stateBurgerReducer.burger
  }
}
export default connect(mapStateToProps)(BurgerComponent);
