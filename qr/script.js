$(document).ready(function() {
    $('#generate-btn').click(function() {
        const textInput = $('#text-input').val();
        $('#qr-code').empty();

        if (textInput) {
            $('#qr-code').qrcode({
                text: textInput,
                width: 128,
                height: 128
            });
        } else {
            alert('Please enter a valid text or URL');
        }
    });
});
