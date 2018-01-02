const getInitialState = {
  posts: []
}

export default function (state = getInitialState, action) {
  switch (action.type) {
      case 'INSERIR-POSTS':
      return {
        posts:action.payload
      }

      case 'ALTERAR-SCORE':
      return{
        
      }
     
      default: return state
  }
}


