const width = $(window).width();
$(document).ready(function () {
    let currentscroll = 0;
    $('#right').click(function () {
        currentscroll = currentscroll + width;
        $(window).scrollLeft(currentscroll);

    });
    $('#left').click(function () {
        currentscroll = currentscroll - width;
        $(window).scrollLeft(currentscroll);
    });
});