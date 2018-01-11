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


</style>