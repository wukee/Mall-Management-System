/**
 * @Author: wuke
 * @Date: 2018/11/3
 * @Last Modified by: wuke
 * @Last Modified time: 2018/11/3
 */


'use strict';
import *as React from 'react';
import {Input,Button,List} from 'antd';
import store from '../store/index.jsx'
import {handleInputChange,handleBtnChange} from "../action/todList.jsx";

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state=store.getState();//把store里的数据给此处的state
        // console.log(store.getState());
        // this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange=this.handleStoreChange.bind(this);
        // this.handleBtnChange=this.handleBtnChange.bind(this);

        //监听store中reducer返回的新数据，有变化则立马执行括号的事件函数
        store.subscribe(this.handleStoreChange);
    }

    // handleInputChange(e){
    //     //action 的作用：给store传话(用dispatch()方法传话)；你帮我去改变inputValue的值，它现在的值应该是e.target.value
    //     Action(e);
    //     store.dispatch(Action);//把action发给store
    //     console.log(e.target.value);
    // }


    handleStoreChange(){
        // console.log('store change')
        //当数据发生变化时，重新从store中取新数据给当前的组件，
        this.setState(store.getState())
    }

    // handleBtnChange(){
    //     const action={
    //         type:'add_todo_item',
    //     };
    //     store.dispatch(action);
    // }
    render(){
        return(
            <div style={{marginTop:"10px",marginLeft:'10px'}}>
                <div>
                    <Input
                        style={{width:'300px',marginRight:'10px'}}
                        value={this.state.inputValue}
                        placeholder='请输入'
                        onChange={handleInputChange}
                    />
                    <Button type='primary' onClick={handleBtnChange}>提交</Button>
                </div>
                <List style={{marginTop:'10px',width:'300px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        )
    }

}

export default TodoList