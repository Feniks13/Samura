$(function(){
    $('.expandable-list-link').click(function(){
        if( $(this).children().text() == 'Показать все' ){
            $(this).prev().children().removeClass('hidden');
            $(this).children().text('Скрыть');
        }else{
            $(this).prev().find( $('li[data-hide]') ).addClass('hidden');
            $(this).children().text('Показать все');
        }
        return false;
    });
});