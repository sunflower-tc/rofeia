var $win = $(window),
    winW = $win.width(),
    winH = $win.height();

function globalNavi() {
    var e, t, n = $('#global_menu'),
        o = $('#menu_grap'),
        r = !1,//false
        i = !1;
    $('#global_menu').on('click', function () {
        if (!r) {
            r = !0;
            var s = n;
            if (s.hasClass("close-ph1")) s.find(".text").text("MENU"), s.removeClass("close-ph3").removeClass("close-ph2").removeClass("close-ph1"), o.removeClass("show"), i = !1,  clearTimeout(e), e = setTimeout(function () {
                r = !1
            }, 480);
            else {
                if (i) return !1;
                i = !0, s.addClass("close-ph1"), clearTimeout(e), clearTimeout(t), e = setTimeout(function () {
                    s.addClass("close-ph2"), o.addClass("show")
                }, 500), t = setTimeout(function () {
                    s.find(".text").text("CLOSE"), s.addClass("close-ph3"), setTimeout(function () {
                        r = !1
                    }, 480)
                }, 1e3)
            }

        }
    })
}
$win.on("load", function () {
    globalNavi()
}), $win.on("resize orientationchange", function () {
    winW = $win.width(), winH = $win.height()
});