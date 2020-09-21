$(function(){
    $('#calc').click(function(){
        const milhas = parseFloat($('#milhas').val())
        const metros = parseFloat(1609.34 * milhas).toFixed(2)
        $('#metros').val(metros)
    })
})
