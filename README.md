# CircleProcess

##具体使用方法<br>
1.引入library/css/circleprocess.css，library/js/circleprocess.js<br>
2.调用CircleProcess构造方法，传入一个对象作为参数，新建实例，调用实例的init方法即可<br>
例如：<br>



//参数配置<br>
    //1.总体旋转度数<br>
    //2.旋转周期<br>
    //3.圆圈大小<br>
    //4.边框宽度<br>
    //5.顶部小圆圈直径大小<br>
    //6.主体颜色<br>
    //7.顶部小圆圈颜色<br>
    //8.背景圆圈颜色<br>
   var circle=new CircleProcess({<br>
       degree:230,<br>
       time:1,<br>
       width:100,<br>
       borderWidth:8,<br>
       littleCircleWidth:15,<br>
       mainColor:'#ff6633',<br>
       littleCircleColor:'#ff6633',<br>
       backgroundColor:'lightgrey'<br>
   });<br>
    //初始化<br>
    circle.init();<br>


上述构造方法如不传入参数则调用默认的配置，但如果只传入一部分会导致样式混乱，建议自行传入所有参数，具体可下载后查看demo<br>
##兼容性说明：
由于使用了css3，不兼容ie9及以下的浏览器，支持新版本ie，chome,firefox，移动端浏览器经过测试，支持chome，其他浏览器待测试
