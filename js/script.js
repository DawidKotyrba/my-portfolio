$(function () {
    $("a[href^='#']").click(function () {
        let position = $($(this).attr("href")).offset().top;
        $("body, html").animate({
            scrollTop: position
        });
    });

    const photo1 = $('#photo1-hobby');
    const desc1 = $('#hobby1-desc');
    const photo2 = $('#photo2-hobby');
    const desc2 = $('#hobby2-desc');


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


    const leftWidth = $('#left').width();
    const imgWidth = $('#left img').width();

    photo2.on('mouseover', () => {
        $('#left').animate({ right: imgWidth * 1.25 - leftWidth }, 500);
        photo2.animate({
            width: 125 + '%',
        }, 500);
        desc2.hide(300);
    });
    photo2.on('mouseout', () => {
        $('#left').animate({ right: 0 }, 500);
        photo2.animate({
            width: 100 + '%',
        }, 500);
        desc2.show(300);
    });

    $('#submit-button').on('click', e => {
        e.preventdefault();
    });

});