/**
 * @Author: wuke
 * @Date: 2018/8/17
 * @Last Modified by: wuke
 * @Last Modified time: 2018/8/17
 */

'use strict'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {BrowserRouter as Router,Route,Switch,Link,Redirect} from 'react-router-dom'

//页面
import Home from './page/home/index.jsx'

class App extends React.Component{
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Redirect from='*' to='/'/>
                </Switch>
            </Router>

        )
    }
}

ReactDOM.render(
    <App>
    </App>,
    document.querySelector('.app')
);