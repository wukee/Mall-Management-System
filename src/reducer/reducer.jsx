/**
 * @Author: wuke
 * @Date: 2018/11/3
 * @Last Modified by: wuke
 * @Last Modified time: 2018/11/3
 */

'use strict';
import *as React from 'react';

const defaultState={
    inputValue:'123',
    list:[1,2,3]
};

//reducer 可以接收state，但是绝不能修改state
export default (state = defaultState,action)=>{
    if(action.type === 'change_input_value'){
        //reducer不能修改state,所以做一次深拷贝
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState; //把最新的数据返回出去
    }
    if(action.type === 'add_todo_item'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue='';
        // console.log(newState);
        return newState;
    }
    // console.log(state,action)
    return state;
}