/**
 * Created by aa on 2016/6/7.
 */
window.onload=function(){
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
};