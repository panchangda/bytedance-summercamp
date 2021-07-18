<template>
	<view class="content">
		<view class="top-brands">
			<view v-for="(brand,index) in brands" :key="index" @click="onClickBrand({id:brand.id,name:brand.name})">
				<view class="top-brand">
					<image class="icon-brand" :src="'http://409yv38641.qicp.vip/'+brand.icon" />
					<view>{{brand.name}}</view>
				</view>
			</view>
		</view>
		<text class="title">猜你喜欢</text>
		<view class="box">
			<view class="guess-cars">
				<view v-for="(car,index) in guessCars" :key="index" @click="onClickCar({id:car.id,name:car.name})">
					<view class="guess-car">
						<image class="image-car" :src="car.image" />
						<view>{{car.name}}</view>
					</view>
				</view>
			</view>
		</view>
		<u-index-list :scrollTop="scrollTop" :sticky="false">
			<view v-for="(item, index) in indexList" :key="index">
				<u-index-anchor :index="item.letter" />
				<view v-if="item.data" >
					<view v-for="(brand,index) in item.data" :key="index" @click.native="onClickBrand({id:brand.id,name:brand.name})">
						<view class="indexlist-cell">
							<image class="icon-brand" :src="'http://409yv38641.qicp.vip/'+brand.icon" />
							<view>{{brand.name}}</view>
						</view>
					</view>
				</view>
			</view>
		</u-index-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				brands: [],
				guessCars: [{
					image: 'https://sf1-ttcdn-tos.pstatp.com/img/motor-img/17a74f4d2df126624068905e612030b4~400x266.webp',
					name: '轩逸',
					id: '1'
				}, {
					image: 'https://sf1-ttcdn-tos.pstatp.com/img/motor-img/17a74f4d2df126624068905e612030b4~400x266.webp',
					name: '轩逸',
					id: '2'
				}, {
					image: 'https://sf1-ttcdn-tos.pstatp.com/img/motor-img/17a74f4d2df126624068905e612030b4~400x266.webp',
					name: '轩逸',
					id: '3'
				}, {
					image: 'https://sf1-ttcdn-tos.pstatp.com/img/motor-img/17a74f4d2df126624068905e612030b4~400x266.webp',
					name: '轩逸',
					id: '4'
				}, {
					image: 'https://sf1-ttcdn-tos.pstatp.com/img/motor-img/17a74f4d2df126624068905e612030b4~400x266.webp',
					name: '轩逸',
					id: '5'
				}, {
					image: 'https://sf1-ttcdn-tos.pstatp.com/img/motor-img/17a74f4d2df126624068905e612030b4~400x266.webp',
					name: '轩逸',
					id: '6'
				}, ],
				indexList:[],
				// indexList: [{
				// 	letter: 'A',
				// 	data: [{
				// 		icon: 'https://sf1-ttcdn-tos.pstatp.com/img/mosaic-legacy/1dd5000048d6334c26b4~100x100.webp',
				// 		name: '奥迪',
				// 		id: '0'
				// 	}, {
				// 		icon: 'https://sf3-ttcdn-tos.pstatp.com/img/mosaic-legacy/1dd5000018f89ff63f66~100x100.webp',
				// 		name: '阿斯顿马丁',
				// 		id: '1'
				// 	}, {
				// 		icon: 'https://sf1-ttcdn-tos.pstatp.com/img/mosaic-legacy/1dd500003399ce089bef~100x100.webp',
				// 		name: '阿尔法罗密欧',
				// 		id: '2'
				// 	}, {
				// 		icon: 'https://sf6-ttcdn-tos.pstatp.com/img/mosaic-legacy/2f1e00007c6289f0792c~100x100.webp',
				// 		name: 'ARCFOX',
				// 		id:'5'
				// 	}, {
				// 		icon: 'https://sf6-ttcdn-tos.pstatp.com/img/mosaic-legacy/65de000034bac9473ebb~100x100.webp',
				// 		name: '爱驰',
				// 		id:'5'
				// 	}, {
				// 		icon: 'https://sf1-ttcdn-tos.pstatp.com/img/mosaic-legacy/1dd50000198aee2e4688~100x100.webp',
				// 		name: 'ALPINA',
				// 		id:'5'
				// 	}, ]
				// }, {
				// 	letter: 'B',
				// 	data: [{
				// 		icon: 'https://sf1-ttcdn-tos.pstatp.com/img/mosaic-legacy/1dd5000048d6334c26b4~100x100.webp',
				// 		name: '奥迪',
				// 		id: '0'
				// 	}, {
				// 		icon: 'https://sf3-ttcdn-tos.pstatp.com/img/mosaic-legacy/1dd5000018f89ff63f66~100x100.webp',
				// 		name: '阿斯顿马丁',
				// 		id: '1'
				// 	}, {
				// 		icon: 'https://sf1-ttcdn-tos.pstatp.com/img/mosaic-legacy/1dd500003399ce089bef~100x100.webp',
				// 		name: '阿尔法罗密欧',
				// 		id: '2'
				// 	}, {
				// 		icon: 'https://sf6-ttcdn-tos.pstatp.com/img/mosaic-legacy/2f1e00007c6289f0792c~100x100.webp',
				// 		name: 'ARCFOX',
				// 		id: '3'
				// 	}, {
				// 		icon: 'https://sf6-ttcdn-tos.pstatp.com/img/mosaic-legacy/65de000034bac9473ebb~100x100.webp',
				// 		name: '爱驰',
				// 		id: '4'
				// 	}, {
				// 		icon: 'https://sf1-ttcdn-tos.pstatp.com/img/mosaic-legacy/1dd50000198aee2e4688~100x100.webp',
				// 		name: 'ALPINA',
				// 		id: '5'
				// 	}, ]
				// }, {
				// 	letter: 'C',
				// 	data: [{
				// 		icon: 'https://sf1-ttcdn-tos.pstatp.com/img/mosaic-legacy/1dd5000048d6334c26b4~100x100.webp',
				// 		name: '奥迪',
				// 		id: '0'
				// 	}, {
				// 		icon: 'https://sf3-ttcdn-tos.pstatp.com/img/mosaic-legacy/1dd5000018f89ff63f66~100x100.webp',
				// 		name: '阿斯顿马丁',
				// 		id: '1'
				// 	}, {
				// 		icon: 'https://sf1-ttcdn-tos.pstatp.com/img/mosaic-legacy/1dd500003399ce089bef~100x100.webp',
				// 		name: '阿尔法罗密欧',
				// 		id: '2'
				// 	}, {
				// 		icon: 'https://sf6-ttcdn-tos.pstatp.com/img/mosaic-legacy/2f1e00007c6289f0792c~100x100.webp',
				// 		name: 'ARCFOX',
				// 		id: '3'
				// 	}, {
				// 		icon: 'https://sf6-ttcdn-tos.pstatp.com/img/mosaic-legacy/65de000034bac9473ebb~100x100.webp',
				// 		name: '爱驰',
				// 		id: '4'
				// 	}, {
				// 		icon: 'https://sf1-ttcdn-tos.pstatp.com/img/mosaic-legacy/1dd50000198aee2e4688~100x100.webp',
				// 		name: 'ALPINA',
				// 		id: '5'
				// 	}, ]
				// },{
				// 	letter: 'D',
				// 	data: [{
				// 		icon: 'https://sf1-ttcdn-tos.pstatp.com/img/mosaic-legacy/1dd5000048d6334c26b4~100x100.webp',
				// 		name: '奥迪',
				// 		id: '0'
				// 	}, {
				// 		icon: 'https://sf3-ttcdn-tos.pstatp.com/img/mosaic-legacy/1dd5000018f89ff63f66~100x100.webp',
				// 		name: '阿斯顿马丁',
				// 		id: '1'
				// 	}, {
				// 		icon: 'https://sf1-ttcdn-tos.pstatp.com/img/mosaic-legacy/1dd500003399ce089bef~100x100.webp',
				// 		name: '阿尔法罗密欧',
				// 		id: '2'
				// 	}, {
				// 		icon: 'https://sf6-ttcdn-tos.pstatp.com/img/mosaic-legacy/2f1e00007c6289f0792c~100x100.webp',
				// 		name: 'ARCFOX',
				// 		id: '3'
				// 	}, {
				// 		icon: 'https://sf6-ttcdn-tos.pstatp.com/img/mosaic-legacy/65de000034bac9473ebb~100x100.webp',
				// 		name: '爱驰',
				// 		id: '4'
				// 	}, {
				// 		icon: 'https://sf1-ttcdn-tos.pstatp.com/img/mosaic-legacy/1dd50000198aee2e4688~100x100.webp',
				// 		name: 'ALPINA',
				// 		id: '5'
				// 	}, ]
				// },
				// ]
			}
		},
		methods: {
			onClickBrand(e) {
				console.log(e);
				if (e) {
					let option = '?id=' + e.id +'&name='+ e.name;
					uni.navigateTo({
						url: '/pages/chooseCar/brandSeries' + option,
						fail:err=>{
							console.log(err)
						}
					})
				}
			},
			onClickCar(e) {
				console.log(e);
				if (e) {
					let option = '?id=' + e.id +'&name='+ e.name;
					uni.navigateTo({
						url: '/pages/chooseCar/seriesCar' + option,
					})
				}
			},
			onPageScroll(e) {
				this.scrollTop = e.scrollTop;
				// console.log(this.scrollTop);
			},
		},
		onLoad(){
			uni.request({
				url:'http://409yv38641.qicp.vip/brand',
				success:res=>{
					let resList = res.data.data;
					let letterList = Object.keys(resList);
					for (let i in letterList){
						let formattedObject = {letter:letterList[i],};
						formattedObject.data = resList[letterList[i]];
						console.log(formattedObject)
						this.indexList.push(formattedObject);
					}		
					for(let i=0;i<5;i++){
						let a = Math.ceil(Math.random()* (this.indexList.length-1));
						let b = Math.ceil(Math.random()* (this.indexList[a].data.length-1));
						this.brands.push(this.indexList[a].data[b]);
					}
				}
			});
		},
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
	}

	.title {
		padding-left: 24rpx;
		font-size: 36rpx;
		font-weight: 600;
	}

	.top-brands {
		width: 100%;
		padding: 24rpx 48rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		overflow: hidden;
	}

	.top-brand {
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow: hidden;
	}

	.box {
		box-sizing: border-box;
		width: 100%;
	}

	.guess-cars {
		padding: 24rpx 48rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.guess-car {
		display: flex;
		flex-direction: column;
		align-items: center;
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

	.icon-brand {
		width: 100rpx;
		height: 100rpx;
	}

	.image-car {
		width: 168rpx;
		height: 112rpx;
	}
</style>
