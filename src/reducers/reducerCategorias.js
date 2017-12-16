const getInitialState = {
  categorias: {}
}

export default function (state = getInitialState, action) {
  switch (action.type) {
    case 'DELETAR-CATEGORIAS':
      return {
        ...state,
        categorias: {}
      }
      default: return state
  }
}