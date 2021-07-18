<template>
	<view>
		<view class="tags">
			<view v-for="(tag,index) in tagList" :key="index" @click="clickTag(index)">
				<u-tag class="tag" :text="tag" mode="light" color="#000000"
					:bg-color="currentTag==index?'#FFFFFF':'#F7F8FC'"
					:border-color="currentTag==index?'#606370':'#F7F8FC'" shape="square" />
			</view>
		</view>
		
		<view class="content">
			<view v-for="(series,index) in showSeriesList">
				<view class="card-series">
					<image class="card-series-image" :src="'http://409yv38641.qicp.vip/'+series.image"></image>
					<view class="card-series-info">
						<view class="card-serires-name">{{series.name}}</view>
						<view class="card-series-stars">
							我的：
							<view v-for="(item,index) in 5">
								<image class="card-series-star-icon" :src="index<=(series.myStars-1)?filledStar:emptyStar">
								</image>
							</view>
							<view style="margin-left:8rpx;">
								{{Math.round(series.myStars)}}分
							</view>
						</view>
						<view class="card-series-stars">
							综合：
							<view v-for="(item,index) in 5">
								<image class="card-series-star-icon" :src="index<=(series.overallStars-1)?filledStar:emptyStar">
								</image>
							</view>
							<view style="margin-left:8rpx;">
								{{Math.round(series.overallStars)}}分
							</view>
						</view>
						
						
					</view>
					<view class="card-serires-button" @click="reScore(index)">重新评分</view>
				</view>
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
					<rate-stars class="popup-stars" @reRate="userRate()"/>
					<view class="popup-submit" @click="clickScoreSubmit">
						提交
					</view>
				</view>
			</u-popup>
		</view>
	</view>
</template>

