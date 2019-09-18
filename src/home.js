//react自带组件
import React,{ Component } from 'react'
import { BrowserRouter, Route,Link,NavLink,Redirect} from 'react-router-dom';

//自己的组件
import ShouYe from './pages/shouye'
import XinNiangShuo from './pages/xinniangshuo'
import HunPin from './pages/hunpin'
import ShouCang from './pages/shoucang'
import WoMen from './pages/women'

import NavBarItem from './components/nav-bottom-bar/navBarItem'
export default class Home extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <NavBarItem/>
                        <Route path='/shouye' component={ShouYe}/>
                        <Route path='/xinniangshuo' component={XinNiangShuo}/>
                        <Route path='/hunpin' component={HunPin}/>
                        <Route path='/shoucang' component={ShouCang}/>
                        <Route path='/women' component={WoMen}/> 
                        <Redirect to='/shouye' />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}