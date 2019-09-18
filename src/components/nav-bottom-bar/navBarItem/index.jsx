//react自带组件
import React,{ Component } from 'react'
import { BrowserRouter, NavLink, Route} from 'react-router-dom'

//自己的组件
import NavBarItemList from '../navBarItemList/index'


import './index.css'
export default class NavBarItem extends Component {
    render() {
        return (
            <div className='navBarItem'>
                <NavLink to='/shouye'>
                    <NavBarItemList  name="首页" iconName="home"/>
                </NavLink>
                <NavLink to='/xinniangshuo'>
                    <NavBarItemList  name="新娘说" iconName="aliwangwang"/>
                </NavLink>
                <NavLink to='/hunpin'>
                    <NavBarItemList  name="婚品11.11" iconName="heart"/>
                </NavLink>
                <NavLink to='/shoucang'>
                    <NavBarItemList  name="收藏" iconName="inbox"/>
                </NavLink>
                <NavLink to='/women'>
                    <NavBarItemList  name="我们" iconName="team"/>
                </NavLink>
            </div>
        )
    }
}