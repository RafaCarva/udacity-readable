const getInitialState = {
  editarPost:''
};

export default function (state = getInitialState, action) {
  switch (action.type) {

    case 'EDITAR-POST':
      return{...state,
             editarPost: action.payload
      };

      case 'LIMPAR-EDITAR-POST':
      return{...state,
             editarPost: ''
      };

    default:
      return state;
  }
}
