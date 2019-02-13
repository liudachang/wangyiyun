<template>
    <div class="app">
        <!--头部导航-->
        <header2-box></header2-box>
       
       <!--头部导航-->
       <div>
            <ul class="ljul">
                <li><router-link to="/Home" class="a">推荐</router-link></li>
                <li><router-link to="/Friends" class="a">LOOK直播</router-link></li>
                <li><router-link to="/Diantai" class="a">广场</router-link></li>
                <li><router-link to="/Diantai" class="a">去年夏天</router-link></li>
                <li><router-link to="/Diantai" class="a">现场</router-link></li>
                <li><router-link to="/Diantai" class="a">翻唱</router-link></li>
                <li><router-link to="/Diantai" class="a">听BGM</router-link></li>
                <li><router-link to="/Diantai" class="a">MV</router-link></li>
            </ul>
        </div>
        <!---->
        <div class="mui-card">
				<div class="mui-card-header mui-card-media" style="height:40vw;background-image:url(../../img/hh.jpg)"></div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>Posted on January 18, 2016</p>
						<p style="color: #333;">这里显示文章摘要，让读者对文章内容有个粗略的概念...</p>
					</div>
				</div>
				<div class="mui-card-footer">
					<a class="mui-card-link">Like</a>
					<a class="mui-card-link">Read more</a>
				</div>
			</div>
    </div>
</template>
<script>
    import Header2 from  "../subcomponents/Header2.vue"
    export default{
        components:{
            
            'header2-box':Header2
        },
        data(){
            return{}
        },
        methods:{},
        created(){}
    }    
</script>
<style>
.app{background-color:#fff;}
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
</style>

