const initStore = {
  smurfs: [],
  status: {
    GET: false,
    ADD: false,
    UPDATE: false,
    DELETE: false,
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
        [type]: true,
        ERROR: null
      }
    }
  } else if (action.type.endsWith('SUCCESSFUL')) {
    return {
      ...state,
      smurfs: action.payload,
      status: {
        ...state.status,
        [type]: false,
        ERROR: null
      }
    }
  } else if (action.type.endsWith('FAILED')) {
    return {
      ...state,
      status: {
        ...state.status,
        [type]: false,
        ERROR: action.payload
      }
    }
  } else {
    return state;
  }

}