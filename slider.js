$(function() {
    var count = 0;
    var $li = $(".jd-clo2-left>ul>li");
    $(".next").click(function() {
        count++;
        if (count == $li.length) {
            count = 0;
        }
        $li.eq(count).fadeIn().siblings().fadeOut();
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