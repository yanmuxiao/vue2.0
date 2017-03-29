<template>
	
	<div id="mainContent1" class="mainContent1">

		<div class="MC-contain">
			这里是mainContent1!!!!{{$route.params.id}}
		</div>

	</div>

</template>


<script>
	
	export default {
	
		name: 'mainContent1',
		data () {
			return {}
		}

	}



</script>


<style>
	
	.mainContent1 {
		flex-grow: 1;
		background-color: #ff0;
		height: 400px;
		padding-top: 20px;
	}	

</style>






