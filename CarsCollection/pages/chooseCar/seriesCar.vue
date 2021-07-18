<template>
	<view>
		<view style="position: relative;">
			<draggable-gallery class="car-images" :images="galleryImages"/>
			<image class="background" src="/static/形状结合.png"></image>
		</view>
		<view class="u-flex">
			<view class="flex-column u-flex-3">
				<view class="u-flex u-col-bottom">
					<view class="title">
						{{seriesName}}
					</view>
					<view class="description">
						{{brandName}}/{{seriesTag}}
					</view>
				</view>
				<view class="u-flex u-col-bottom">
					<view class="price">
						{{minPrice}}-{{maxPrice}}万
					</view>
					<view class="price-guide">
						指导价:{{minGuidePrice}}-{{maxGuidePrice}}万
					</view>
				</view>
			</view>
			<view class="u-flex rate-box u-flex-1">
				<u-line length="80rpx" :hair-line="false" direction="col" color="#E6E8F2" />
				<view style="position:relative" @click="score">
					<image class="rate-tag" src="/static/用户评分.png"></image>
					<view class="rate-scoreboard u-flex u-row-center u-col-center">{{rate}}分 <u-icon name="play-right-fill" size="4rpx"></u-icon> </u-icon></view>
				</view>
			</view>
		</view>
		<view class="tags">
			<view v-for="(tag,index) in tagList" :key="index" @click="clickTag(index)">
				<u-tag class="tag" :text="tag" mode="light" color="#000000"
					:bg-color="currentTag==index?'#FFFFFF':'#F7F8FC'"
					:border-color="currentTag==index?'#606370':'#F7F8FC'" shape="square" />
			</view>
		</view>
		<view class="cars">
			<view v-for="(car,index) in showCarList" :key="index">
				<view class="u-flex u-row-center">
					<view class="flex-column">
						<view class="car-name">
							{{car.year}}款 {{car.name}}
						</view>
						<view class="u-flex u-row-left">
							<view class="car-price">{{car.minPrice}}万起</view>
							<view class="car-price-guide">指导价:{{car.guidePrice}}万</view>
						</view>
					</view>
					<view class="button-test-drive" @click="clickButton(car.id)">试驾</view>
				</view>
			</view>
		</view>

		<view class="button-buttom-test-drive" @click="clickButtonBottom">
			<view class="button-buttom-title">
				立即预约试驾
			</view>
			<view class="button-buttom-description">
				{{appointment}}人已预约
			</view>
		</view>
		<view>
			<u-popup v-model="showScore" mode="bottom" height="40%" border-radius="16">
				<view class="popup">
					<image class="popup-close" @click="closeScorePopup" src="/static/icon_close.png"></image>
					<view class="popup-title">
						您觉得本车如何
					</view>
					<view class="popup-explian">
						满分5分
					</view>
					<rate-stars class="popup-stars" @reRate="userRate"/>
					<view class="popup-submit" @click="clickScoreSubmit">
						提交
					</view>
				</view>
			</u-popup>
		</view>

		<view>
			<u-popup v-model="showTestDrive" mode="bottom" height="40%" border-radius="16">
				<view class="popup">
					<image class="popup-close" @click="closeTestDrivePopup" src="/static/icon_close.png"></image>
					<view class="popup-title">
						立即预约试驾体验
					</view>
					<view class="popup-explian">
						提交信息后工作人员会在3个工作日内与您联系
					</view>
					<u-field class="popup-form" v-model="city" :disabled="true" label="城市" placeholder="请选择城市">
						<image slot="right" src="/static/list_arrow_ic.png" style="width: 24rpx;height: 24rpx;"
							@click="chooseCity"></image>
					</u-field>
					<u-field class="popup-form" v-model="name" label="姓名" placeholder="请输入您的姓名">
					</u-field>
					<u-field class="popup-form" v-model="phone" label="手机号" placeholder="请输入您的手机号">
					</u-field>
					<view class="popup-submit" @click="clickTestDriveSubmit">
						提交
					</view>
				</view>
			</u-popup>
		</view>

	</view>
