import { INPUT_CHANGE,ADD_ITEM,DELETE_ITEM,GET_LIST,GET_MY_LIST } from './actionTypes';
import axios from 'axios';
// 输入框的更新
export const inputChangeAction = (value)=>({
    type:INPUT_CHANGE,
    value
})
// 添加一项
export const addItemAction = ()=>({
    type:ADD_ITEM,
})
// 删除一项
export const deleteItemAction = (index)=>({
    type:DELETE_ITEM,
    index
})
// 给list赋值
export const getListAction = (data)=>({
    type:GET_LIST,
    data
})
export const getToDoList = ()=>{
    return (dispatch)=>{
        axios.get('https://www.easy-mock.com/mock/5d77a01eb5627e1d38b08ff4/example/user').then((res)=>{
                const action = getListAction(res.data);
                dispatch(action);
            })
    }
}
export const getMyListAction = (data)=>({
    type:GET_MY_LIST
})
