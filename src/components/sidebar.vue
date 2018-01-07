<template>
  <section class="side col-3">
    <user-section></user-section>
    <div class="user-navigation">
      <ul>
        <router-link to="/" tag="li"><font-awesome-icon icon="home"></font-awesome-icon> Dashboard</router-link>
        <router-link to="/messages" tag="li"><font-awesome-icon icon="comments"></font-awesome-icon> Messages</router-link>
      </ul>
    </div>
  </section>
</template>

<script>
  import userSection from "./user-section.vue"
	import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
	import { faCoffee } from '@fortawesome/fontawesome-free-solid'
  export default {
    components:{userSection, FontAwesomeIcon}
  }
</script>

<style lang="less">
  .side{
    height:calc(~"100vh - 60px");
    background-color:#101421;
		box-shadow: 3px 0 10px rgba(16,20,33,0.5);
  }
  .user-navigation{
    ul{
      padding-left:0;
      li{
        text-align:left;
        display:block;
        margin:0;
        padding: 0.5rem 1rem 0.5rem 3rem;
        cursor:pointer;
        color:#ffffff;
        position:relative;
        transition:all 0.15s linear;
        svg{
          position:absolute;
          left:1rem;
          top:0.75rem;
        }

        &:hover{
          background-color:#202634;
        }
      }
    }
  }
</style>
