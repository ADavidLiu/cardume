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
    
    /*var $dadosInput = $(".dados-cadastrais__pair");
    
    $dadosInput.hover(function () {
        var $this = $(this);
        var $edit = $this.find(".dados-cadastrais__pair-edit");
        $edit.show();
    }, function () {
        var $this = $(this);
        var $edit = $this.find(".dados-cadastrais__pair-edit");
        $edit.hide();
    });
    
    var $editTrigger = $(".dados-cadastrais__pair-edit");
    var $editBtns = $(".dados-cadastrais__pair-btns");
    
    $editTrigger.click(function () {
        var $this = $(this);
        var $dadosInputValue = $this.parents(".dados-cadastrais__pair").find(".dados-cadastrais__pair-value");
        $dadosInputValue.addClass("dados-cadastrais__pair-value--edit");
        $dadosInputValue.attr("contenteditable", "true");
        $dadosInput.off("mouseenter mouseleave");
        $editTrigger.hide();
        $editBtns.show();
    });
    
    var $editBtnsConfirm = $(".dados-cadastrais__pair-btns-confirm");
    var $editBtnsCancel = $(".dados-cadastrais__pair-btns-cancel");
    
    $editBtnsConfirm.click(function () {
        var $dadosInputValue = $(this).parents(".dados-cadastrais__pair").find(".dados-cadastrais__pair-value");
        $dadosInputValue.removeClass("dados-cadastrais__pair-value--edit");
        $editBtns.hide();
        $dadosInputValue.attr("contenteditable", "false");
    });*/
    
    var $dadosBtn = $(".dados-cadastrais__btn");
    var $dadosModal = $(".dados-cadastrais__modal");
    var $overlayDados = $(".overlay--dados-cadastrais");
    var $dadosModalClose = $(".dados-cadastrais__modal-close");
    
    $dadosModalClose.click(function () {
        $dadosModal.removeClass("dados-cadastrais__modal--active");
        $overlayDados.removeClass("overlay--active");
    });
    
    $overlayDados.click(function () {
        $dadosModal.removeClass("dados-cadastrais__modal--active");
    });
    
    $dadosBtn.click(function () {
        $dadosModal.addClass("dados-cadastrais__modal--active");
    });

});
