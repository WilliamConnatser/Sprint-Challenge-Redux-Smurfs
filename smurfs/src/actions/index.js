import axios from 'axios';

const ACTIONS = {
  GET: {},
  ADD: {},
  UPDATE: {},
  DELETE: {}
};

for (let action in ACTIONS) {
  ACTIONS[action] = {
    [`${action}_SMURFS_INITIALIZED`]: `${action}_SMURFS_INITIALIZED`,
    [`${action}_SMURFS_SUCCESSFUL`]: `${action}_SMURFS_SUCCESSFUL`,
    [`${action}_SMURFS_FAILED`]: `${action}_SMURFS_FAILED`,
    [action]: actionFunctionBuilder(action)
  }
}

function actionFunctionBuilder(action) {
  let url;
  let method;

  switch (action) {
    case 'ADD':
      method = 'post';
      url = 'http://localhost:3333/smurfs';
      break;
    case 'GET':
      method = 'get';
      url = 'http://localhost:3333/smurfs';
      break;
    case 'UPDATE':
      method = 'put';
      url = 'http://localhost:3333/smurfs/';
      break;
    case 'DELETE':
      method = 'delete';
      url = 'http://localhost:3333/smurfs/';
      break;
  }

  return data => dispatch => {

    if(method === 'delete' || method === 'put') url += data.id;

    dispatch({
      type: `${action}_SMURFS_INITIALIZED`
    });
    return axios({
        method,
        url,
        data
      })
      .then(res => {
        dispatch({
          type: `${action}_SMURFS_SUCCESSFUL`,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: `${action}_SMURFS_FAILED`,
          payload: err.response
        });
      });
  }
}

export default ACTIONS;