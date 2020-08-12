import * as BurgerConstant from '../Constant/BurgerConstant';

const burgerState = {
  burger: {salad: 1, cheese: 1, beef: 1},
  menu: {salad: 10, cheese: 10, beef: 10},
  total: 30
}
export default (state = burgerState, action) => {
  switch (action.type){
    case BurgerConstant.INCREASE_DECREASE_ORDER: {
      let {total, menu} = state;
      let {burgerItem, tangGiam} = action;
      console.log(burgerItem)
      if (tangGiam === -1 && state.burger[burgerItem] < 1) {
        return { ...state };
      }
      let burgerUpdate = { ...state.burger };
      burgerUpdate[action.burgerItem] += tangGiam;
      state.burger = burgerUpdate;
      total += tangGiam * menu[burgerItem];
      return {...state}
    }
  }
  return {...state}
}
