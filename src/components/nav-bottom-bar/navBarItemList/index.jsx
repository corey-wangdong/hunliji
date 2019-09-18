//react自带组件
import React,{ Component } from 'react'

// Antd框架组件
import { Icon } from 'antd'

//自己的组件
import './index.css'
export default class NavBarItemList extends Component {
    render() {
        return (
            <div className='navBarItemList'>
                <Icon type={this.props.iconName} style={{ fontSize: '.18rem',}} />
                <div>{this.props.name}</div>
            </div>
        )
    }
}