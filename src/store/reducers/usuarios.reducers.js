const initialState = {
  usuarios: {
    active: null,
    list: [
      "Davi",
      "Jakeline",
      "Nelma",
      "Maria de Lourdes",
      "João Guilherme",
      "Cleobaldo",
      "Ardiles",
      "Luiz",
    ],
  },
};

const usuariosReducer = (state = initialState.usuarios, action) => {
  console.log(action);
  if (action.type === "CHANGE_USER") {
    return {
      ...state,
      active: action.payload,
    };
  }
  return state;
};

export default usuariosReducer;
