$(function () {
    $("a[href^='#']").click(function () {
        let position = $($(this).attr("href")).offset().top;
        $("body, html").animate({
            scrollTop: position
        }, 1000);
    });

    const photo1 = $('#photo1-hobby');
    const desc1 = $('#hobby1-desc');
    const photo2 = $('#photo2-hobby');
    const desc2 = $('#hobby2-desc');
    const leftWidth = $('#left').width();
    const imgWidth = $('#left img').width();
    let windowWidth = $(window).width();



    let hide = widthWin => {

        if (widthWin <= 1158) {
            console.log('ok ' + widthWin);
            $('body .nav-items').on('click ', () => {
                $('.nav-list-holder').hide(200)
            });
        } else {
            console.log('poka ' + widthWin);
            $('.nav-list-holder').show()
        };

    };

    hide(windowWidth);

    $(window).resize(() => {
        let newWindowWidth = $(window).width();
        hide(newWindowWidth);
    });

    if (windowWidth >= 1280) {

        photo1.on('mouseover', () => {

            photo1.animate({
                width: 125 + '%'
            });
            desc1.hide(300);
        });
        photo1.on('mouseout', () => {
            photo1.animate({
                width: 100 + '%'
            });
            desc1.show(500);
        });

        photo2.on('mouseover', () => {
            $('#left').animate({ right: imgWidth * 1.25 - leftWidth });
            photo2.animate({
                width: 125 + '%',
            });
            desc2.hide(300);
        });
        photo2.on('mouseout', () => {
            $('#left').animate({ right: 0 });
            photo2.animate({
                width: 100 + '%',
            });
            desc2.show(300);
        });
    };

    $('#submit-button').prop('disabled', true);

    $('label').on('click', () => {
        $('.nav-list-holder').toggle('smooth');
    });
});