<template>
    <div class="app">
        <!--头部导航-->
        <header2-box></header2-box>
       <div>
            <ul class="ljul">
                <li><router-link to="/Home" class="a">推荐</router-link></li>
                <li><router-link to="/Friends" class="a">朋友</router-link></li>
                <li><router-link to="/Diantai" class="a">电台</router-link></li>
            </ul>
        </div>
        <h1>这是电台页面</h1>
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
</style>

