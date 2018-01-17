const getInitialState = {
  todosPosts: {},
  postSendoVisualizado: []
};

export default function (state = getInitialState, action) {
  switch (action.type) {

    case 'INSERIR-POST-DETALHADO':
      return {
        ...state,
        postSendoVisualizado: action.payload,
      };
    case 'INSERIR-POSTS':
      return {
        ...state,
        todosPosts: action.payload,
      };
    case 'DELETAR-POSTS':
      return {
        ...state,
        todosPosts: [
          ...state.todosPosts.filter(
            (elem, index, arr) => elem.id !== action.payload.id)
        ]
      }
    case 'ALTERAR-SCORE': {
      return {
        /*posts recebe seus prórpios post's menos o post do 
        id = o do payload (que seria o post antigo)
        em seguida ele recebe o post do paylod (que é o atual)
        */
        ...state,
        todosPosts: [
          ...state.todosPosts.filter(
            (elem, index, arr) => elem.id !== action.payload.id
          ),
          action.payload,
        ],
      };
    }
    case 'LISTAR-MAIOR-SCORE':
      return {
        ...state,
        todosPosts: [
          ...state.todosPosts.sort((a, b) => {
            if (a.voteScore > b.voteScore) {
              return 1;
            }
            if (a.voteScore < b.voteScore) {
              return -1;
            }
            // a must be equal to b
            return 0;
          })
        ]
      }
    case 'LISTAR-MENOR-SCORE':
      return {
        ...state,
        todosPosts: [
          ...state.todosPosts.sort((a, b) => {
            if (a.voteScore < b.voteScore) {
              return 1;
            }
            if (a.voteScore > b.voteScore) {
              return -1;
            }
            // a must be equal to b
            return 0;
          })
        ]
      }
    case 'LISTAR-MAIS-NOVA':
      return {
        ...state,
        todosPosts: [
          ...state.todosPosts.sort((a, b) => {
            if (a.timestamp < b.timestamp) {
              return 1;
            }
            if (a.timestamp > b.timestamp) {
              return -1;
            }
            // a must be equal to b
            return 0;
          })
        ]
      }
    case 'LISTAR-MAIS-VELHA':
      return {
        ...state,
        todosPosts: [
          ...state.todosPosts.sort((a, b) => {
            if (a.timestamp > b.timestamp) {
              return 1;
            }
            if (a.timestamp < b.timestamp) {
              return -1;
            }
            // a must be equal to b
            return 0;
          })
        ]
      }
    default:
      return state;
  }
}