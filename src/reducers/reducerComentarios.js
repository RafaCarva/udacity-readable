const getInitialState = {
  todosComentarios:[],
}

export default function (state = getInitialState, action) {
  switch (action.type) {
    case 'DELETAR-COMENTARIO':
      return {
        ...state,
        todosComentarios:[...state.todosComentarios.filter(
          (elem, index, arr)=>elem.id !== action.payload
        )]
      }
      case 'ALTERAR-VOTO-COMENTARIO':
      return {
        ...state,
        todosComentarios:[...state.todosComentarios.filter(
          (elem, index, arr)=>elem.id !== action.payload.id
        ), action.payload]
      }
      case 'INSERIR-COMENTARIOS':
      return {...state,
        todosComentarios : action.payload
       //todosComentarios :[...state.todosComentarios,action.payload] 
      }
      case 'INSERIR-COMENTARIO-ALTERADO':
      return {...state,
        todosComentarios:[...state.todosComentarios.filter(
          (elem, index, arr)=>elem.id !== action.payload.id
        ), action.payload]
      }
      case 'INSERIR-NOVO-COMENTARIOS':
      return {...state,
       // todosComentarios : action.payload
       todosComentarios:[...state.todosComentarios,action.payload] 
      }

      case 'LIMPAR-COMENTARIOS':
      return {...state,
        todosComentarios : []
      }

      default: return state
  }
}