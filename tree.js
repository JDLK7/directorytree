$(function() {
    $('.folder>a').click(function(e) {
        e.preventDefault();

        var icon = $(this).find('.toggle');
        var subfolders = $(this).next();
        if(subfolders.hasClass('subtree')) {
            if (subfolders.is(":hidden")) {
                subfolders.show();
                icon.removeClass('fa-chevron-circle-right')
                    .addClass('fa-chevron-circle-down');
            }
            else {
                subfolders.hide();
                icon.removeClass('fa-chevron-circle-down')
                    .addClass('fa-chevron-circle-right');
            }
        }
    });
});