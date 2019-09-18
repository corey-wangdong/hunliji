import React,{ Component } from 'react'

//自己的组件
import './index.css'
export default class Lcjs extends Component {
    render() {
        return (
            <div className="lcjsBox">
                {
                    this.props.lcjsImg.map((v,i) => {
                        return (
                            <div>
                                <img src={v.imgUrl} alt=""/>
                                <p>{v.title}</p>
                                <span>{v.price}</span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
