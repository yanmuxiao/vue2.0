<template>
	
	<div id="aside" class="aside">

		<div class="aside-contain">
			<ul>
				<li>
					首页
					<ul>
						<router-link to="/" tag="li">首页1</router-link>
						<router-link to="/other/123" tag="li">首页2</router-link>
					</ul>
				</li>
				<li><router-link to="/other">商品列表</router-link></li>
				<li><router-link to="/">添加商品</router-link></li>
				<li><router-link to="/">管理员</router-link></li>
			</ul>
		</div>

	</div>

</template>


<script>
	
	export default {

		name: 'aside',
		data () {
			return {}
		}

	}



</script>


<style>
	
	
	
	.aside-contain {
		width: 200px;
		height: 400px;
		padding-top: 20px;
		background-color: #666;
	}
	.aside-contain ul li {
		line-height: 2;
		color: #fff;
	}
	

</style>






