// 引入vue 和vuex
import Vue from 'vue' 
import Vuex from 'vuex'

// 注册vuex
Vue.use(Vuex)

//通过 state 保存状态 
const state = {
    //赋值给新的变量   
    userinfo: JSON.parse(sessionStorage.getItem('userinfo'))
    // usertext:JSON.parse(sessionStorage.getItem('usertext'))
}
//通过 mutations 主要用来操作state
const mutations = {
    // userinfo 是传过来的数据
    saveUser: function(state,userinfo){
        console.log('已经保存用户信息');
        // 将用户信息暂时存入本地存储里面 防止页面刷新用户信息丢失(关闭浏览器总动清除数据)
              // 存入
        sessionStorage.setItem('userinfo',JSON.stringify( userinfo ));     
        state.userinfo = userinfo;
        // console.log('保存后的用户信息', state.userinfo);
    },
    // saveUsertext:function (state,usertext) { 
    //     console.log('已经保存文章信息');
    //     localStorage.setItem('usertext',JSON.stringify( usertext ));
    //     state.usertext = usertext;
    //  }
}

// 创建一个仓库并暴露出去
export default new Vuex.Store({
    state,
    mutations
})