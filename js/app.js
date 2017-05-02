$(document).ready(function () {
    
    var $overlayTrigger = $(".overlay-trigger");
    var $overlay = $(".overlay");
    var $overlayClose = $(".overlay-close");
    var $modalBackdrop = $(".modal-backdrop");
    
    $overlayTrigger.click(function () {
        $overlay.addClass("overlay--active");
    });
    
    $overlayClose.click(function () {
        $overlay.removeClass("overlay--active");
    });
    
    $modalBackdrop.click(function () {
        $overlay.removeClass("overlay--active");
    });
    
});