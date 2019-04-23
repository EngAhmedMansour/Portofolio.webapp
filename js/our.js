$(function(){

    $.scrollify({
        section : ".snap",
        sectionName:"page"
    });

    $('#about-block').click(function(){
        $.scrollify.move('#about');
    });
    $('#team-block').click(function(){
        $.scrollify.move('#team');
    });
    $('#services-block').click(function(){
        $.scrollify.move('#services');
    });
    $('#contact-block').click(function(){
        $.scrollify.move('#contact');
    });

    $('#about-block').hover(function(){
        $('#about').stop().slideToggle();;
    });
    $('#team-block').hover(function(){
        $('#team').stop().slideToggle();
    });
    $('#services-block').hover(function(){
        $('#services').stop().slideToggle();
    });
    $('#contact-block').hover(function(){
        $('#contact').stop().slideToggle();
    });

    $('.first.circle').circleProgress({
        value: 0.80
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(80 * progress) + '<i>%</i>');
    });
    $('.second.circle').circleProgress({
        value: 0.90
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
    });
    $('.third.circle').circleProgress({
        value: 0.90
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
    });

});