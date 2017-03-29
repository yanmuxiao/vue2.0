<template>
	
	<div id="header" class="header">

		<div class="header-contain">

			<h1 class="header-title">vue-router</h1>
			<div class="header-other"></div>
			<ul class="header-list">
				<li><router-link to="/">博客</router-link></li>
				<li><router-link to="/other">评论</router-link></li>
				<li>热门</li>
			</ul>

		</div>

	</div>

</template>

<script>
	
	export default {
		name: 'header',
		data () {
			return {}
		}

	}



</script>


<style>

	.header {
		background-color: #afafaf;
	}
	.header-contain {
		height: 50px;
		width: 90%;
		margin: 0 auto;
		display: flex;
		align-items:center;
	}
	.header-title {
	}
	.header-other {
		flex-grow: 1;
	}
	.header-list {
		display: flex;
		align-items:center;
	}
	.header-list li {
		margin-left: 30px;
	}


</style>






