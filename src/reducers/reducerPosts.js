const getInitialState = {
  posts: []
}

export default function (state = getInitialState, action) {
  switch (action.type) {
      case 'INSERIR-POSTS':
      return {
        posts:action.payload
      }

      /**
       * action.payload é o ID.
       * O posts vai receber o resultado do filtro de id's
       * todos os que forem diferentes do payload.
       */
      case 'DELETAR-POSTS':
      return {
        posts: [...state.posts.filter((element, index, arr)=>
          element.id !== action.payload
        )]
      }
     
      default: return state
  }
}


