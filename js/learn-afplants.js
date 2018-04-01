Page = {
    Next : function(resource, el){
        $('.resource-info' + '.allergy-trapping-hedges').addClass('hide');
        $('.resource-info').removeClass('active');
        $(el).addClass('active');
        $('.resource-info').removeClass('show');
        $('.resource-info.'+resource).addClass('show');
    }
}