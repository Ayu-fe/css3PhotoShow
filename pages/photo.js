
$('.item').on('click', function () {
    $(this).addClass('active');
    $('.wrapper').addClass('activeWrapper');
});
$('.close').on('click', function(e) {
    e.stopPropagation();    
    $('.active').removeClass('active');
    $('.activeWrapper').removeClass('activeWrapper');
})


