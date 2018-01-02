const getInitialState = {
  posts: [],
};

export default function (state = getInitialState, action) {
  switch (action.type) {
    case 'INSERIR-POSTS':
      return {
        posts: action.payload,
      };

    case 'ALTERAR-SCORE':{
    console.log('dddd')
      return {
        posts: [
          ...state.posts.filter((elem, index, arr) => elem.id !== action.payload.id),
          action.payload,
        ],
      };}

    default:
      return state;
  }
}
