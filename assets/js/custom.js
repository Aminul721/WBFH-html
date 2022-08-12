jQuery(document).ready(function() {
    jQuery.noConflict()
    jQuery('.hamburger_icon').click(function(e) {
        jQuery('.mobile_menu').addClass('active');
    });
    jQuery('.menu_close').click(function(e) {
        jQuery('.mobile_menu').removeClass('active');
    });
});