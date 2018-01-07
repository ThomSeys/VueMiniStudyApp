<template>
  <section class="page-header">
			<img :src="image" />
			<svg preserveAspectRatio="none" viewBox="0 0 40 100">
      	<polygon points="100,100 100,0 0,100" opacity="1"></polygon>
			</svg>

			<section class="page-title">
				<h1>{{title}}</h1>
			</section>
  </section>  
</template>

<script>
export default {
  props:['title', 'image']
}
</script>

<style>

</style>
