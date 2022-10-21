<script setup>
import HelloVue from '@/components/HelloVue.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Todo from '@/views/Todo.vue'
import Nav from '@/components/Nav.vue'

</script>

<template>
  <Nav></Nav>
  <!-- <router-link to="/">Home </router-link>
  <router-link to="/about">About </router-link>
  <router-link to="/todo">Todo </router-link> -->
  <hr>
  <router-view></router-view>
  <!-- 根據路由載入的 component 會顯示在這裡 -->

  <!-- <div class="row">
    <div class="col-4"><HelloVue></HelloVue></div>
    <div class="col-4"><HelloVue></HelloVue></div>
    <div class="col-4"><HelloVue></HelloVue></div>
  </div> -->

  <div class="col-4"><HelloVue></HelloVue></div>
  
</template>

<style scoped>

</style>
