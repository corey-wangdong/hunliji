import React,{ Component } from 'react'

//自己的组件
import './index.css'
export default class ShopItemList extends Component {

    fun(i) {
        console.log(i)
    }
    render() {
        return (
            <div className="shopItemInfo">
               {
                   this.props.shopItemListInfo.map((v,i) => {
                       return (
                            <div key={i} onClick={this.fun.bind(this,i)}>
                                <img src={v.imgUrl} alt=""/>
                                <h1>{v.title}</h1>
                            </div>
                       )
                   })
               }
            </div>
        )
    }
}