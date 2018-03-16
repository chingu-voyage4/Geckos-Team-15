Page = {
    Next : function(year, el){
        $('.year-link').removeClass('active');
        $(el).addClass('active');
        $('.article-block').removeClass('show');
        $('.article-block.'+year).addClass('show');
    }
}
