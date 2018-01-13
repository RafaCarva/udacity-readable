const getInitialState = {
  editarPost:''
};

export default function (state = getInitialState, action) {
  switch (action.type) {

    case 'EDITAR-POST':
      return{...state,
             editarPost: action.payload
      };

    default:
      return state;
  }
}
