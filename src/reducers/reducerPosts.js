const getInitialState = {
  posts: [],
};

export default function (state = getInitialState, action) {
  switch (action.type) {

    case 'INSERIR-POSTS':
      return {
        posts: action.payload,
      };

      case 'DELETAR-POSTS':
      return{
        posts: [
          ...state.posts.filter (
            (elem, index, arr) => elem.id !== action.payload.id)
        ]
      }

    case 'ALTERAR-SCORE': {
      return {
        posts: [
          ...state.posts.filter (
            (elem, index, arr) => elem.id !== action.payload.id
          ),
          action.payload,
        ],
      };
    }



    default:
      return state;
  }
}
