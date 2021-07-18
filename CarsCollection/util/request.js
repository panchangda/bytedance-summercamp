export request = (options) => {
return new Promise((resolve, reject) => {
	uni.request({
				url: BASE_URL + options.url,
				method: options.method || 'GET',
				data: options.data || {},
				header: {
					Authorization: uni.getStorageSync('token')
				}
				success: (res) => {
					if (res.statusCode == 401) {
						return uni.showModal({
							title: '操作失败',
							content: '身份已过期请重新登录',
							success: res => {
								if (res.confirm) {
									getApp().globalData.isLogIn = false,
										uni.redirectTo({
											url: '/pages/mine'
										})
								}
							}
						})
					} else {
						if (res.data.token) {
							uni.setStorageSync('token', res.data.token);
						}
					}
					resolve(res);
				}
			}
		},
		fail: (err) => {
			uni.showToast({
				title: '请求失败'
				icon: 'loading',

			})
			reject(err)
		}
};
