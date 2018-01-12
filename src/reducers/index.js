import {combineReducers} from 'redux'

//import all your reducer
import ReducerCategorias from'./reducerCategorias'
import ReducerPosts from './reducerPosts'
import ReducerEditarPost from './reducerEditarPost'

//combine reducers
const allReducers = combineReducers({
  ReducerCategorias,
  ReducerPosts,
  ReducerEditarPost
})

export default allReducers;