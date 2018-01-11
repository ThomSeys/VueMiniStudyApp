<template>
	<div class="dash">
		<div class="row no-gutters">
			<side-bar></side-bar>
			<section class="col-9 content">
				<page-header title="Dashboard" image="https://unsplash.it/1200/800?image=100"></page-header>
				<div class="dash-overview">
					<div class="row">
						<dashboard-block v-if="blocks.length > 0" :data="blocks"></dashboard-block>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
	import pageHeader from "../components/page-header.vue"
	import sideBar from "../components/sidebar.vue"
	import dashboardBlock from "../components/dashboard-block.vue"
	import dash from "../models/dashboardBlock.js"

	export default {
  name: 'Dashboard',
  data () {
    return {
			blocks:[]
    }
  },
	created(){
		this.init();
	},
	components:{pageHeader, sideBar, dashboardBlock},
	methods:{
		init(){
			dash.all()
      .then(data => {
          loading:false
          this.blocks = data
        })
		}
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	ul {
		list-style-type: none;
		padding: 0;
	}

	.content{
		height:calc(~"100vh - 60px");
		overflow:auto;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}

	.dash-overview{
		padding: 15px!important;
	}

	.page-header{
		padding:0;
		color:#93EDC7;
		position:relative;
		overflow:hidden;
		height:11.875rem;

		svg{
			position:absolute;
			bottom:0;
			right:0;
			opacity:1;
			width:100%;
			fill:#ffffff;
			transition:all 0.15s ease-out;
			height:200%
		}

		&:hover{
			svg{
				height:150%;
				fill:#101421;
			}

			.page-title{
				h1{
					color:#ffffff;
				}
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
				transition:all 0.15s ease-out;
			}
		}
	}
</style>