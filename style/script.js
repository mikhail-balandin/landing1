$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header__menu, .header__main-about, .header__main-title').toggleClass('active');
    });
});
