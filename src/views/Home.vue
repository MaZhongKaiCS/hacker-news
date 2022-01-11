<template>
  <div class="home">
    <div class="nav">
        <p class="title">Hacker News</p>
        <p class="navItems">new</p>
        <p class="navItems2">|</p>
        <p class="navItems">past</p>
        <p class="navItems2">|</p>
        <p class="navItems">comments</p>
        <p class="navItems2">|</p>
        <p class="navItems">ask</p>
        <p class="navItems2">|</p>
        <p class="navItems">show</p>
        <p class="navItems2">|</p>
        <p class="navItems">jobs</p>
        <p class="navItems2">|</p>
        <p class="navItems">submit</p>
    </div>
    <commentBox class="commentBox"></commentBox>
  </div>
</template>

<script>


import commentBox from '@/components/commentBox.vue';


export default {
  name: 'Home',
  components: {
    commentBox
  }
}
</script>

<style lang="scss" scoped>
.home {
    .nav{
        width: 100%;
        height: 50px;
        background-color: orange;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .title{
          font-size: 20px;
          font-weight: 800;
        }
        .navItems {
          margin: auto 10px;
        }
      }
      .commentBox{
        margin: 20px 0 0 0 ;
      }

  }
</style>
