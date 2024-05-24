$(document).ready(function() {

    $('.menu-toggler').on('click', function() {

        $(this).toggleClass('active');

        $('.navbar').toggleClass('toggle-nav');

    });

    $('.navbar ul li a').on('click', function() {

        $('.navbar ul li a').removeClass('active-color');

        $(this).addClass('active-color');


    });

    $('.menu-list li').on('click', function() {
        
        $('.menu-list li').removeClass('active');

        $(this).addClass('active');

    });

        /* Typed*/
        var $typed = $("#typed");
        if ($typed.length > 0) {
            $typed.typed({
                strings: ["Web Design", "Web Development", "UI/UX Design"],
                stringsElement: null,
                typeSpeed: 70,
                startDelay: 150,
                backSpeed: 40,
                backDelay: 350,
                loop: true,
                loopCount: 550,
                showCursor: true,
                cursorChar: "|",
                attr: null,
                contentType: "html",
            });
        }

});