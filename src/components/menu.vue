<template>
  <div class="menu" v-bind:class="open ? 'open' : ''">
    <ul>
      <li v-if="menuItems != undefined" v-for="(item, $index) in menuItems">
          <router-link :to="item.url">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Menu from '@/models/menu'

export default {
  name: 'Header',
  data () {
    return {      
      open: false,
      menuItems:undefined
    }
  },
  mounted(){
    EventBus.$on('OpenMenu', this.openMenu);
  },
  created(){
    this.init();
  },
  beforeDestroy () {
    EventBus.$off('OpenMenu')
  },
  methods: {
    openMenu () {
      this.open = !this.open
    },
    init(){
      Menu.all()
      .then(data => {
          loading:false
          this.menuItems = data
        })
    }
  }
}
</script>

<style scoped lang="less">
  .menu{
    height:calc(~"100vh - 60px");
    width:80vw;
    position:fixed;
    top:60px;
    left:100vw;
    background-color:#ffffff;
    color:#101421;
    padding: 2rem;
    transition:all 0.12s linear;

    &.open{
      transform: translateX(-80vw);
    }

    ul{
      list-style:none;
      text-align:left;
      padding-left:0;
      li, a{
          color:#101421;
          font-size:1.25rem;
          text-decoration:none;
          display:bock;
          padding: 0.5rem;
      }
    }
  }
</style>
