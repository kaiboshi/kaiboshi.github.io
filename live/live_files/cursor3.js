$(function(){var e=0;$(document).on("click",function(t){var n=new Array("富强","民主","文明","和谐","自由","平等","公正","法治","爱国","敬业","诚信","友善"),o=$("<span/>").text(n[e]);e=(e+1)%n.length;var a=t.pageX,c=t.pageY;o.css({"z-index":5201314,top:c-20,left:a,position:"absolute",color:"var(--theme)","user-select":"no$(function() {
    var e = 0;
    $(document).on("click", function(t) {
        var n = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"),
            o = $("<span/>").text(n[e]);
        e = (e + 1) % n.length;
        var a = t.pageX,
            c = t.pageY;
        o.css({
            "z-index": 5201314,
            top: c - 20,
            left: a,
            position: "absolute",
            color: "var(--theme)",
            "user-select": "none"
        }), $("body").append(o), o.animate({
            top: c - 180,
            opacity: 0
        }, 1500, function() {
            o.remove();
        });
    });
});