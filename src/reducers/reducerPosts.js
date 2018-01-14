const getInitialState = {
  todosPosts: {},
 // editarPost:''
 postSendoVisualizado:[]
};

export default function (state = getInitialState, action) {
  switch (action.type) {

    case 'INSERIR-POST-DETALHADO':
    return {
      postSendoVisualizado: action.payload,
    };

      case 'INSERIR-POSTS':
      return {...state,
        todosPosts: action.payload,
      };

      case 'DELETAR-POSTS':
      return{
        todosPosts: [
          ...state.todosPosts.filter (
            (elem, index, arr) => elem.id !== action.payload.id)
        ]
      }

    case 'ALTERAR-SCORE': {
      return {
        /*posts recebe seus prórpios post's menos o post do 
        id = o do payload (que seria o post antigo)
        em seguida ele recebe o post do paylod (que é o atual)
        */
        todosPosts: [
          ...state.todosPosts.filter (
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
