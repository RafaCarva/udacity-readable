const getInitialState = {
  posts: []
}

export default function (state = getInitialState, action) {
  switch (action.type) {
      case 'INSERIR-POSTS':
      return {
        posts:action.payload
      }
      default: return state
  }
}