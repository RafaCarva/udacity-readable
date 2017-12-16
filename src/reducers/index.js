import {combineReducers} from 'redux'

//import all your reducer
import ReducerCategorias from'./reducerCategorias'

//combine reducers
const allReducers = combineReducers({
  ReducerCategorias
})

export default allReducers;