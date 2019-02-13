<template>
    <div class="app">
        <!--头部导航-->
        <header2-box class="a"></header2-box>
       <!--My 个人主页-->
       <!--框 -->
        <div class="my">
       <!--头像 -->
            <div class="my-tx">
                <img src="../../img/jj.png" alt=""> 
                <span>LC_1701</span> 
                <span class="kthy">开通会员</span> 
            </div> 
            <div class="my-ck">
                <span style="color:red;border:1px solid red;padding:0 4px;font-size:11px;font-size:5px;">福利</span> 
                <span>黑胶VIP 首开低至9元</span> 
                <span>查看></span> 
            </div> 
        </div> 
       <!--本地音乐 -->
       <div class="lie-list">
       <div class="my-list">
            <img src="../../img/icon-3.png" class="image1">    
            <div class="font">
                <div>
                    <span>本地音乐</span>
                    <span>(28)</span> 
                </div>
                <!--<img src="../../img/icon-lba.png" class="image2">-->
            </div> 
        </div>
        <div class="my-list">
            <img src="../../img/icon-2.png" class="image1">    
            <div class="font">
                <div>
                    <span>最近播放</span>
                    <span>(15)</span> 
                </div>
            </div> 
        </div>
        <div class="my-list">
            <img src="../../img/icon-3.png" class="image1">    
            <div class="font">
                <div>
                    <span>我的电台</span>
                    <span>(9)</span> 
                </div>
                
            </div> 
        </div>
        <div class="my-list">
            <img src="../../img/icon-4.png" class="image1">    
            <div class="font">
                <div>
                    <span>我的收藏</span>
                    <span>(30)</span> 
                </div>
            </div>     
        </div> 
        </div>
    <!--第一个下拉-->
        <div style="background-color:#eee;width:100%"  >
            <a class="dianji" href="#"  @click="xiala"> <span class="mui-icon mui-icon-arrowright" style="font-size:10px"></span>创建的歌单(3)</a>
            <!--下拉的第一个 -->
            <div class="en" v-if="open" style="display:flex;height:50px;width:100%;background-color:#fff;border-bottom:1px solid #eee">
                <img style="width:40px;height:50px" src="../../img/jj.png" alt="">
                <div style="display:flex;flex-direction:column;justify-content:center;align-item:center;margin-left:10px;">
                    <span style="font-size:14px;">我喜欢的音乐</span> 
                    <span style="font-size:10px;">13首</span> 
                </div> 
            </div>
            <!--下拉的第二个 -->
            <div class="en" v-if="open" style="display:flex;height:50px;width:100%;background-color:#fff;border-bottom:1px solid #eee">
                <img style="width:40px;height:50px" src="../../img/jj.png" alt="">
                <div style="display:flex;flex-direction:column;justify-content:center;align-item:center;margin-left:10px;">
                    <span style="font-size:14px;">HH</span> 
                    <span style="font-size:10px;">2首</span> 
                </div>   
            </div>

        </div> 
        <!--第二个下拉-->
        <div style="background-color:#eee;width:100%"  >
            <a class="dianji" href="#"  @click="xiala2"> <span class="mui-icon mui-icon-arrowright" style="font-size:10px"></span>收藏的歌单(3)</a>
            <!--下拉的第一个 -->
            <div class="en" v-if="show" style="display:flex;height:50px;width:100%;background-color:#fff;border-bottom:1px solid #eee">
                <img style="width:40px;height:50px" src="../../img/jj.png" alt="">
                <div style="display:flex;flex-direction:column;justify-content:center;align-item:center;margin-left:10px;">
                    <span style="font-size:14px;">我喜欢的音乐</span> 
                    <span style="font-size:10px;">13首</span> 
                </div> 
            </div>
            </div>

       

    </div>
</template>
<script>
    import Header2 from  "../subcomponents/Header2.vue"
    export default{
        components:{
            'header2-box':Header2,
        },
        data(){
            return{
                open:true,
                show:false,
            }
        },
        methods:{
            xiala:function(){
            this.open = !this.open
            },
            xiala2:function(){
            this.show = !this.show
            },
        },
        created(){ }
    }    
</script>
<style>
/**点击下拉 */
.dianji{
    font-size:12px;
    color:#000;
}
.lie-list{
    font-size:14px;
    
}
.lie-list{
  margin-top:10px;

}
.my{
 
  z-index:999;

}
.my-list {
  display: flex;
  height: 50px;
  line-height: 50px;
  background-color: rgb(247, 247, 247);
  border-bottom:1px solid #eee;
  background-color:#fff;
}
.my-list img {
  height: 25px;
  width: 25px;
 
}

.image1 {
  margin: 0.8em 0.5em;
}

.my .my-tx{
    display:flex;
    justify-content:space-around;
    border-bottom:1px solid #eee;
    align-items:center;
    
}
.my{
    margin:20px 0;
    width:100%;
    height:100px;
    background-color:#fff;
    border-radius:11px;
   
}
.my .my-tx{
    margin:20px 0;
     height:70px;
}

.my .my-tx .kthy{
    border:1px solid #D43C33;
    color:#D43C33;
    padding:5px 10px;
    font-size:14px;
     border-radius:20px;
}
.my img{
     border-radius:50%;
       height: 50px;
        width: 50px;
}

.my .my-ck{
    display:flex;
    justify-content:space-around;
    align-items:center;
    font-size:11px;
    margin-top:-15px;
    color:#aaa;
}


</style>

