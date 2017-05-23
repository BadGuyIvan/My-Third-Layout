$().ready(function() {

    var re = /(<li>)(\w*)/g;
    $(".group").html(function() {
        return $(this).html().replace(re, "$1" + "<span class='first-word'>$2</span>");
    });

    const ONE_HUNDRED_PERCENT = 219;
    const ZERO_PERCENT = 439;
    var percent_web_design = getRandom(ONE_HUNDRED_PERCENT, ZERO_PERCENT);
    var percent_creative = getRandom(ONE_HUNDRED_PERCENT, ZERO_PERCENT);
    var percent_UI_Design = getRandom(ONE_HUNDRED_PERCENT, ZERO_PERCENT);
    var percent_Prototypes = getRandom(ONE_HUNDRED_PERCENT, ZERO_PERCENT);
    var percent_Photography = getRandom(ONE_HUNDRED_PERCENT, ZERO_PERCENT);

    $(".percent:eq(0)").attr('stroke-dashoffset', percent_web_design);
    $(".percent:eq(1)").attr('stroke-dashoffset', percent_creative);
    $(".percent:eq(2)").attr('stroke-dashoffset', percent_UI_Design);
    $(".percent:eq(3)").attr('stroke-dashoffset', percent_Prototypes);
    $(".percent:eq(4)").attr('stroke-dashoffset', percent_Photography);

    $(".percent-indicator:eq(0)").text(function() {
        return percent_text(ZERO_PERCENT, ONE_HUNDRED_PERCENT, percent_web_design) + "%";
    })
    $(".percent-indicator:eq(1)").text(function() {
        return percent_text(ZERO_PERCENT, ONE_HUNDRED_PERCENT, percent_creative) + "%";
    })
    $(".percent-indicator:eq(2)").text(function() {
        return percent_text(ZERO_PERCENT, ONE_HUNDRED_PERCENT, percent_UI_Design) + "%";
    })
    $(".percent-indicator:eq(3)").text(function() {
        return percent_text(ZERO_PERCENT, ONE_HUNDRED_PERCENT, percent_Prototypes) + "%";
    })
    $(".percent-indicator:eq(4)").text(function() {
        return percent_text(ZERO_PERCENT, ONE_HUNDRED_PERCENT, percent_Photography) + "%";
    })
})

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function percent_text(zero_per, one_hundred_per, _percent) {
    return Math.floor(((zero_per - _percent) / one_hundred_per) * 100);
}