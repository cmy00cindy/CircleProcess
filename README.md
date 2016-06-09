# CircleProcess

环形进度条插件
具体使用方法：
1.引入library/css/circleprocess.css，library/js/circleprocess.js
2.调用CircleProcess构造方法，传入一个对象作为参数，新建实例，调用实例的init方法即可
例如：



//参数配置
    //1.总体旋转度数
    //2.旋转周期
    //3.圆圈大小
    //4.边框宽度
    //5.顶部小圆圈直径大小
    //6.主体颜色
    //7.顶部小圆圈颜色
    //8.背景圆圈颜色
   var circle=new CircleProcess({
       degree:230,
       time:1,
       width:100,
       borderWidth:8,
       littleCircleWidth:15,
       mainColor:'#ff6633',
       littleCircleColor:'#ff6633',
       backgroundColor:'lightgrey'
   });
    //初始化
    circle.init();


上述构造方法如不传入参数则调用默认的配置，但如果只传入一部分会导致样式混乱，建议自行传入所有参数，具体可下载后查看demo