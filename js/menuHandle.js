/**
 * Created by deathubuntu on 3/05/16.
 */
(function(){
    function hideShowSections(e){
        e.preventDefault()
        var current = $(e.currentTarget);
        var currentActive = $('.active');
        currentActive.removeClass('.active').slideUp();
        current.slideDown().addClass('.active');
    }

    $('.menu-item').click(hideShowSections);
})();