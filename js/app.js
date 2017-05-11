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
    
    var $equipmentApproved = $(".equipment--approved");
    var $approvedOverlay = $(".equipment--approved__overlay");
    
    $equipmentApproved.hover(function () {
        $approvedOverlay.addClass("equipment--approved__overlay--active");
    }, function () {
        $approvedOverlay.removeClass("equipment--approved__overlay--active");
    });
    
    $('.status__process-item').matchHeight();
    $('.status__timeline-item-text--description').matchHeight();
    
    var $equipmentList = $(".equipment__list");
    var $status = $(".status");
    var $statusClose = $(".status__header-close");
    
    $approvedOverlay.click(function () {
        $equipmentList.hide();
        $status.show();
    });
    
    $statusClose.click(function () {
        $status.hide();
        $equipmentList.show();
    });
    
    var $modalPasswordCopy = $(".modal__password-copy");
    var $modalPasswordConfirm = $(".modal__password-confirm");
    var $btnPasswordAccept = $(".modal__password-btn--green");
    
    $btnPasswordAccept.click(function () {
        $modalPasswordCopy.hide();
        $modalPasswordConfirm.show();
    });
    
    var $modalHelpCopy = $(".modal__help-copy");
    var $modalHelpConfirm = $(".modal__help-confirmed");
    var $phoneHelp = $(".modal__help-img");
    var $btnHelpAccept = $(".modal__help-btn");
    
    $btnHelpAccept.click(function () {
        $modalHelpCopy.hide();
        $phoneHelp.hide();
        $modalHelpConfirm.show();
    });
    
});