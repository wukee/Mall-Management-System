/**
 * @Author: wuke
 * @Date: 2018/8/17
 * @Last Modified by: wuke
 * @Last Modified time: 2018/8/17
 */

import React from 'react'
import Sider from'../../components/SideNavBar/SideBar.jsx'
import TodoList from '../../redux/todoList.jsx'
class Home extends React.Component{
    render(){
        return(
            <div>
                {/*<Sider/>*/}
                <TodoList></TodoList>
            </div>
        )
    }
}

export default Home