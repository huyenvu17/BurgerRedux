import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as BurgerAction from '../../../Redux/Actions/BurgerAction';
class MenuComponent extends Component {

  renderMenu = () => {
    let { menu, burger } = this.props;
    return Object.entries(menu).map(([list, price], index) => {
      return (
        <tr key={index}>
          <td>{list}</td>
          <td>
            <button
              className="btn btn-danger mr-2"
              onClick={() => {
                {
                  this.props.tangGiamSoLuongMenu(list, -1);
                }
              }}
            >
              -
            </button>
            <span className="mr-2">{burger[list]}</span>
            <button
              className="btn btn-success"
              onClick={() => {
                {
                  this.props.tangGiamSoLuongMenu(list, 1);
                }
              }}
            >
              +
            </button>
          </td>
          <td className="text-right">{price}</td>
          <td className="text-right">{burger[list] * price}</td>
        </tr>
      );
    });
  };
  render() {
    let { total} = this.props;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Thức Ăn</th>
              <th></th>
              <th className="text-right">Đơn giá</th>
              <th className="text-right">Thành tiền</th>
            </tr>
            {this.renderMenu()}
          </thead>
          <tbody>
            <tr className="text-right">
              <td></td>
              <td></td>
              <td></td>
              <td>
                <b>Tổng Tiền : {total}</b> <br></br>
                <button className="btn btn-primary">Thanh Toán</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    menu: state.stateBurgerReducer.menu,
    total: state.stateBurgerReducer.total,
    burger: state.stateBurgerReducer.burger,
  }
}
const mapDispatchToProps = dispatch => {
  return{
    tangGiamSoLuongMenu: (burgerItem, tangGiam) => {
      dispatch(BurgerAction.tangGiamMenu(burgerItem, tangGiam));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);