</template>

<script>
	import dg from "@/components/draggable-gallery.vue"
	import rs from "@/components/rate-stars.vue"
	export default {
		components: {
			'draggable-gallery': dg,
			'rate-stars':rs,
		},
		data() {
			return {
				seriesName: '',
				brandName: '',
				seriesTag: '',
				carImageUrl: [],
				minPrice: Infinity,
				maxPrice: 0,
				minGuidePrice: Infinity,
				maxGuidePrice: 0,
				rate: 3.58,
				userScore: 0,
				tagList: ['在售'],
				currentTag: 0,
				showCarList:[],
				allCarList:[],
				// showCarList:[], [{
				// 	year: 2020,
				// 	name: '30 TFSI 进取型',
				// 	price: 20.11,
				// 	guideprice: 47.78,
				// 	id: '',
				// }, {
				// 	year: 2019,
				// 	name: '30 TFSI 运动型',
				// 	price: 18.89,
				// 	guideprice: 31.08,
				// 	id: '',
				// }, {
				// 	year: 2018,
				// 	name: '30 TFSI 精英型',
				// 	price: 22.51,
				// 	guideprice: 31.08,
				// 	id: '',
				// }, ],
				// allCarList:[], [{
				// 	year: 2020,
				// 	name: '30 TFSI 进取型',
				// 	price: 20.11,
				// 	guideprice: 47.78,
				// 	id: '',
				// }, {
				// 	year: 2019,
				// 	name: '30 TFSI 运动型',
				// 	price: 18.89,
				// 	guideprice: 31.08,
				// 	id: '',
				// }, {
				// 	year: 2018,
				// 	name: '30 TFSI 精英型',
				// 	price: 22.51,
				// 	guideprice: 31.08,
				// 	id: '',
				// }, ],
				appointment: 0,
				showScore: false,
				showTestDrive: false,
				testdrive: '',
				city: '',
				name: '',
				phone: '',
				stars: 3,
				galleryImages:[],

			}
		},
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option); //打印出上个页面传递的参数。
			if (option.name) {
				uni.setNavigationBarTitle({
					title: option.name
				});
				this.seriesName = option.name;
				this.brandName = option.brand;
				this.seriesTag = option.tag;
				this.seriesID = option.id;
			}
			uni.request({
				url:'http://409yv38641.qicp.vip/seriesCar',
				data:{
					id:option.id
				},
				success:res=>{
					console.log(res)
					let allCarList =[];
					res.data.data.forEach((item)=>{
						item.minPrice<this.minPrice?this.minPrice = (item.minPrice/10000).toFixed(2):0;
						item.minPrice>this.maxPrice?this.maxPrice = (item.minPrice/10000).toFixed(2):0;
						item.guidePrice<this.minGuidePrice?this.minGuidePrice = (item.guidePrice/10000).toFixed(2):0;
						item.guidePrice>this.maxGuidePrice?this.maxGuidePrice = (item.guidePrice/10000).toFixed(2):0;
						if(this.tagList.find((value)=>{
							return value==item.year
						})==undefined)	this.tagList.push(item.year);
						allCarList.push({
							id:item.id,
							guidePrice:(item.guidePrice/10000).toFixed(2),
							minPrice:(item.minPrice/10000).toFixed(2),
							year:item.year,
							series:item.series,
							name:item.name.slice(5)
						})
					})
					this.showCarList=allCarList;
					this.allCarList=allCarList;
					this.appointment = Math.round(Math.random()*10000);
					for(let i=0;i<36;i++){
						this.galleryImages.push('http://409yv38641.qicp.vip/img/A/奥迪/奥迪A4L/picture/'+(35-i)+'.webp'); 
					}
				},
				fail:err=>{
					console.log(err);
				}
			});
		},
		methods: {
			clickTag(e) {
				console.log(e);
				if (this.currentTag != e) {
					this.currentTag = e;
					if (e == 0) {
						this.showCarList = this.allCarList;
					} else {
						let requestYear = this.tagList[e];
						let showCarList = this.allCarList.filter(item => {
							return item.year == requestYear;
						})
						this.showCarList = showCarList;
					}
				}
			},
			userRate(e) {
				console.log(e)
				this.userScore = e + 1;
			},
			score(e) {
				this.showScore = true;
			},
			closeScorePopup(e) {
				this.showScore = false;
			},
			closeTestDrivePopup(e) {
				this.showTestDrive = false;
			},
			clickButton(e) {
				console.log(e);
				this.testdrive = e;
				this.showTestDrive = true;
			},
			clickButtonBottom(e) {
				this.testdrive = this.seriesID;
				this.showTestDrive = true;
			},
			clickTestDriveSubmit() {
				if(getApp().globalData.isLogin==false){
					uni.showToast({
						title:'请先登录',
						icon:'none',
						duration: 2000
					});
					return;
				}
				uni.request({
					url: 'http://409yv38641.qicp.vip/book',
					method: 'POST',
					data: {
						user:getApp().globalData.id,
						name: this.name,
						city: this.city,
						telephone: this.phone,
						car:this.testdrive,
					},
					header:{
						token:getApp().globalData.token,
					},
					success: res => {
						console.log(res)
						if(res.data.code == 555){
							uni.showToast({
								title:'登录信息过期，请重新登陆！',
								icon:'none',
								duration: 2000
							});
							getApp().globalData.isLogIn = false;
							uni.switchTab({
								url:'/pages/mine/mine'
							})
							return;
						}
						uni.showToast({
							title:'提交试驾成功！',
							duration: 2000
						});
						this.showTestDrive = false;
					},
					faile: err => {
						console.log(err)
					}
				})
			},
			//提交评分
			clickScoreSubmit(e) {
				if(getApp().globalData.isLogin==false){
					uni.showToast({
						title:'请先登录',
						icon:'none',
						duration: 2000
					});
					return;
				}
				uni.request({
					url: 'http://409yv38641.qicp.vip/score',
					method: 'POST',
					data: {
						user:getApp().globalData.id,
						score:this.userScore,
						series:this.seriesID,
					},
					header:{
						token:getApp().globalData.token,
					},
					success: res => {
						console.log(res)
						if(res.data.code == 555){
							uni.showToast({
								title:'登录信息过期，请重新登陆！',
								icon:'none',
								duration: 2000
							});
							getApp().globalData.isLogIn = false;
							return;
						}
						uni.showToast({
							title:'提交评分成功！',
							duration: 2000
						});
						this.showScore = false;
					},
					faile: err => {
						console.log(err)
					}
				})
			},
			chooseCity(e) {
				let _this = this;
				uni.navigateTo({
					url: '/pages/chooseCar/chooseCity',
					events: {
						acceptDataFromOpenedPage: function(data) {
							console.log(data);
							_this.city = data.city;
						},
					}
				})
			}
		},
	}
