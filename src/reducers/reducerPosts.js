const getInitialState = {
  posts: [],
 // editarPost:''
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
        /*posts recebe seus prórpios post's menos o post do 
        id = o do payload (que seria o post antigo)
        em seguida ele recebe o post do paylod (que é o atual)
        */
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
