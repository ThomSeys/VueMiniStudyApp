<template>
	<div id="app">
		<app-header></app-header>
		<app-menu></app-menu>
		<router-view></router-view>
	</div>
</template>

<script>
  import appHeader from "@/components/header"
	import appMenu from "@/components/menu"
  export default {
    name: 'app',
		components:{appHeader, appMenu}
  }
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
	body{
		background-color:#1A2036;
	}
</style>