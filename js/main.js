$(function () {
    $(document).
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('bg-transparent', $(this).scrollTop() > $nav.height());
    });
});