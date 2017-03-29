<template>
	
	<div id="mainContent" class="mainContent">

		<div class="MC-contain">
			这里是mainContent!!!!{{$route.params.id}}
		</div>

	</div>

</template>


<script>
	
	export default {

		name: 'mainContent',
		data () {
			return {}
		}

	}



</script>


<style>
	
	.mainContent {
		flex-grow: 1;
		background-color: #ff0;
		height: 400px;
		padding-top: 20px;
	}	

</style>






