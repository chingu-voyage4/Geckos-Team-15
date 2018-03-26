Page = {
    Next : function(year, el){
        $('.year-link').removeClass('active');
        $(el).addClass('active');
        $('.article-block').removeClass('show');
        $('.article-block.'+year).addClass('show');
    }, 
    LoadMore : function(year) {
        $("#"+year+" article:hidden").slice(0, 4).slideDown();
        if ($("#"+year+" article:hidden").length == 0) {
            $("#lm"+year).fadeOut('slow');
        }
        $('#'+year+'totop').removeClass('hide');
    }
}

$(function () {
    $(".article-block.2018 article").slice(0, 4).show();
    $(".article-block.2017 article").slice(0, 4).show();
    $(".article-block.2016 article").slice(0, 4).show();
});


$('a[href=#top]').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 600);
    return false;
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.to-top a').fadeIn();
    } else {
        $('.to-top a').fadeOut();
    }
});
