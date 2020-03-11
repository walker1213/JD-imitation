$(function() {
    //轮播图效果
    var count = 0;
    var $li = $(".jd-clo2-left>ul>li");
    $(".next").click(function() {
        count++;
        if (count == $li.length) {
            count = 0;
        }
        //对应元素渐入，兄弟元素渐出
        $li.eq(count).fadeIn().siblings().fadeOut();
        //为下方icon添加类样式并删除其他icon的类样式
        $(".slider_icon i").eq(count).addClass("btn_act").siblings().removeClass('btn_act');
        console.log(count);
    });
    $(".prev").click(function() {
        count--;
        if (count == -1) {
            count = $li.length - 1;
        }
        console.log(count);
        $li.eq(count).fadeIn().siblings().fadeOut();
        $(".slider_icon i").eq(count).addClass("btn_act").siblings().removeClass('btn_act');
    });
    $(".slider_icon i").mouseenter(function() {
        $(this).addClass('btn_act').siblings().removeClass("btn_act");
        $li.eq($(this).index()).fadeIn().siblings().fadeOut();
        count = $(this).index();
    });
});