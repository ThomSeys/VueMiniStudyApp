<template>
	<div id="app">
		<app-header></app-header>
		<app-menu></app-menu>
		<div v-bind:class="open ? 'blur' : ''">
				<router-view></router-view>
			
		</div>
	</div>
</template>

<script>
  import appHeader from "./components/header.vue"
	import appMenu from "./components/menu.vue"
  export default {
    name: 'app',
		components:{appHeader, appMenu},
		mounted(){
			EventBus.$on('OpenMenu', this.openMenu);
		},
		data(){
			return{
				open:false
			}
		},
		methods:{
			openMenu(){
				this.open = !this.open
			}
		}
  }
</script>

<style>
	#app {
		font-family: 'Open Sans Condensed', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
	body{
	background: #1CD8D2;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #93EDC7, #FFFFFF);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #93EDC7, #FFFFFF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
margin:0;
	}
	.blur{
		filter:blur(2px)
	}

</style>