</script>

<style>
	.car-images {
		left:100rpx;
		top:0;
	}

	.background {
		position: relative;
		z-index: 99;
		width: 100%;
		height: 320rpx;
		background-image: linear-gradient(180deg, #E0E9F4 0%, #FFFFFF 35%, #FCFDFE 69%, #E0E9F4 98%);
	}

	.flex-column {
		padding: 12rpx 28rpx;
		display: flex;
		flex-direction: column;
		flex-shrink: 1;
	}

	.title {
		font-family: PingFangSC-Medium;
		font-size: 40rpx;
		color: #1F2129;
		letter-spacing: 0;
		line-height: 56rpx;
		font-weight: 500;
	}

	.description {
		padding-left: 12rpx;
		font-family: PingFangSC-Regular;
		font-size: 22rpx;
		color: #979AA8;
		letter-spacing: 0;
		line-height: 36rpx;
		font-weight: 400;
	}

	.price {
		font-family: PingFangSC-Semibold;
		font-size: 34rpx;
		color: #E62021;
		letter-spacing: 0;
		line-height: 48rpx;
		font-weight: 600;
	}

	.price-guide {
		padding-left: 12rpx;
		font-family: PingFangSC-Regular;
		font-size: 22rpx;
		color: #1F2129;
		letter-spacing: 0;
		line-height: 36rpx;
		font-weight: 400;
	}

	.box-rate {
		margin-left: auto;
	}

	.rate-tag {
		position: relative;
		left: 0;
		z-index: 1;
		margin-left: 20rpx;
		width: 136rpx;
		height: 80rpx;
	}

	.rate-scoreboard {
		position: absolute;
		bottom: 8rpx;
		z-index: 100;
		color: #1A1A1A;
		background-color: #FFCD32;
		margin-left: 20rpx;
		height: 45rpx;
		width: 136rpx;
		font-weight: 600;
		line-height: 1;
		text-align: center;
	}

	.tags {
		padding: 24rpx 20rpx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}

	.tag {
		margin: 8rpx;
	}

	.cars {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}

	.car-name {
		font-family: PingFangSC-Medium;
		font-size: 30rpx;
		color: #1F2129;
		letter-spacing: 0;
		line-height: 40rpx;
		font-weight: 500;
	}

	.car-price {
		font-family: PingFangSC-Semibold;
		font-size: 32rpx;
		color: #E62021;
		letter-spacing: 0;
		line-height: 40rpx;
		font-weight: 600;
	}

	.car-price-guide {
		padding: 12rpx;
		font-family: PingFangSC-Regular;
		font-size: 24rpx;
		color: #979AA8;
		letter-spacing: 0;
		line-height: 36rpx;
		font-weight: 400;
	}

	.button-test-drive {
		margin-left: auto;
		margin-right: 28rpx;
		width: 180rpx;
		height: 56rpx;
		background: rgba(255, 250, 233, 0.80);
		border: 1rpx solid #FFCD32;
		border-radius: 4rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-family: PingFangSC-Medium;
		font-size: 28rpx;
		color: #1F2129;
		letter-spacing: 0;
		text-align: center;
		line-height: 28rpx;
		font-weight: 500;
	}

	.button-buttom-test-drive {
		position: fixed;
		bottom: 68rpx;
		left: 32rpx;
		width: 686rpx;
		height: 88rpx;
		background: #FFCD32;
		border-radius: 4rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.button-buttom-title {
		font-family: PingFangSC-Medium;
		font-size: 32rpx;
		color: #1F2129;
		letter-spacing: 0;
		text-align: center;
		line-height: 32rpx;
		font-weight: 500;
	}

	.button-buttom-description {
		opacity: 0.6;
		font-family: PingFangSC-Regular;
		font-size: 20rpx;
		color: #000000;
		letter-spacing: 0;
		text-align: center;
		line-height: 20rpx;
		font-weight: 400;
	}

	.popup {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: inherit;
	}

	.popup-close {
		width: 32rpx;
		height: 32rpx;
		position: absolute;
		right: 32rpx;
		top: 32rpx;
	}

	.popup-title {
		padding-top: 32rpx;
		font-family: PingFangSC-Medium;
		font-size: 32rpx;
		color: #1A1A1A;
		text-align: center;
		line-height: 44rpx;
		font-weight: 500;
	}

	.popup-form {
		width: 686rpx;
	}

	.popup-explian {
		padding: 16rpx;
		font-family: PingFangSC-Regular;
		font-size: 24rpx;
		color: #666666;
		text-align: center;
		line-height: 36rpx;
		font-weight: 400;
	}
	.popup-stars{
		margin-bottom:60rpx;
	}
	.popup-submit {
		bottom: 0;
		width: 686rpx;
		height: 88rpx;

		background: #FFCD32;
		border-radius: 4rpx;

		display: flex;
		justify-content: center;
		align-items: center;

		font-family: PingFangSC-Medium;
		font-size: 32rpx;
		color: #1F2129;
		letter-spacing: 0;
		text-align: center;
		line-height: 32rpx;
		font-weight: 500;
	}
</style>
