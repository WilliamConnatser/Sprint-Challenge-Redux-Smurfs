const initStore = {
  smurfs: [],
  status: {
    LOADING: false,
    ERROR: null
  }
}


export const reducer = (state = initStore, action) => {

  let type = action.type.slice(0, action.type.indexOf('_'));

  if (action.type.endsWith('INITIALIZED')) {
    return {
      ...state,
      status: {
        ...state.status,
        LOADING: true,
        ERROR: null
      }
    }
  } else if (action.type.endsWith('SUCCESSFUL')) {
    return {
      ...state,
      smurfs: action.payload,
      status: {
        ...state.status,
        LOADING: false,
        ERROR: null
      }
    }
  } else if (action.type.endsWith('FAILED')) {
    return {
      ...state,
      status: {
        ...state.status,
        LOADING: false,
        ERROR: action.payload.data.Error
      }
    }
  } else {
    return state;
  }

}