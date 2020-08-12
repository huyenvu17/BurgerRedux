import {combineReducers} from 'redux';
import BurgerReducer from './BurgerReducer';
const rootReducer = combineReducers({
  stateBurgerReducer: BurgerReducer
});

export default rootReducer;
