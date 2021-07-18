<template>
	<view>
		<view class="stars">
			<view class="star" v-for="(item,index) in 5" @tap="rate(index)">
				<image class="star-icon" :src="currentIndex>=index?filledStar:emptyStar"></image>
				<view class="start-font">{{levelName[index]}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "rate-stars",
		prop: {
			initialStar: {
				type: Number,
				default: 2,
				required: true,
				validator: function(value) {
					return value >= 0
				}
			},
			showLevelName:{
				type:Boolean,
				default:true,
				require:false
			}
		},
		data() {
			return {
				currentIndex:2,
				filledStar: "data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M23.256 39.528l-10.462 4.61a1.846 1.846 0 0 1-2.582-1.875l1.152-11.375a1.846 1.846 0 0 0-.46-1.416l-7.617-8.525a1.846 1.846 0 0 1 .985-3.034l11.174-2.42c.507-.11.944-.427 1.205-.875l5.754-9.88a1.846 1.846 0 0 1 3.19 0l5.754 9.88c.261.448.698.765 1.205.875l11.174 2.42a1.846 1.846 0 0 1 .985 3.034l-7.617 8.525c-.345.387-.512.9-.46 1.416l1.152 11.375a1.846 1.846 0 0 1-2.582 1.875l-10.462-4.61a1.846 1.846 0 0 0-1.488 0z' fill='%23FFCC32' fill-rule='evenodd'/%3E%3C/svg%3E",
				emptyStar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M23.256 39.528l-10.462 4.61a1.846 1.846 0 0 1-2.582-1.875l1.152-11.375a1.846 1.846 0 0 0-.46-1.416l-7.617-8.525a1.846 1.846 0 0 1 .985-3.034l11.174-2.42c.507-.11.944-.427 1.205-.875l5.754-9.88a1.846 1.846 0 0 1 3.19 0l5.754 9.88c.261.448.698.765 1.205.875l11.174 2.42a1.846 1.846 0 0 1 .985 3.034l-7.617 8.525c-.345.387-.512.9-.46 1.416l1.152 11.375a1.846 1.846 0 0 1-2.582 1.875l-10.462-4.61a1.846 1.846 0 0 0-1.488 0z' fill='%23d9e6f2' fill-rule='evenodd'/%3E%3C/svg%3E",
				levelName: ['太差', '一般', '可以', '不错', '很棒'],
			};
		},
		methods: {
			rate(index) {
				if (index == this.currentIndex) return;
				this.currentIndex = index;
				this.$emit('reRate', index);
			}
		},
	}
</script>

<style scoped>
	.stars {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.star {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.star-font {
		font-family: PingFangSC-Regular;
		font-size: 24rpx;
		color: #666666;
		text-align: center;
		line-height: 36rpx;
		font-weight: 400;
	}

	.star-icon {
		width: 110rpx;
		height: 110rpx;
	}
</style>
