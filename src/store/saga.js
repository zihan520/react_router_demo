import { takeEvery,put  } from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes';
import { getListAction } from './actionCreator'
import axios from 'axios';
function* mySaga(){
    yield takeEvery(GET_MY_LIST,getList);
}
function* getList(){
  const response = yield axios.get('https://www.easy-mock.com/mock/5d77a01eb5627e1d38b08ff4/example/user');
  const action = getListAction(response.data);
  yield put(action);
}
export default mySaga;