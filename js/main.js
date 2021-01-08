$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('bg-primary', $(this).scrollTop() > 0 );
        $nav.toggleClass('bg-transparent', $(this).scrollTop() == 0 );
    });
});