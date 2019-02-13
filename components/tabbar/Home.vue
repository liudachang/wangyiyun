<template>
<!--最大的div-->
    <div class="app-home">
        <!--第一个 head mui-master offcanvas-drag-right.html-->
         <!--主页组件-->
       <header2-box class="a"></header2-box>
       <!--头部导航-->
       <div>
            <ul class="ljul">
                <li><router-link to="/Home" class="a">推荐</router-link></li>
                <li><router-link to="/Friends" class="a">朋友</router-link></li>
                <li><router-link to="/Diantai" class="a">电台</router-link></li>
            </ul>
        </div>
        
        
       <!--第三个 轮播-->
        <div id="app">
            <mt-swipe :auto="3000">
                <mt-swipe-item v-for="item in list" :key="item.id">
                    <img :src="item.img_url"> 
                </mt-swipe-item> 
            </mt-swipe> 
        </div>
        <!--第四个 四个  私人  每日推荐 歌单 排行榜-->
        <ul class="list">
            <li class="list-item">
                <img src="../../img/menu11.png" alt=""> 
                <div>私人FM</div>
            </li> 
            <li class="list-item">
                <img src="../../img/menu12.png" alt=""> 
                <div>每日推荐</div>
            </li> 
            <li class="list-item">
                <img src="../../img/menu12.png" alt=""> 
                <div>歌单</div>
            </li> 
            <li class="list-item">
                <img src="../../img/menu13.png" alt=""> 
                <div>排行榜</div>
            </li> 
        </ul> 
        <!--<hr style="background-color:#aaa;border:0;"/> -->
    
        <!--第五个 推荐歌单-->
        <div class="tjgd">
            <a href="">推荐歌单<span class="mui-icon mui-icon-arrowright" style="font-size:18px "></span> </a> 
        </div> 
        <!--第五个 推荐歌单 下的-->
        <div>
            <ul class="mui-table-view mui-grid-view">
		        <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#">
		                <img class="mui-media-object" src="../../img/jj.png">
		                <div class="mui-media-body">幸福就是可以一起睡觉</div></a></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#">
		                <img class="mui-media-object" src="../../img/jj.png">
		                <div class="mui-media-body">想要一间这样的木屋，静静的喝咖啡</div></a></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#"><img class="mui-media-object" src="../../img/jj.png">
		                <div class="mui-media-body">Color of SIP CBD</div></a></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#">
		                <img class="mui-media-object" src="../../img/jj.png">
		                <div class="mui-media-body">静静看这世界</div></a></li>
		    </ul>    
        </div> 
        <!--第六个 LOOK直播-->
        <!--底部导航-->
        
        </div>
</template>
<script>
import Header2 from '../subcomponents/Header2.vue'
    export default {
        components:{
            'header2-box':Header2,
        },
       created(){
            //当组件对象创建成功后即可发送ajax请求
            this.getImages();
        },
        methods:{
             getImages(){
				 //测试方法 和地址没问题  是否成功
				//console.log(123)
                 //完成一个功能，获取服务器轮播图片
                //发送ajax请求
                var url="http://127.0.0.1:3000/getImages";
                this.axios.get(url).then(result=>{
                //获取返回数据保存list
                //console.log(result.data)
                this.list=result.data;
                })
             }
        }, 
        data(){
            return {
				//轮播图
                list:[]
            }
        },
    }
</script> 

<style >
.app-home{background-color:#fff;}
    /*头部第二部分连接*/
   .ljul{
       background-color: #D43C33;
       display: flex;
       list-style: none;
       padding: 0;
       margin-top:20px;
       margin-bottom:0;
       justify-content: space-around;
       height:30px;    
       z-index:999;
       color:#fff;
   }
    /*routerlink*/
   .a{
       color:white !important;
       font-size: 14px;
       font-family: "SimHei";
   }
    /*轮播图设置父元素高度 */
     .app-home .mint-swipe{
        height:160px;
    }
     .app-home .mint-swipe img{
        width:100%;
        height:150px;
        /*border-radius:11px;*/
    }
    /*四宫格  */
    .app-home .list {
        display:flex;
        justify-content:space-between;
        font-size:12px;
        margin:5px 10px;
        padding:5px 10px;
        color:#000;
    }
    /*图片文字纵向 居中 */
    .app-home .list .list-item{
        display:flex;
        flex-direction:column;
        flex-wrap:nowrap;
        align-items:center;
        justify-content:center;

    }
    /*图片大小 */
    .app-home .list .list-item img{
        width:40px;
        height:40px;
        margin-bottom:4px;
    }
    /*表头 */
    .app-home .header{
        display:flex;
        justify-content:space-between;
    }
	
    
    /*推荐歌单 a */
    .app-home .tjgd{
        margin:10px 20px;
    }
    .app-home .tjgd a{
        color:#000;
        font-size:15px;
        font-weight:bold;
    }
</style> 