<template>
  <section class="user-section">
    <div class="user-picture">
      <div class="image-container">
        <avatar username="Thomas Seyssens"></avatar>
      </div>
    </div>
    <div class="user-name">
      <p>Thomas Seyssens</p>
    </div>
    <div class="user-function">
      <p>Developer</p>
    </div>
  </section>
</template>

<script>
import Avatar from 'vue-avatar'
export default {
  components:{Avatar}
}
</script>

<style scoped lang='less'>
  .user-section{
    .user-picture{
      .vue-avatar--wrapper{
          margin:2rem auto 1rem;
          box-shadow:0 2px 3px rgba(0,0,0,0.8);
      }
    }
    .user-name{
      color:#ffffff;
      p{
        margin-bottom:0;
      }
    }
    .user-function{
      color:#DEDEDE;
      font-size:0.875rem;
      margin-top:6px;
      padding-top:5px;
      position:relative;
      &:before{
        content:"";
        display:block;
        width:20px;
        position:absolute;
        left: calc(~"50% - 10px");
        top:0;
        height:1px;
        background-color:#1A2036;
      }
    }
  }
</style>
