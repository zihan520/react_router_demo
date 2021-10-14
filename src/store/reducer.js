import { INPUT_CHANGE,ADD_ITEM,DELETE_ITEM,GET_LIST } from './actionTypes'
const defaultData = {
    list:[],
    inputValue:"write something"
}
export default (state = defaultData,action)=>{
    
    if(action.type === INPUT_CHANGE){
        let newState = JSON.parse(JSON.stringify(state));//深度拷贝
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === ADD_ITEM){
        let newState = JSON.parse(JSON.stringify(state));//深度拷贝
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if(action.type === DELETE_ITEM){
        let newState = JSON.parse(JSON.stringify(state));//深度拷贝
        newState.list.splice(action.index,1);
        return newState;
    }
    if(action.type === GET_LIST){
        console.log(action);
        let newState = JSON.parse(JSON.stringify(state));//深度拷贝
        newState.list = action.data.data.list;
        return newState;
    }
    return state;
}