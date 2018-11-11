/**
 * @Author: wuke
 * @Date: 2018/11/11
 * @Last Modified by: wuke
 * @Last Modified time: 2018/11/11
 */

'use strict';
import store from '../store/index.jsx'

//action 的作用：给store传话(用dispatch()方法传话)；你帮我去改变inputValue的值，它现在的值应该是e.target.value
export const handleInputChange = (e)=>{
    const action={
            type:'change_input_value',//可以描述下要做什么事情
            value:e.target.value};
        store.dispatch(action);//把action发给store
        console.log(e.target.value);
};
export const handleBtnChange=()=>{
    const action={
        type:'add_todo_item',
    };
    store.dispatch(action);
}


