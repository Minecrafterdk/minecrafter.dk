/*global $, document*/

Meteor.startup(function () {
    'use strict';

    $('#menu')
        .affix({
            offset: {
                top: function () {
                    return (this.top = $('.main-container').offset().top);
                },
                bottom: 0
            }
        })
        .on('affixed.bs.affix', function () {
            $(this).css({
                right: $('.main-container').offset().left
            });
        })
        .on('affixed-top.bs.affix', function () {
            $(this).css({
                right: 0
            });
        });

    $('body').scrollspy({
        target: '#menu'
    });
});
