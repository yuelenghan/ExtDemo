Ext.onReady(function () {
    //开启悬浮提示功能
    Ext.QuickTips.init();
    //开启动态加载，开启之后在使用到自定义类时，就不用写Ext.requires('类名')
    Ext.Loader.setConfig({
        enabled: false
        //paths:{
        //   my : 'app'
        // }
        //如果不指定paths，默认通过定义的类名去找
        //例如'Demo.view.Viewport'，会通过类名找到对应的js文件，进行加载
    });
    //创建应用程序的实例
    Ext.application({
        //设定命名空间
        name: 'Demo',
        //指定配置选项，设置相应的路径
        appFolder: 'app',
        //加载控制器
        controllers: ['demoController'],
        //自动加载和实例化Viewport文件
        autoCreateViewport: true
    });
});