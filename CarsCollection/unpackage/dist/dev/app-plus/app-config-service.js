
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/chooseCar/home","pages/chooseCar/brandSeries","pages/chooseCar/seriesCar","pages/chooseCar/chooseCity","pages/mine/mine","pages/mine/score","pages/mine/testDrive"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#000000","selectedColor":"#000000","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/chooseCar/home","iconPath":"static/chooseCar-default.png","selectedIconPath":"static/chooseCar-selected.png","text":"选车"},{"pagePath":"pages/mine/mine","iconPath":"static/mine-default.png","selectedIconPath":"static/mine-selected.png","text":"我的"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"车型大全","compilerVersion":"3.1.18","entryPagePath":"pages/chooseCar/home","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/chooseCar/home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"车型大全"}},{"path":"/pages/chooseCar/brandSeries","meta":{},"window":{}},{"path":"/pages/chooseCar/seriesCar","meta":{},"window":{}},{"path":"/pages/chooseCar/chooseCity","meta":{},"window":{"navigationBarTitleText":"选择城市"}},{"path":"/pages/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的"}},{"path":"/pages/mine/score","meta":{},"window":{"navigationBarTitleText":"我的评分"}},{"path":"/pages/mine/testDrive","meta":{},"window":{"navigationBarTitleText":"我的试驾"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
