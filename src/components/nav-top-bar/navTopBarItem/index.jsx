import React,{ Component} from 'react'

import './index.css'
export default class NavTopBarItem extends Component {
    render() {
        return (
            <div className="navTopBarItem" >
                {this.props.children}
            </div>
        )
    }
}