<template>
	<view>
		<view class="top-bar">
			<view class="top-bar-title">当前定位城市</view>
			<view class="top-bar-box">
				<view class="top-bar-location">{{tmpCity}}</view>
				<view class="top-bar-relocate-button" @click="relocate">
					<u-icon name="reload" size="28"></u-icon>
					<view class="top-bar-relocation-text">重新定位</view>
				</view>
			</view>
		</view>

		<view>
			<u-index-list :scrollTop="scrollTop">
				<view v-for="(item, index) in cityList" :key="index">
					<u-index-anchor :index="item.letter" />
					<view v-if="item.data">
						<view v-for="(city,index) in item.data" :key="index" @click.native="onClick({city:city})">
							<view class="indexlist-cell">
								<view>{{city}}</view>
							</view>
						</view>
					</view>
				</view>
			</u-index-list>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				tmpCity: '',
				cityList: [{
					letter: 'A',
					data: [
						'鞍山',
						'安庆',
						'安阳',
						'阿拉善',
						'阿坝',
						'安顺',
						'阿里',
						'安康',
						'阿克苏',
						'阿勒泰',
						'阿拉尔'
					]
				}, {
					letter: 'B',
					data: [
						'北京',
						'保定',
						'包头',
						'本溪',
						'蚌埠',
						'北海',
						'滨州',
						'宝鸡',
						'毫州',
					]
				}]
			}
		},
		onLoad: function() {
			// const eventChannel = this.getOpenerEventChannel();
			// eventChannel.emit('acceptDataFromOpenedPage', {
			// 	data: 'test'
			// });
		},
		methods: {
			relocate() {
				
			},
			onClick(e){
				this.tmpCity = e.city; 
				const eventChannel = this.getOpenerEventChannel();
				eventChannel.emit('acceptDataFromOpenedPage', {
					city: e.city
				});
			}
		},
	}
</script>

<style>
	.top-bar {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}

	.top-bar-title {
		padding: 12rpx 28rpx;
		font-family: PingFangSC-Medium;
		font-size: 28rpx;
		color: #1F2129;
		letter-spacing: 0;
		line-height: 40rpx;
		font-weight: 500;
	}

	.top-bar-box {
		width: 100%;
		padding: 12rpx 28rpx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}

	.top-bar-location {
		padding: 12rpx 28rpx;
		height: 72rpx;
		width: 142rpx;
		text-align: center;
		background: #F7F8FC;
		border-radius: 4rpx;
	}

	.top-bar-relocate-button {
		padding-left: 28rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.top-bar-relocation-text {
		padding-left: 6rpx;
		font-family: PingFangSC-Regular;
		font-size: 24rpx;
		color: #1F2129;
		letter-spacing: 0;
		line-height: 36rpx;
		font-weight: 400;
	}
	
	.indexlist-cell {
		display: flex;
		align-items: center;
		box-sizing: border-box;
		width: 100%;
		padding: 20rpx 24rpx;
		overflow: hidden;
		color: #323233;
		font-size: 28rpx;
		line-height: 48rpx;
		background-color: #fff;
	}
</style>
