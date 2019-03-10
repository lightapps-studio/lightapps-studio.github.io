$(function () {
    $('#quotation-modal .list-group-item').on('mousedown', function (event) {
        $(this).parent().find('.list-group-item').removeClass('active');
        $(this).addClass('active');
    });
    
    $('#quotation-modal button[type="submit"]').on('click', function (event) {
        $.post(
            'https://contact.lightapps.studio/',
            {
                type:        'Quotation request',
                purpose:     $('#quotation-modal .list-group-item.active').text(),
                description: $('#quotation-modal textarea').val(),
                email:       $('#quotation-modal input[type="email"]').val(),
            },
            function () {
                
            },
            'json'
        );
    });
});
