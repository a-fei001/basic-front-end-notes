<template>
  <div>
    姓名：<input v-model="userInfo.user"/> {{ userInfo.user }} <br/>
    薪水：<input type="number" v-model="userInfo.salary"> {{ userInfo.salary }} <br/>
    <button v-on:click="addSalary">加钱！！！</button>
  </div>
</template>



<script setup>
import { reactive } from 'vue';

//对象想要双向绑定 用reactive包裹
//实际是包裹成了一个与ref前者不同的对象形式 没有增加一层属性 可以直接正常用
//其实用ref包裹也行 但是要多加一个.value,如：userInfo.value.user...
let userInfo = reactive({
  user:'Jack',
  salary:500000
});
function addSalary(){
  userInfo.salary += 10000;
}


// /* 简化写法二-->外部Typescript文件引入 */
// import MySalary from './components/MySalary';
// let {user,salary,addSalary} = MySalary();



// //简化写法 将setup写到<script>标签内 
// //不需要特地返回
// import { ref } from 'vue';
// let user = ref('jack');
// let salary = ref(500000);
// function addSalary(){
//   /*
//   加上.value 是因为ref()函数将其封装成了一个对象 
//   在template可用'{{}}'直接访问 在<script>中要加.value 访问该对象value属性 
//   */
//   salary.value += 10000;
// }



// /* 完整写法 */
// import { ref } from 'vue';
// export default{
//   setup(){/* 引用ref函数 和template绑定 */
//     let user = ref('jack');
//     let salary = ref(500000);
//     function addSalary(){
//       salary.value += 10000;
//     }
//     /* 怎样返回是你的自由 */
//     return {user,salary,addSalary};
//   }
// }
</script>

<style>

</style>




<!-- OptionsAPI -->
<!-- scoped表示该样式只在当前页面生效 -->
<!-- <template>
<div>
  姓名：<input v-model="user"/> {{ user }} <br/>
  薪水：<input type="number" v-model="salary"> {{ salary }} <br/>
  <button v-on:click="addSalary">加钱！！！</button>
  <hr>
  <div>
    <button v-on:click="changeUserInfo">展示个人详细信息</button>
  </div>
  <div class="userInfo" v-if="this.showUserInfo">
    <p>年龄：<input type="number" v-model="userInfo.age"/></p>
    <p>性别：<input type="radio" value="1" v-model="userInfo.gender">男<input type="radio" value="2" v-model="userInfo.gender">女</p>
    <p>岗位：<select v-model="userInfo.department">
      <option value="dev">开发</option>
      <option value="test">测试</option>
      <option value="maintain">运维</option>
    </select>
    </p>
    <p>技术：<span v-for="(e, index) in userInfo.skills" :key="index">{{ e }}</span></p>
    <p>学习新技术：<input v-model="newSkill"/><button v-on:click="learnSkill">学习！</button></p>
    <p>个人信息汇总{{ userInfo }}</p>
  </div>
</div>  
</template>

<script>
export default{
  data(){
    return{
      user:"张化",
      salary:500000,
      userInfo:{
        age:0,
        gender:1,
        department:'',
        skills:['java','python','vue']
      },
      newSkill:'',
      showUserInfo:false
    }
  },
  methods:{
    addSalary(){
      this.salary += 10000;
    },
    learnSkill(){
      this.userInfo.skills.push(this.newSkill);
    },
    changeUserInfo(){
      this.showUserInfo = !this.showUserInfo;
    }
  }
}
</script>

<style scoped>
/* scoped表示该样式只在当前页面生效 */
.userInfo{
  background-color: aquamarine;
  width: 100%;
  margin: auto;
}

.userInfo span{
background-color: yellow;
margin: auto;
border: 1px;
border-radius: 5px;
}
</style> -->








<!-- 原有Vue3代码 -->
<!-- <script wsetup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!11" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->
