$(function() {
    $('.folder>a').click(function(e) {
        e.preventDefault();

        var toggleIcon = $(this).find('.toggle');
        var folderIcon = toggleIcon.next();
        var subfolders = $(this).next();

        if(subfolders.hasClass('subtree')) {
            if (subfolders.is(":hidden")) {
                subfolders.show();
                toggleIcon.removeClass('fa-chevron-circle-right')
                    .addClass('fa-chevron-circle-down');
                folderIcon.removeClass('fa-folder')
                    .addClass('fa-folder-open');                    
            }
            else {
                subfolders.hide();
                toggleIcon.removeClass('fa-chevron-circle-down')
                    .addClass('fa-chevron-circle-right');
                folderIcon.removeClass('fa-folder-open')
                    .addClass('fa-folder');                        
            }
        }
    });
});