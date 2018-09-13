<style scoped>
	.tips{
		text-align: center;
		padding: 30px;
		color: #5f6468;
		font-size: 20px;
	}
</style>

<template>
	<div class="error-container">
		<p class="tips">{{msg}}</p>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				msg: '访问地址错误或者没有权限访问该页面'
			}
		}
	}
</script>