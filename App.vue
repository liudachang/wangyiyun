<template>
 <div class="app-container">
    <router-view></router-view>
    <!--3:tabbar-->
         	<div class="tb">
             <!--左边-->
                <div class="tb-z">
                    <img src="./img/tj1.jpg" alt=""> 
                    <span>Traveling Light</span>
                </div>
                 <!--右边-->
                <div class="tb-y">
                    <img src="./img/icon-3.png" alt=""> 
                    <img src="./img/like2.png" alt=""> 
                </div>
             </div> 
 </div>
</template>

<style>
/*tabbar  */
.tb{
     height: 60px;
       width: 100%;
       /*background-color:#D43C33;*/
       position: fixed;
       top: 92%;
       left: 0;
       z-index: 999;/*数字越大元素越靠上显示 */

    display:flex;
    justify-content:space-between;
    align-items:center;
    border-top:1px solid #aaa;
    background-color:#fff;
    
}
.tb .tb-z img{
    width:40px;
    height:40px;
    margin:0 10px;
}
.tb .tb-y img{
    width:30px;
    height:30px;
    margin:0 10px;
}
   .app-container{
     padding-top:40px;
     padding-bottom:50px;
     overflow-x:hidden;
   }

 .mui-bar-tab .mui-tab-item-tao.mui-active {
    color: #007aff;
 }
.mui-bar-tab .mui-tab-item-tao {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-tao .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-tao .mui-icon~.mui-tab-label {
   font-size:11px;
   display:block;
   overflow:hidden;
   text-overflow:ellipsis;

}
</style>
