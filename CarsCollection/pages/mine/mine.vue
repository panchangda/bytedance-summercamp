<template>
	<view>
		<view v-if="isLogIn" class="background">
			<view class="u-flex u-row-left head">
				<image class="avatar" src="../../static/默认头像.png">
				</image>
				<view class="flex-column">
					<view class="username">{{id}}</view>
					<view class="u-flex u-row-left">
						<view class="signature">{{signature}}</view>
						<!-- 						<image src="" @click="editSignature"></image> -->
					</view>
				</view>
			</view>
			<view class="divider"></view>
			<u-cell-group>
				<u-cell-item title="我的试驾" :title-style="titleStyle" index="0" @click="clickCell">
					<image slot="icon" src="../../static/编组.png" class="icon"></image>
				</u-cell-item>
				<u-cell-item title="我的评分" :title-style="titleStyle" index="1" @click="clickCell">
					<image slot="icon" src="../../static/懂车分.png" class="icon"></image>
				</u-cell-item>
			</u-cell-group>
			<view class="divider"></view>
			<view @click="switchAccount" class="button-switch u-flex u-row-center u-col-center">
				切换账号
			</view>
		</view>
		<view v-else class="content">
			<view class="login-title">登录车型大全</view>
			<u-field class="login-form" v-model="id" label="用户名" placeholder="请输入您的用户名">
			</u-field>
			<u-field class="login-form" :password="true" v-model="password" label="密码" placeholder="请输入您的密码">
			</u-field>
			<view class="u-flex u-col-center u-row-center login-button" @click="clickConfirm">确认</view>
			<view class="login-description">未注册用户会自动注册并登录</view>
		</view>
	</view>
</template>

<script>
	// import request from '/util/request.js'
	export default {
		data() {
			return {
				isLogIn: 'false',
				id: 20181832,
				password: '',
				signature: '专注于性能、操控、改装、乐趣的汽车视频',
				titleStyle: {
					'font-family': 'PingFangSC-Regular',
					'font-size': '32rpx',
					'color': '#1F2129',
					'letter-spacing': 0,
					'line-height': '44rpx',
					'font-weight': 400,
				},
			}
		},
		onLoad() {
			this.isLogIn = getApp().globalData.isLogIn;
			if (!this.isLogIn) {
				uni.setNavigationBarTitle({
					title: '登录'
				})
			}
		},
		methods: {
			clickConfirm(e) {
				let data = {
					id: this.id,
					password: this.password,
				};
				uni.request({
					url: 'http://409yv38641.qicp.vip/login',
					method:'GET',
					data: {
						id: this.id,
						password: this.password,
					},
					success:res=>{
						console.log(res);
						//密码错误
						if(res.data.code==444){
							uni.showToast({
								title:'密码错误！请重新输入！',
								icon:'none',
								duration: 2000
							});
							return;
						}
						this.isLogIn = true;
						getApp().globalData.isLogIn = true;
						getApp().globalData.id = this.id;
						getApp().globalData.token = res.data.data;
						uni.setNavigationBarTitle({
							title: '我的'
						})
						uni.showToast({
							title:'登录成功！',
							duration: 2000
						});
						console.log(getApp().globalData.token)
					},
					fail:err=>{
						console.log(err)
					}
				})
			},
			editSignature(e) {
			
			},
			clickCell(index) {
				let option = '?id=' + this.id;
				if (index == 0) {
					uni.navigateTo({
						url: '/pages/mine/testDrive' + option,
					})
				} else if (index == 1) {
					uni.navigateTo({
						url: '/pages/mine/score' + option,
					})
				}
			},
			switchAccount() {
				this.isLogIn = false;
				getApp().globalData.isLogIn = false;
				uni.setNavigationBarTitle({
					title: '登录'
				})
			},
		}
	}
</script>

<style>
	.background {
		position: absolute;
		z-index: 0;
		height: 100%;
		width: 100%;
		background: #F7F8FC;
	}

	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 24rpx;
	}

	.head {
		height: 15%;
		background-image: linear-gradient(180deg, #E8ECF7 0%, #FFFFFF 100%);
	}

	.divider {
		height: 12rpx;
	}

	.flex-column {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}

	.avatar {
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
		margin: 48rpx 24rpx;
	}

	.username {
		font-family: PingFangSC-Medium;
		font-size: 48rpx;
		color: #1F2129;
		letter-spacing: 0;
		line-height: 68rpx;
		font-weight: 500;
	}

	.signature {
		font-family: PingFangSC-Regular;
		font-size: 24rpx;
		color: #979AA8;
		letter-spacing: 0;
		line-height: 36px;
		font-weight: 400;
	}

	.icon {
		width: 40rpx;
		height: 40rpx;
		padding-right: 24rpx
	}

	.button-switch {
		height: 8%;
		font-family: PingFangSC-Regular;
		font-size: 32rpx;
		color: #1F2129;
		letter-spacing: 0;
		line-height: 44rpx;
		font-weight: 400;
		background-color: #FFFFFF;
	}

	.login-title {
		align-self: flex-start;
		margin: 48rpx 36rpx;
		font-family: PingFangSC-Medium;
		font-size: 48rpx;
		color: #1F2129;
		letter-spacing: 0;
		line-height: 68rpx;
		font-weight: 500;
	}

	.login-button {
		width: 638rpx;
		height: 88rpx;
		margin-top: 48rpx;
		background: #FFCC32;
		border-radius: 4rpx;
		font-family: PingFangSC-Regular;
		font-size: 32rpx;
		color: #1F2129;
		letter-spacing: 0;
		line-height: 44rpx;
		font-weight: 400;
	}

	.login-form {
		margin-top: 12rpx;
		width: 686rpx;
	}

	.login-description {
		padding: 12rpx;
		font-family: PingFangSC-Regular;
		font-size: 24rpx;
		color: #979AA8;
		letter-spacing: 0;
		text-align: center;
		line-height: 36rpx;
		font-weight: 400;
	}
</style>
