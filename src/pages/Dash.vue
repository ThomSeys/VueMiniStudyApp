<template>
	<div class="dash">
		<section class="page-header">
			<img src="https://unsplash.it/1200/800?image=100" />
			<svg preserveAspectRatio="none" viewBox="0 0 40 100">
      	<polygon points="100,100 100,0 0,100" opacity="1"></polygon>
			</svg>

			<section class="page-title">
				<h1>Overview</h1>
			</section>
		</section>
	</div>
</template>

<script>
	export default {
  name: 'Dashboard',
  data () {
    return {
    }
  }
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
			opacity:0.2;
			width:100%;
			fill:#121421;
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
			width:50%;
			font-size: 3rem;
			text-transform:uppercase;
			h1{
			font-weight:bold;
			margin-bottom:0;
			text-shadow:0 1px 1px #333333;
			}
		}
	}
</style>