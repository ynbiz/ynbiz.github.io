$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('navbar-dark', $(this).scrollTop() > 0 );
        $nav.toggleClass('bg-primary', $(this).scrollTop() > 0 );
        $nav.toggleClass('navbar-transparent', $(this).scrollTop() == 0 );
    });
});