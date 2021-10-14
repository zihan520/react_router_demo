import React, { Component } from 'react';
import TodoListUI from './TodoListUI'
import store from './store';
// import { INPUT_CHANGE,ADD_ITEM,DELETE_ITEM } from './store/actionTypes';
import { inputChangeAction,addItemAction,deleteItemAction,getMyListAction } from './store/actionCreator'
export default class todo extends Component{
    constructor(props){
        super(props);
        this.state = {
            indexData:store.getState()
        }
        // 订阅
        store.subscribe(this.storeChange);
    }
    componentDidMount(){
        const action = getMyListAction();
        store.dispatch(action);
        // const action = getToDoList();
        // store.dispatch(action);
    }
    inputChangeValue = (e)=>{
        const action = inputChangeAction(e.target.value)
        store.dispatch(action)
    }
    storeChange = ()=>{
        this.setState({
            indexData:store.getState()
        })
    }
    addItem = ()=>{
        const action = addItemAction()
        store.dispatch(action);
    }
    deleteItem = (index)=>{
        const action = deleteItemAction(index);
        store.dispatch(action);
    }
    render(){
        const { indexData } = this.state;
        return (
            <TodoListUI 
            indexData={indexData}
            inputChangeValue={this.inputChangeValue}
            addItem={this.addItem}
            deleteItem={this.deleteItem}
            />
        )
    }
}