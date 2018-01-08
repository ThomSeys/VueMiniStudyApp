<template>
	<div class="header">
	<div class="menu-btn" v-on:click="openMenu()" v-bind:class="open ? 'open' : ''">
			<font-awesome-icon v-if="!open" icon="bars" />
			<font-awesome-icon v-if="open" icon="times" />
	</div>
	</div>
</template>

<script>
	import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
	import { faCoffee } from '@fortawesome/fontawesome-free-solid'
	export default {
  name: 'Header',
  data () {
    return {
			open:false
    }
  },
	components:{FontAwesomeIcon},
	methods:{
		openMenu(){			
			this.open = !this.open
			EventBus.$emit('OpenMenu')
		}
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	h1,
	h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}

	.menu-btn{
		height:60px;
		float:right;
		width:60px;
		background-color:#101421;
		line-height:60px;
		cursor:pointer;
		transition:all 0.12s linear;

		&:hover, &.open{
			color:#101421;
			background-color:#ffffff;
			width:70px;
		}
		
	}

	.header{
		position:fixed;
		top:0;
		left:0;
		right:0;
		height:60px;
		background-color:rgba(25,31,51,1);
		color:#ffffff;
		border-bottom:1px solid #101421;
		box-shadow: 0 2px 10px rgba(16,20,33,0.5);
	}
</style>