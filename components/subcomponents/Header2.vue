<template>
  <div class="app_head header nr">
                <div>
                    <img src="../../img/bofang.png" >
                </div>
                <div class="dw search ">
                    <router-link to="/My" class="a bgcolor"><img src="../../img/yun.png" > </router-link>
                    <router-link to="/Home" class="a  bgcolor"><img src="../../img/bf.png" ></router-link>
                    <router-link to="/Bofang" class="a  bgcolor"><img src="../../img/zjbf.png" ></router-link>
                </div>
                <div>
                    <img src="../../img/sl.png" class="bofang">
                </div>

    </div>


    
</template>
<script>
    export default{
        data(){
            return{}
        },
        methods:{

        },
        created() {
            
        },
    }
</script>
<style>
 .header{
       height: 60px;
       width: 100%;
       background-color:#D43C33;
       position: fixed;
       top: 0;
       left: 0;
       z-index: 999;/*数字越大元素越靠上显示 */
       margin-bottom:30px;
       
   }
   .nr{
    padding-top: 10px;
    padding-left: 5px; 
    display: flex;
    justify-content:space-around;
    align-items:center;
   }
   /*.search::before{
       display:table;
        position: absolute;
        top: 50%;
        left: 0%;
        color: white;
        margin-top: -18px;
        margin-left:10px;
        font-family: Muiicons;
        content: '\E466';
       
   }*/
  
   /*input父元素*/
   .search{
       width: 100%;
         display: flex;
    justify-content:center;
    margin:0 10px;
   }
   .dw{
       position: relative;
       
   }
   /*搜索框*/
   .search .bgcolor{
       padding:0;
       padding-left:30px;
       background-color:#D43C33;
       background-color:rgba(0,0,0,0.1) !important;
       /*border-radius: 30px!important;
       color:rgba(255, 255, 255, 0.781);*/
       font-size: 14px;
   }
   /*右侧播放按钮*/
   .bofang{
    width: 22px;
    height: 22px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 7px;
   }
   img{
       width:20px;
       height:20px;
   }
</style>