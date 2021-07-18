const Mock = require('mockjs')

const data = Mock.mock({
  'brandList|20': [{
    'id': '@id',
    'icon':"@image(40x40,@color,@color,ICON)",
    'name|1':['奔驰','奥迪','长安','道奇','宝马','丰田','本田'],
    'letter|1':['A','B','C','D','E']
  }],
  'seriesList|20':[{
    'id':'@id',
    'image':"@image(300x200,@color,@color,A CAR IMAGE)",
    'name|1':['宝马1系','宝马2系','宝马3系','宝马4系','宝马5系'],
    'guidePrice|1-100.2':1,
    'rate|1-4.2':1,
    'isHalted|1':true,
    'tag|1':['MPV','轿车','SUV'],
  }],
  'cartypeList|20':[{
    'id':'@id',
    'name|1':['30 TFSI 进取型','30 TFSI 运动型','30 TFSI 精英型'],
    'year|2000-2021':1,
    'onSale|1':true,
    'minPrice|1-100.2':1,
    'guidePrice|1-100.2':1,
  }],
  'testdriveList|20':[{
    'id':'@id',
    'date':'@date',
    'series|1':['宝马1系','宝马2系','宝马3系','宝马4系','宝马5系'],
    'type|1':['30 TFSI 进取型','30 TFSI 运动型','30 TFSI 精英型'],
    'city':'@city',
    'name':'@cname',
    'phone':'@id',
    'status|1':['待处理','已处理'],
  }]
})

module.exports = [

  //品牌api
  {
    url: '/vue-admin-template/table/brand/list',
    type: 'get',
    response: config => {
      const list = data.brandList
      return {
        code: 20000,
        data: {
          total: list.length * 10,
          items: list
        }
      }
    }
  },{
    url: '/vue-admin-template/table/brand/create',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },{
    url: '/vue-admin-template/table/brand/update',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },{
    url: '/vue-admin-template/table/brand/delete',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },
  
  //车系api
  {
    url: '/vue-admin-template/table/series/list',
    type: 'get',
    response: config => {
      const list = data.seriesList 
      return {
        code: 20000,
        data: {
          total: list.length * 10,
          items: list
        }
      }
    }
  },{
    url:'/vue-admin-template/table/series/create',
    type:'post',
    response:_=>{
      return{
        code:20000,
        data:'success'
      }
    }
  },{
    url:'/vue-admin-template/table/series/update',
    type:'post',
    response:_=>{
      return{
        code:20000,
        data:'success'
      }
    }
  },{
    url:'/vue-admin-template/table/series/delete',
    type:'post',
    response:_=>{
      return{
        code:20000,
        data:'success'
      }
    }
  },

  //车型api
  {
    url: '/vue-admin-template/table/cartype/list',
    type: 'get',
    response: config => {
      const list = data.cartypeList
      return {
        code: 20000,
        data: {
          total: list.length * 10,
          items: list
        }
      }
    }
  },{
    url:'/vue-admin-template/table/cartype/create',
    type:'post',
    response:_=>{
      return{
        code:20000,
        data:'success'
      }
    }
  },{
    url:'/vue-admin-template/table/cartype/update',
    type:'post',
    response:_=>{
      return{
        code:20000,
        data:'success'
      }
    }
  },{
    url:'/vue-admin-template/table/cartype/delete',
    type:'post',
    response:_=>{
      return{
        code:20000,
        data:'successs'
      }
    }
  },

  //试驾api
  {
    url:'/vue-admin-template/table/testdrive/list',
    type:'get',
    response:config=>{
      const list = data.testdriveList
      return {
        code:20000,
        data:{
          total:list.length * 10,
          items:list
        }
      }
    }
  },{
    url:'/vue-admin-template/table/testdrive/update',
    type:'post',
    response:_=>{
      return {
        code:20000,
        data:'success',
      }
    }
  }
]
