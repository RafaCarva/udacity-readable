import {combineReducers} from 'redux'

import ReducerCategorias from'./reducerCategorias'
import ReducerPosts from './reducerPosts'
import ReducerEditarPost from './reducerEditarPost'
import ReducerComentarios from './reducerComentarios'

//combine reducers
const allReducers = combineReducers({
  ReducerComentarios,
  ReducerCategorias,
  ReducerPosts,
  ReducerEditarPost
})

export default allReducers;