<script>
	import rs from "@/components/rate-stars.vue";
	export default {
		components: {

			'rate-stars':rs,
		},
		data(){
			return{
				showScore:false,
				currentTag: 0,
				tagList: ['全部','太差','一般','可以','不错','很棒'],
				filledStar: "data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M23.256 39.528l-10.462 4.61a1.846 1.846 0 0 1-2.582-1.875l1.152-11.375a1.846 1.846 0 0 0-.46-1.416l-7.617-8.525a1.846 1.846 0 0 1 .985-3.034l11.174-2.42c.507-.11.944-.427 1.205-.875l5.754-9.88a1.846 1.846 0 0 1 3.19 0l5.754 9.88c.261.448.698.765 1.205.875l11.174 2.42a1.846 1.846 0 0 1 .985 3.034l-7.617 8.525c-.345.387-.512.9-.46 1.416l1.152 11.375a1.846 1.846 0 0 1-2.582 1.875l-10.462-4.61a1.846 1.846 0 0 0-1.488 0z' fill='%23FFCC32' fill-rule='evenodd'/%3E%3C/svg%3E",
				emptyStar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M23.256 39.528l-10.462 4.61a1.846 1.846 0 0 1-2.582-1.875l1.152-11.375a1.846 1.846 0 0 0-.46-1.416l-7.617-8.525a1.846 1.846 0 0 1 .985-3.034l11.174-2.42c.507-.11.944-.427 1.205-.875l5.754-9.88a1.846 1.846 0 0 1 3.19 0l5.754 9.88c.261.448.698.765 1.205.875l11.174 2.42a1.846 1.846 0 0 1 .985 3.034l-7.617 8.525c-.345.387-.512.9-.46 1.416l1.152 11.375a1.846 1.846 0 0 1-2.582 1.875l-10.462-4.61a1.846 1.846 0 0 0-1.488 0z' fill='%23d9e6f2' fill-rule='evenodd'/%3E%3C/svg%3E",
				showSeriesList:[],
				allSeriesList:[],
				// showSeriesList: [{
				// 	id:'123456',
				// 	image: 'https://sf1-ttcdn-tos.pstatp.com/img/motor-img/17a74f4d2df126624068905e612030b4~400x266.webp',
				// 	name: '宝马1系',
				// 	overallStars: 3,
				// 	myStars:4,
				// }, {
				// 	id:'123456',
				// 	image: 'https://sf1-ttcdn-tos.pstatp.com/img/motor-img/17a74f4d2df126624068905e612030b4~400x266.webp',
				// 	name: '宝马2系',
				// 	overallStars: 3,
				// 	myStars:4,
				// }, {
				// 	id:'123456',
				// 	image: 'https://sf1-ttcdn-tos.pstatp.com/img/motor-img/17a74f4d2df126624068905e612030b4~400x266.webp',
				// 	name: '宝马2系旅行车新能源(进口)',
				// 	overallStars: 3,
				// 	myStars:4,
				// }, ],
				// allSeriesList: [{
				// 	id:'123456',
				// 	image: 'https://sf1-ttcdn-tos.pstatp.com/img/motor-img/17a74f4d2df126624068905e612030b4~400x266.webp',
				// 	name: '宝马1系',
				// 	overallStars: 3,
				// 	myStars:4,
				// }, {
				// 	id:'123456',
				// 	image: 'https://sf1-ttcdn-tos.pstatp.com/img/motor-img/17a74f4d2df126624068905e612030b4~400x266.webp',
				// 	name: '宝马2系',
				// 	overallStars: 3,
				// 	myStars:4,
				// }, {
				// 	id:'123456',
				// 	image: 'https://sf1-ttcdn-tos.pstatp.com/img/motor-img/17a74f4d2df126624068905e612030b4~400x266.webp',
				// 	name: '宝马2系旅行车新能源(进口)',
				// 	overallStars: 3,
				// 	myStars:4,
				// }, {
				// 	id:'123456',
				// 	image: 'https://sf1-ttcdn-tos.pstatp.com/img/motor-img/17a74f4d2df126624068905e612030b4~400x266.webp',
				// 	name: '宝马2系旅行车新能源(进口)',
				// 	overallStars: 3,
				// 	myStars:4,
				// }],
			}
		},
		onLoad:function(options) {
			console.log(options);
			console.log(getApp().globalData.id);
			uni.request({
				url:' http://409yv38641.qicp.vip/user/score',
				data:{
					id:getApp().globalData.id,
				},
				header:{
					token:getApp().globalData.token,
				},
				success:res=>{
					console.log(res)
					let showSeriesList = [];
					res.data.data.forEach((item)=>{
						showSeriesList.push({
							id:item.id,
							name:item.name,
							image:item.picture,
							overallStars:item.avgScore,
							myStars:item.myScore,
						})
					});
					this.showSeriesList = showSeriesList;
					this.allSeriesList = showSeriesList;
				},
				fail:err=>{
					console.log(res)
				}
			})
		},
		methods:{
			clickTag(e) {
				console.log(e);
				if (this.currentTag != e) {
					this.currentTag = e;
					if(e==0){
						this.showSeriesList = this.allSeriesList;
					}else{
						let showSeriesList = this.allSeriesList.filter(item=>{
							return item.myStars == e;
						})
						this.showSeriesList = showSeriesList;
					}
				}
			},
			reScore(e) {
				this.showScore = true;
			},
			closeScorePopup(e) {
				this.showScore = false;
			},
			clickScoreSubmit(e) {
				console.log(e)
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
		},
	}
</script>

<style>
	.tags {
		padding: 24rpx 28rpx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}
	
	.tag {
		margin: 8rpx;
	}
	.content {
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.cards {
		width: 100%;
		height: 192rpx;
		background: #FFFFFF;
		display: flex;
		flex-direction: column;
	}
	
	.card-series {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}
	
	.card-series-image {
		flex-shrink: 0;
		width: 200rpx;
		height: 132rpx;
		padding: 24rpx 48rpx;
	}
	
	.card-series-info {
		flex-grow: 0;
		display: flex;
		flex-direction: column;
	}
	
	.card-serires-name {
		padding: 6rpx 0;
		font-family: PingFangSC-Medium;
		font-size: 32rpx;
		color: #1A1A1A;
		letter-spacing: 0;
		font-weight: 500;
	}

	.card-series-stars {
		flex-direction: row;
		display: flex;
		padding: 6rpx 0;
		font-family: Helvetica;
		font-size: 24rpx;
		color: #1F2129;
		line-height: 24rpx;
		font-weight: 400;
	}
	
	.card-series-star-icon {
		width: 20rpx;
		height: 20rpx;
	}
	.card-serires-button {
		flex-shrink: 0;
	
		margin-left: auto;
		margin-right: 32rpx;
		width: 132rpx;
		height: 56rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	
		background: #FFCC32;
		border-radius: 4rpx;
	
		font-family: PingFangSC-Regular;
		font-size: 28rpx;
		color: #1A1A1A;
		letter-spacing: 0;
		text-align: center;
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

	
	.popup-explian {
		padding: 16rpx;
		font-family: PingFangSC-Regular;
		font-size: 24rpx;
		color: #666666;
		text-align: center;
		line-height: 36rpx;
		font-weight: 400;
	}
	
	.popup-submit {
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
