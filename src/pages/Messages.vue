<template>
	<div class="dash">
		<div class="row no-gutters">
			<side-bar></side-bar>
			<section class="col-9">
				<page-header title="Messages" image="https://unsplash.it/1200/800?image=151"></page-header>
			</section>
		</div>
	</div>
</template>

<script>
	import pageHeader from "../components/page-header.vue"
	import sideBar from "../components/sidebar.vue"
	export default {
  name: 'Dashboard',
  data () {
    return {
    }
  },
	components:{pageHeader, sideBar}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
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

	.page-header{
		padding:0;
		color:#ffffff;
		position:relative;
		overflow:hidden;
		padding-bottom:40%;

		svg{
			position:absolute;
			bottom:0;
			right:0;
			opacity:0.5;
			width:100%;
			fill:#121421;
			transition:all 0.2s linear;
			height:200%
		}

		&:hover{
			svg{
				height:150%;
				opacity:0.2;
			}
		}

		img{
			width:100%;
			position:absolute;
			top:0;
			left:0;
		}
		.page-title{
			position:absolute;
			right:1rem;
			bottom:1rem;
			max-width:80%;
			font-size: 2.5rem;
			text-transform:uppercase;
			text-align:right;
			h1{
				font-weight:bold;
				margin-bottom:0;
				text-shadow:0 1px 1px #333333;
			}
		}
	}
</style>