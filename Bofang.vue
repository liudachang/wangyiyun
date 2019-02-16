<template>
    <div class="app">
        <!--头部导航-->
        <header2-box></header2-box>
       
       <!--头部导航 滑动-->
    
            <ly-tab v-model="selectedId" :items="items" :options="options" style="margin-top:10px;"></ly-tab>
       
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
            return{
                selectedId: 0,
      items: [
        {label: '推荐'},
        {label: 'LOOK直播'},
        {label: '广场'},
        {label: '哎呦'},
        {label: '现场'},
        {label: '翻唱'},
        {label: '听BGM'},
        {label: 'MV'},
        {label: '舞蹈'},
        {label: 'ACG音乐'}
      ],
      options: {
        activeColor: '#1d98bd'
        // 可在这里指定labelKey为你数据里文字对应的字段
      },
            }
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

