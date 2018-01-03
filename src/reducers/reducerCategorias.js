const getInitialState = {
  categorias: {},
  categoriaAtual:''
}

export default function (state = getInitialState, action) {
  switch (action.type) {
    case 'DELETAR-CATEGORIAS':
      return {
        ...state,
        categorias: {}
      }
      case 'INSERIR-CATEGORIAS':
      return {...state,
        categorias:action.payload
      }
      case 'SETAR-CATEGORIA-ATUAL':
      return {
        ...state,
        categoriaAtual:action.payload
      }



      default: return state
  }
}