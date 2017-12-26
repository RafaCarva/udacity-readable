import {combineReducers} from 'redux'

//import all your reducer
import ReducerCategorias from'./reducerCategorias'
import ReducerPosts from './reducerPosts'

//combine reducers
const allReducers = combineReducers({
  ReducerCategorias,
  ReducerPosts
})

export default allReducers;