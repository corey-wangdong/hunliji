//react组件
import React,{ Component } from 'react'


//自己的组件
import NavTopBarItem from '../../components/nav-top-bar/navTopBarItem'
import ShopItemList from '../../components/shop-item-list'
import Lcjs from './lcjs'
// import ErJiLink from './erJiLink'
//导入样式
import './index.css'
//导入图片
import ad1 from './image/ad1.png'
import ad2 from './image/ad2.png'
import show1 from './image/show1.png'
import show2 from './image/show2.png'
import jingx01 from './image/jingx01.png'
import jingx02 from './image/jingx02.png'
import jingx03 from './image/jingx03.png'
import jingx04 from './image/jingx04.png'

//Antd插件库组件  
import { Icon } from 'antd';

export default class HunPin extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        shopItemListInfo:[
            {id:"01",imgUrl:"http://qnm.hunliji.com/o_1b3f22phrhg16dbq351navgmpc.png",title:"新娘礼服"},
            {id:"02",imgUrl:"http://qnm.hunliji.com/o_1bu0ogcrb521n136adlne1mnqg.png",title:"婚房布置"},
            {id:"03",imgUrl:"https://qnm.hunliji.com/o_1d3vi059b13c6mrn1pe81n1013i99.png",title:"喜糖请柬"},
            {id:"04",imgUrl:"http://qnm.hunliji.com/o_1b721dqu01hudvif1dtt18151rdc7.png",title:"婚鞋婚包"},
            {id:"05",imgUrl:"http://qnm.hunliji.com/o_1b8tjuel71agb1t971upi1nh1dpde.png",title:"迎亲堵门"},
            {id:"06",imgUrl:"https://qnm.hunliji.com/o_1d3v9ot8o1nklbeq3n812oudn39.png",title:"新娘嫁妆"},
            {id:"07",imgUrl:"http://qnm.hunliji.com/o_1bgfubmla1u3r1n431ihn18cf1s9f9.png",title:"新郎穿搭"},
            {id:"08",imgUrl:"http://qnm.hunliji.com/o_1b8tjuel71ala1e9u166s89915m4f.png",title:"睡衣胸贴"},
            {id:"09",imgUrl:"http://qnm.hunliji.com/o_1bgfo2eeabt01mmrrnmadg1kvsl.png",title:"婚宴现场"},
            {id:"10",imgUrl:"http://qnm.hunliji.com/o_1bpe8ktsl1lfm1h79kqa1p61c3q9.png",title:"新娘美护"}
        ],

        hunPinImg:[
            {id:"11",imgUrl:ad1},
            {id:"12",imgUrl:ad2}
        ],

        lcjsImg:[
            {id:"13",imgUrl:show1,title:"森系浪漫花园三角形喜糖盒",price:"￥0.46"},
            {id:"14",imgUrl:show2,title:"韩式豆沙色显瘦短款伴娘服",price:"￥108.00"},
            {id:"15",imgUrl:show1,title:"森系浪漫花园三角形喜糖盒",price:"￥0.46"},
            {id:"16",imgUrl:show2,title:"韩式豆沙色显瘦短款伴娘服",price:"￥108.00"},
            {id:"17",imgUrl:show1,title:"森系浪漫花园三角形喜糖盒",price:"￥0.46"},
            {id:"18",imgUrl:show2,title:"韩式豆沙色显瘦短款伴娘服",price:"￥108.00"},
        ],

        jingXuan:[
            [
                {id:"19",imgUrl:jingx01,flag:"自营",title:"森系浪漫花园三角形喜糖盒",oldPrice:"￥1699",newPrice:"￥399",star:'428'},
                {id:"20",imgUrl:jingx02,flag:"自营",title:"森系浪漫花园三角形喜糖盒",oldPrice:"￥1699",newPrice:"￥399",star:'428'},
                {id:"21",imgUrl:jingx03,flag:"自营",title:"森系浪漫花园三角形喜糖盒",oldPrice:"￥1699",newPrice:"￥399",star:'428'},
                {id:"22",imgUrl:jingx04,flag:"自营",title:"森系浪漫花园三角形喜糖盒",oldPrice:"￥1699",newPrice:"￥399",star:'428'}
            ],
            [
                {id:"23",imgUrl:jingx04,flag:"自营",title:"森系浪漫花园三角形喜糖盒",oldPrice:"￥1699",newPrice:"￥399",star:'428'},
                {id:"24",imgUrl:jingx03,flag:"自营",title:"森系浪漫花园三角形喜糖盒",oldPrice:"￥1699",newPrice:"￥399",star:'428'},
                {id:"25",imgUrl:jingx02,flag:"自营",title:"森系浪漫花园三角形喜糖盒",oldPrice:"￥1699",newPrice:"￥399",star:'428'},
                {id:"26",imgUrl:jingx01,flag:"自营",title:"森系浪漫花园三角形喜糖盒",oldPrice:"￥1699",newPrice:"￥399",star:'428'}
            ],
            [
                {id:"19",imgUrl:jingx01,flag:"自营",title:"森系浪漫花园三角形喜糖盒",oldPrice:"￥1699",newPrice:"￥399",star:'428'},
                {id:"20",imgUrl:jingx02,flag:"自营",title:"森系浪漫花园三角形喜糖盒",oldPrice:"￥1699",newPrice:"￥399",star:'428'},
                {id:"21",imgUrl:jingx03,flag:"自营",title:"森系浪漫花园三角形喜糖盒",oldPrice:"￥1699",newPrice:"￥399",star:'428'},
                {id:"22",imgUrl:jingx04,flag:"自营",title:"森系浪漫花园三角形喜糖盒",oldPrice:"￥1699",newPrice:"￥399",star:'428'}
            ],
            [
                {id:"23",imgUrl:jingx04,flag:"自营",title:"森系浪漫花园三角形喜糖盒",oldPrice:"￥1699",newPrice:"￥399",star:'428'},
                {id:"24",imgUrl:jingx03,flag:"自营",title:"森系浪漫花园三角形喜糖盒",oldPrice:"￥1699",newPrice:"￥399",star:'428'},
                {id:"25",imgUrl:jingx02,flag:"自营",title:"森系浪漫花园三角形喜糖盒",oldPrice:"￥1699",newPrice:"￥399",star:'428'},
                {id:"26",imgUrl:jingx01,flag:"自营",title:"森系浪漫花园三角形喜糖盒",oldPrice:"￥1699",newPrice:"￥399",star:'428'}
            ],
            [
                {id:"19",imgUrl:jingx01,flag:"自营",title:"森系浪漫花园三角形喜糖盒",oldPrice:"￥1699",newPrice:"￥399",star:'428'},
                {id:"20",imgUrl:jingx02,flag:"自营",title:"森系浪漫花园三角形喜糖盒",oldPrice:"￥1699",newPrice:"￥399",star:'428'},
                {id:"21",imgUrl:jingx03,flag:"自营",title:"森系浪漫花园三角形喜糖盒",oldPrice:"￥1699",newPrice:"￥399",star:'428'},
                {id:"22",imgUrl:jingx04,flag:"自营",title:"森系浪漫花园三角形喜糖盒",oldPrice:"￥1699",newPrice:"￥399",star:'428'}
            ],
            [
                {id:"23",imgUrl:jingx04,flag:"自营",title:"森系浪漫花园三角形喜糖盒",oldPrice:"￥1699",newPrice:"￥399",star:'428'},
                {id:"24",imgUrl:jingx03,flag:"自营",title:"森系浪漫花园三角形喜糖盒",oldPrice:"￥1699",newPrice:"￥399",star:'428'},
                {id:"25",imgUrl:jingx02,flag:"自营",title:"森系浪漫花园三角形喜糖盒",oldPrice:"￥1699",newPrice:"￥399",star:'428'},
                {id:"26",imgUrl:jingx01,flag:"自营",title:"森系浪漫花园三角形喜糖盒",oldPrice:"￥1699",newPrice:"￥399",star:'428'}
            ]
        ],

        navButtomItem:["精选","婚纱礼服","婚房布置","婚鞋箱包","婚纱礼服","婚房布置"],
       
        navButtomItemShow:[
            {id:"19",imgUrl:jingx01,flag:"自营",title:"森系浪漫花园三角形喜糖盒",oldPrice:"￥1699",newPrice:"￥399",star:'428'},
            {id:"20",imgUrl:jingx02,flag:"自营",title:"森系浪漫花园三角形喜糖盒",oldPrice:"￥1699",newPrice:"￥399",star:'428'},
            {id:"21",imgUrl:jingx03,flag:"自营",title:"森系浪漫花园三角形喜糖盒",oldPrice:"￥1699",newPrice:"￥399",star:'428'},
            {id:"22",imgUrl:jingx04,flag:"自营",title:"森系浪漫花园三角形喜糖盒",oldPrice:"￥1699",newPrice:"￥399",star:'428'}
        ]
    }
    
    fun=(i)=>{
       this.setState({
        navButtomItemShow:this.state.jingXuan[i]
       })
    }

    render() {
        return (
            <div>
                <NavTopBarItem>
                    <div className="navBarLeft">
                        <span><Icon type="search" style={{fontSize:".18rem",marginLeft:".1rem",}}/></span>
                        <input type="text" placeholder="搜索想要的商品"/>
                    </div>
                    <div className="navBarCen"></div>
                    <div className="navBarRig">
                        <Icon type="shopping-cart" />
                        <Icon type="account-book" />
                    </div>
                </NavTopBarItem>

                <div className="shopItemListBox">
                    <ShopItemList shopItemListInfo={this.state.shopItemListInfo}/>
                </div>

                <div className="adBox">
                    <img src={this.state.hunPinImg[0].imgUrl} alt=""/>
                </div>
                <div className="ad2Box">
                    <div>
                        <img src={this.state.hunPinImg[1].imgUrl} alt=""/>
                    </div>
                    <div>
                        <img src={this.state.hunPinImg[1].imgUrl} alt=""/>
                    </div>
                    <div>
                        <img src={this.state.hunPinImg[1].imgUrl} alt=""/>
                    </div>
                    <div>
                        <img src={this.state.hunPinImg[1].imgUrl} alt=""/>
                    </div>
                </div>
                <div className="Lcjs">
                    <div>良辰吉市 </div><span>婚礼纪自营品牌</span>
                </div>
                <div>
                    <Lcjs lcjsImg={this.state.lcjsImg}/>
                </div>
                <div className="navButtomItem">
                    {
                        this.state.navButtomItem.map((v,i) => {
                            return (
                                <div key={i} onClick={this.fun.bind(this,i)}>
                                    <span>{v}</span>
                                </div>
                            )  
                        })
                    }
                </div>
                <ul>
                    {
                        this.state.navButtomItemShow.map((v,i) => {
                            return (
                               <li key={i}>
                                   <img src={v.imgUrl} alt=""/>
                                   <div className="cont">
                                       <span>{v.flag}</span>
                                       <span>{v.title}</span>
                                   </div>
                                   <div className="price">{v.newPrice} <span><del>{v.oldPrice}</del></span></div>
                                   <span className="star">{v.star}</span>
                               </li>
                            )
                        })
                    }
                </ul>
            </div>
            
        )
    }
}