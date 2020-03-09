$(
    function() {
        var json1 = {
            "background-color": "#fff",
            "color": "#f10215",
            "border": "1px solid #ccc",
            "border-bottom": "1px solid #fff",
        };
        var json2 = {
            "background-color": "#E3E4E5",
            "height": "30px",
            "overflow": "hidden",
            "border": "1px solid #E3E4E5",
        };
        $(".shortcut .fl .outer-first").mouseover(
            function() {
                $(this).next().show();
                $(this).css(json1);
            }
        )
        $(".shortcut .fl .outer-first").mouseout(
            function() {
                $(this).next().hide();
                $(this).css(json2);
            }
        )

        $(".outer-area").mouseover(function() {
            $(this).show();
            $(".shortcut .fl .outer-first").css(json1);
        })
        $(".outer-area").mouseout(function() {
            $(this).hide();
            $(".shortcut .fl .outer-first").css(json2);
        })
    }
)
window.onload = function() {
    // 编写JS代码
    var lis = document.getElementsByTagName("li");
    console.log(lis);
    for (var i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function() {
            this.className = "lihover";
        }
        lis[i].onmouseout = function() {
            this.className = "";
        }
    }
}