import * as BurgerConstant from '../Constant/BurgerConstant';
export function tangGiamMenu(burgerItem, tangGiam){
  return{
    type: BurgerConstant.INCREASE_DECREASE_ORDER,
    burgerItem,
    tangGiam: tangGiam
  }
}
