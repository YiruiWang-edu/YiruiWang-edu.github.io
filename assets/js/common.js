$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.majorpart').click(function() {
        $(this).parent().parent().find(".majorpart.hidden").toggleClass('open');
    });
    $('a.ex').click(function() {
        $(this).parent().parent().find(".ex.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
    $('.navbar-nav').find('a').removeClass('waves-effect waves-light');
});
