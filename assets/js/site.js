$(function () {
    // Due to how the modal is structured, our actual submit button is outside
    // the form, so we need to add an invisible submit element and trigger
    // the "click" event on it.
    $('#quotation-modal form')
        .append('<input type="submit" style="display: none;"/>')
    
    $('#quotation-modal .list-group-item').on('mousedown', function (event) {
        $(this).parent().find('.list-group-item').removeClass('active');
        $(this).addClass('active');
    });
    
    $('#quotation-modal button[type="submit"]').on('click', function (event) {
        $('#quotation-modal form input[type="submit"]').click();
    });
    
    $('#quotation-modal form').on('submit', function (event) {
        if (!this.checkValidity())
            return false;
        
        $.post(
            'https://contact.lightapps.studio/',
            {
                type:        'Quotation request',
                purpose:     $('#quotation-modal .list-group-item.active').text(),
                description: $('#quotation-modal textarea').val(),
                email:       $('#quotation-modal input[type="email"]').val(),
            },
            function (event) {
                $('#quotation-modal form')[0].reset();
                $('#quotation-modal .list-group-item').removeClass('active');
                
                $('#message-modal p').text('Thank you! We will contact you shortly.');
                $('#message-modal').modal('show');
            },
            'json'
        )
        .fail(function (event) {            
        });
        
        $('#quotation-modal').modal('hide');
        
        event.preventDefault();
        return false;
    });
    
    $('#featured-app-updates-form')
        .append('<input type="submit" style="display: none;"/>')

    $('#featured-app-updates-submit').on('click', function (event) {
        $('#featured-app-updates-form input[type="submit"]').click();
        event.preventDefault();
        return false;
    });
    
    $('#featured-app-updates-form').on('submit', function (event) {
        if (!this.checkValidity())
            return false;
        
        $.post(
            'https://contact.lightapps.studio/',
            {
                type:  'New app updates request',
                app:   'Geek Holiday Calendar',
                email: $('#featured-app-updates-form input[type="email"]').val(),
            },
            function (event) {
                $('#featured-app-updates-form')[0].reset();
                
                $('#message-modal p').text('Thank you! We will inform you when we release the Geek Holiday Calendar app.');
                $('#message-modal').modal('show');
            },
            'json'
        )
        .fail(function (event) {
        });
        
        event.preventDefault();
        return false;
    });
});
