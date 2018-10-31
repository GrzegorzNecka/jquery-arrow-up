    function createButtonGoToTop() {
        var button = $('<button></button>', {
            'id': 'backToTop',
            'class': 'backToTop hidden',
            'html': '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="arrow_up" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 485.213 485.212" style="enable-background:new 0 0 485.213 485.212;" xml:space="preserve" class=""><g transform="matrix(6.12323e-17 1 -1 6.12323e-17 490.213 4.9995)"><g> <path d = "M121.304,242.606L242.606,0h121.302L242.606,242.606l121.302,242.606H242.606L121.304,242.606z" data - original = "#000000" class = "active-path"fill = "#1E1E1E"/></g></g></svg>'
        });
        $('body').append(button);
        return button;
    }//.createButtonGoToTop
    
    var buttonGoToTop = createButtonGoToTop();
    buttonGoToTop.on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    })


    function goToTop() {
        if ($('html').scrollTop() >= 50) {
            buttonGoToTop.removeClass('hidden');
        } else {
            buttonGoToTop.addClass('hidden');
        }
    }//.goToTop

    $(document).on('scroll', goToTop);
    