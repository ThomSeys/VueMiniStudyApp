<template>
  <section class="user-section">
    <div class="user-picture">
      <div class="image-container">
        <avatar username="Thomas Seyssens" backgroundColor="#101421" color="white"></avatar>
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
    background-color:#ffffff;
    padding-top:2.125rem;
    padding-bottom:2.125rem;

    .user-picture{
      .vue-avatar--wrapper{
          margin:0 auto 1rem;
          box-shadow:0 2px 3px rgba(0,0,0,0.8);
      }
    }
    .user-name{
      color:#101421;
      font-weight:bold;
      p{
        margin-bottom:0;
      }
    }
    .user-function{
      color:#101421;
      font-size:0.875rem;
      margin-top:6px;
      padding-top:5px;
      margin-bottom:0;
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
      p{
        margin-bottom:0;
      }
    }
  }
</style>
