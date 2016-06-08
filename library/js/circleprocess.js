/**
 * Created by aa on 2016/6/7.
 */
function CircleProcess(parameter){
    this.init=function(){
        if(parameter.degree<0||parameter.degree>360){
            throw new Error('degree度数有误!')
            return;
        }
        var container= document.getElementById('circleContainer');
        changeStyleSheet(parameter);
        if(parameter.degree<180)
        {
            container.innerHTML=
                '<div id="circleWapper" class="wrapper" data-anim="base wrapper">'+
                '<div class="circle absoluteCenter" data-anim="base right"></div>'+
                '</div>'+
                '<div id="backgroundCircle" class="circle absoluteCenter" data-anim="base center"></div>'+
                '<div class="circle absoluteCenter" data-anim="base identification">'+
                '<div class="littleCircle"></div>'+
                '</div>';
        }
        else {
            container.innerHTML =
                '<div id="circleWapper" class="wrapper" data-anim="base wrapper">' +
                '<div class="circle absoluteCenter" data-anim="base left">' +
                '</div>' +
                '<div class="circle absoluteCenter" data-anim="base right"></div>' +
                '</div>' +
                '<div id="backgroundCircle" class="circle absoluteCenter" data-anim="base center"></div>' +
                '<div class="circle absoluteCenter" data-anim="base identification">' +
                '<div class="littleCircle"></div>' +
                '</div>';

            setWapperVisible(180/parameter.degree*parameter.time*1000);
        }
        changeStyle(parameter);
    };
    //更改外边框可见部分，完全可见
    function setWapperVisible(time){
     window.setTimeout(function(){
         document.getElementById('circleWapper').style.clip='auto';
     },time);
    }

    //根据配置动态修改样式
    function changeStyle(parameter){
        var wrapper=document.querySelectorAll('.wrapper');
        //所有圆圈
        var allCircle=document.querySelectorAll('.circle');
        //需要利用clip切割的circle
        var circle=document.querySelectorAll('.wrapper .circle');

        //需要设置主题颜色的部分
        var color=document.querySelectorAll('.wrapper .circle');
        //配置小球颜色
        var littleCircle=document.querySelector('.littleCircle');
        //底层圆圈
        var backgroundCircle=document.querySelector('#backgroundCircle');

        //设置主题宽度
        if(parameter.width){
            var containerWidth=parameter.width/0.8;
            document.getElementById('circleContainer').style.width=containerWidth+'px';
            document.getElementById('circleContainer').style.height=containerWidth+'px';
            for(var i=0;i<wrapper.length;i++){
                wrapper[i].style.width=containerWidth+'px';
                wrapper[i].style.height=containerWidth+'px';
                wrapper[i].style.clip='rect(0px, '+containerWidth+'px, '+containerWidth+'px, '+containerWidth/2+'px)';
            }
            for(var i=0;i<allCircle.length;i++){
                allCircle[i].style.width=parameter.width+'px';
                allCircle[i].style.height=parameter.width+'px';
            }
        }
        //设置边框宽度
        if(parameter.borderWidth) {
            var borderWidth = parameter.borderWidth;
            for(var i=0;i<allCircle.length;i++){
                allCircle[i].style.borderWidth = borderWidth+'px';
            }
        }
        //设置clip切割
        var border=parameter.borderWidth?parameter.borderWidth:document.getElementsByClassName('circle').style.borderWidth.replace(/px/g,'');
        for(var i=0;i<circle.length;i++){
            circle[i].style.clip='rect(0px, '+(parameter.width/2+Number(border))+'px, '+containerWidth+'px, 0px)';
        }

        //设置主题颜色
        if(parameter.mainColor){
            for(var i=0;i<color.length;i++){
                color[i].style.borderColor=parameter.mainColor;
            }
        }

        //配置小球大小
        if(parameter.littleCircleWidth){
            littleCircle.style.width=parameter.littleCircleWidth;
            littleCircle.style.height=parameter.littleCircleWidth;
        }

        //配置小球向上偏移量
        if(parameter.littleCircleWidth&&parameter.borderWidth){
            littleCircle.style.marginTop=-0.5*(parameter.littleCircleWidth+parameter.borderWidth)+'px';
        }

        //配置小球颜色
        if(parameter.littleCircleColor){
            littleCircle.style.backgroundColor=parameter.littleCircleColor;
        }

        if(parameter.backgroundColor){
            backgroundCircle.style.borderColor=parameter.backgroundColor;
        }

    }
    //根据配置动态改变样式表
    function changeStyleSheet(parameter){
        for(var i=0;i<document.styleSheets.length;i++){
           if(document.styleSheets[i].href.indexOf('circleprocess.css')>=0){
               var current=document.styleSheets[i];
               for(var j=0;j<current.cssRules.length;j++){
                   //设置小球前进长度以及进度条总体
                   if (current.cssRules[j].name == 'left-spin' ) {
                       current.cssRules[j].cssRules[1].style.cssText = 'transform: rotate(' + parameter.degree + 'deg);';
                       /*current.cssRules[j].cssRules[1].style.cssText = 'webkitTransform: rotate(' + parameter.degree + 'deg);'*/

                   }

                   //设置小球旋转周期
                   if (current.cssRules[j].selectorText && (current.cssRules[j].selectorText.replace(/"/g, '') == '.circle[data-anim~=identification]'||current.cssRules[j].selectorText.replace(/"/g, '') == '[data-anim~=identification].circle')) {
                       current.cssRules[j].style.animationDuration = parameter.time + 's';
                       current.cssRules[j].style.webkitAnimationDuration = parameter.time + 's';
                   }

                   if(parameter.degree<180) {
                       //设置小于180度时的旋转周期
                       if (current.cssRules[j].selectorText && (current.cssRules[j].selectorText.replace(/"/g, '') == '.circle[data-anim~=right]'||current.cssRules[j].selectorText.replace(/"/g, '') == '[data-anim~=right].circle')) {
                           current.cssRules[j].style.animationDuration = parameter.time + 's';
                           current.cssRules[j].style.webkitAnimationDuration = parameter.time + 's';
                       }
                       //设置小于180度进度条前进长度
                       if (current.cssRules[j].name == 'right-spin') {
                           current.cssRules[j].cssRules[1].style.cssText = 'transform: rotate(' + parameter.degree + 'deg);';
                          /* current.cssRules[j].cssRules[1].style.cssText = 'webkitTransform: rotate(' + parameter.degree + 'deg);'*/
                       }
                   }
                   else{
                       var firstTime=180/parameter.degree*parameter.time;
                       var secondTime=parameter.time-firstTime;
                       //设置大于180度时的旋转周期
                       if (current.cssRules[j].selectorText && (current.cssRules[j].selectorText.replace(/"/g, '') == '.circle[data-anim~=right]'||current.cssRules[j].selectorText.replace(/"/g, '') == '[data-anim~=right].circle')) {
                           current.cssRules[j].style.animationDuration = firstTime + 's';
                           current.cssRules[j].style.webkitAnimationDuration = firstTime + 's';
                       }
                       //设置大于180度进度条前180度前进长度
                       if (current.cssRules[j].name == 'right-spin') {
                           current.cssRules[j].cssRules[1].style.cssText = 'transform: rotate(180deg);';
                          /* current.cssRules[j].cssRules[1].style.cssText = 'webkitTransform: rotate(180deg);'*/
                       }

                       //设置总体路径周期
                       if (current.cssRules[j].selectorText && (current.cssRules[j].selectorText.replace(/"/g, '') == '.circle[data-anim~=left]'||current.cssRules[j].selectorText.replace(/"/g, '') =="[data-anim~=left].circle")) {
                           current.cssRules[j].style.animationDuration = parameter.time + 's';
                           current.cssRules[j].style.webkitAnimationDuration = parameter.time + 's';
                       }


                   }
               }
           }
        }
    }
}

