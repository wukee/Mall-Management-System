
import * as React from 'react'
import './index.scss'
import 'font-awesome/css/font-awesome.min.css'
class App extends React.Component{
    render(){
        return (
            <div className='title'>
                <i className='fa fa-spinner fa-spin'></i>加载中……
                <h1>Hello</h1>
            </div>
        )
    }
}
export default App