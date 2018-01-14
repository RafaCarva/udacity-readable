const getInitialState = {
  todosComentarios:[],
}

export default function (state = getInitialState, action) {
  switch (action.type) {
    case 'DELETAR-COMENTARIO':
      return {
        //...state,
        todosComentarios:[...state.todosComentarios.filter(
          (elem, index, arr)=>elem.id !== action.payload.id
        )]
      }
      case 'INSERIR-COMENTARIOS':
      return {...state,
        todosComentarios : action.payload
      }

      case 'LIMPAR-COMENTARIOS':
      return {...state,
        todosComentarios : []
      }

      default: return state
  }
}