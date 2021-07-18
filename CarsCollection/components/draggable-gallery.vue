<template>
	<view>
		<view class="images" v-for="(image,index) in images" :key="index" @touchstart="touchstart" @touchend="touchend"
			@touchmove="touchmove" :style="{opacity:index===currentImageIndex?1:0}">
			<image class="image" :src="image"></image>
		</view>
	</view>
</template>

<script>
	export default {
		name: "draggable-gallery",
		data() {
			return {
				startClientX: 0,
				currentImageIndex: 0,
				imageAmount: 34,
				coefficient: 15,
			};
		},
		methods: {
			touchstart(e) {
				this.startClientX = e.changedTouches[0].clientX;
				console.log(e);
			},
			touchend(e) {},
			touchmove(e) {
				let touch = e.touches[0];
				let dis = touch.clientX - this.startClientX;
				//正数负数分别用floor ceil
				let moveIndex = dis > 0 ? Math.floor(dis / this.coefficient) : Math.ceil(dis / this.coefficient);
				//每次变动后重新设置初始X 从而实现在拖动中灵活向左右旋转
				if (moveIndex != 0) {
					this.startClientX = touch.clientX;
				}
				let currentImageIndex = this.currentImageIndex + moveIndex;
				//合法性检测
				if (currentImageIndex > this.imageAmount)
					currentImageIndex = currentImageIndex - this.imageAmount;
				if (currentImageIndex < 0)
					currentImageIndex = currentImageIndex + this.imageAmount;
				this.currentImageIndex = currentImageIndex;
				console.log(e);
				console.log(currentImageIndex);
			}
		},
		props: {
			images: {
				type: Array,
				default: function() {
					return [
						'https://p3-dcd.byteimg.com/img/tos-cn-i-0000/047bfae1fd2742de928b040ec33dd0d6~tplv-resize:1200:0.webp',
						'https://p6-dcd.byteimg.com/img/tos-cn-i-0000/49b0c890b5af4c7eb59b367a31eff0da~tplv-resize:1200:0.webp',
						'https://p3-dcd.byteimg.com/img/tos-cn-i-0000/b70d8dbfe0b44621aefd8358ad357b24~tplv-resize:1200:0.webp',
						'https://p9-dcd.byteimg.com/img/tos-cn-i-0000/18d562e604924618b2163262a55fd83c~tplv-resize:1200:0.webp',
						'https://p6-dcd.byteimg.com/img/tos-cn-i-0000/9ad8d3c14cdd43b7beedd42f265af4fb~tplv-resize:1200:0.webp',
						'https://p3-dcd.byteimg.com/img/tos-cn-i-0000/ed2fb2777c24482ebfe98c37cf390e35~tplv-resize:1200:0.webp',
						'https://p1-dcd.byteimg.com/img/tos-cn-i-0000/848865dbed694148a1a1a564aba9e4d7~tplv-resize:1200:0.webp',
						'https://p9-dcd.byteimg.com/img/tos-cn-i-0000/8250ab022d4c450fb1e60741b2a2fd0f~tplv-resize:1200:0.webp',
						'https://p3-dcd.byteimg.com/img/tos-cn-i-0000/0c9939f767c3454ea48318410127a5cf~tplv-resize:1200:0.webp',
						'https://p3-dcd.byteimg.com/img/tos-cn-i-0000/f60cab30473c4a73a730b23ba62290b0~tplv-resize:1200:0.webp',
						'https://p6-dcd.byteimg.com/img/tos-cn-i-0000/70e05435338d4683a25f29d08d115936~tplv-resize:1200:0.webp',
						'https://p3-dcd.byteimg.com/img/tos-cn-i-0000/89d3fb50e63f41a69216cc84e48d196b~tplv-resize:1200:0.webp',
						'https://p6-dcd.byteimg.com/img/tos-cn-i-0000/f6d2ac8b5b7b4d3cb4fa9e40a9666df7~tplv-resize:1200:0.webp',
						'https://p3-dcd.byteimg.com/img/tos-cn-i-0000/f02b90d085ba410aba085f2ae52cffc0~tplv-resize:1200:0.webp',
						'https://p1-dcd.byteimg.com/img/tos-cn-i-0000/826ee92c6d2d4201bb4ea5443207350f~tplv-resize:1200:0.webp',
						'https://p6-dcd.byteimg.com/img/tos-cn-i-0000/f5721cef1dba4e59a1e010e7c4b95897~tplv-resize:1200:0.webp',
						'https://p1-dcd.byteimg.com/img/tos-cn-i-0000/8bc30070521e4c978f770cb7b06864ce~tplv-resize:1200:0.webp',
						'https://p1-dcd.byteimg.com/img/tos-cn-i-0000/a7e9da1fb7384864b72025f795c443e7~tplv-resize:1200:0.webp',
						'https://p6-dcd.byteimg.com/img/tos-cn-i-0000/2e06dda6d7084361a8a7be3daccd0c1b~tplv-resize:1200:0.webp',
						'https://p9-dcd.byteimg.com/img/tos-cn-i-0000/ebe6f8f1373d40949797d455a44ee038~tplv-resize:1200:0.webp',
						'https://p3-dcd.byteimg.com/img/tos-cn-i-0000/3f6b2bb8133d4afaa4756aaf535b674e~tplv-resize:1200:0.webp',
						'https://p1-dcd.byteimg.com/img/tos-cn-i-0000/6967d0ec52b7474d88dbc8f4d0c02d80~tplv-resize:1200:0.webp',
						'https://p1-dcd.byteimg.com/img/tos-cn-i-0000/bc52306ee09044a894f1830ca8c5b309~tplv-resize:1200:0.webp',
						'https://p9-dcd.byteimg.com/img/tos-cn-i-0000/c13ceba49b7441dfa85140c8258b7f18~tplv-resize:1200:0.webp',
						'https://p3-dcd.byteimg.com/img/tos-cn-i-0000/a2d61cfdc35b4ea8a04b3cc9a468a08d~tplv-resize:1200:0.webp',
						'https://p6-dcd.byteimg.com/img/tos-cn-i-0000/e7f848559ffc450491fa7a4ca0016bfd~tplv-resize:1200:0.webp',
						'https://p3-dcd.byteimg.com/img/tos-cn-i-0000/b4a71f91a1524959923058d26f8f01fe~tplv-resize:1200:0.webp',
						'https://p6-dcd.byteimg.com/img/tos-cn-i-0000/4324e946fb524e42ad40d0c58da3838c~tplv-resize:1200:0.webp',
						'https://p3-dcd.byteimg.com/img/tos-cn-i-0000/024ed4be402a49ffaee752612898a22e~tplv-resize:1200:0.webp',
						'https://p6-dcd.byteimg.com/img/tos-cn-i-0000/ae84c7d128684a9db60a8d93cc9a448e~tplv-resize:1200:0.webp',
						'https://p3-dcd.byteimg.com/img/tos-cn-i-0000/e4552d45218c4aafbbe99a477a4bace9~tplv-resize:1200:0.webp',
						'https://p6-dcd.byteimg.com/img/tos-cn-i-0000/731bc2a9e1a24a448bb580294959b75e~tplv-resize:1200:0.webp',
						'https://p3-dcd.byteimg.com/img/tos-cn-i-0000/29c2c1b40eb54052bf59e1f32ffb4199~tplv-resize:1200:0.webp',
						'https://p9-dcd.byteimg.com/img/tos-cn-i-0000/241fb22d56e043e8bd38d3d91f3ce3b5~tplv-resize:1200:0.webp',
						'https://p6-dcd.byteimg.com/img/tos-cn-i-0000/c92afdd76a9946a8a72f01e8372ee1d5~tplv-resize:1200:0.webp',
						'https://p1-dcd.byteimg.com/img/tos-cn-i-0000/cff8ab588c1e4a2aaabb9ada61a89850~tplv-resize:1200:0.webp',
					];
				}
			}
		}
	}
</script>

<style scoped>
	.images {
		position: absolute;
		top:50%;
		left:50%;
		margin-top:-240rpx;
		margin-left:-320rpx;
		z-index: 100;
		width: 640rpx;
		height: 480rpx;
	}
	.image{
		width: 640rpx;
		height: 480rpx;
	}
</style>
