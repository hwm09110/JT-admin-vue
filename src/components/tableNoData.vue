<style scoped>
	.no-data-tips{
		text-align: center;
		padding: 15px;
		color: #5f6468;
		font-size: 14px;
	}
</style>

<template>
	<tr>
		<td :colspan="colspanNum" class="no-data-tips">{{msg}}</td>
	</tr>
</template>

<script>
	export default {
		props: {
			msg: {
				type: String,
				required: true
			},
			colspanNum: {
				type: String,
				required: true
			}
		}
	}
</script>