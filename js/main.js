$(document).ready(function(){

    $(document).on("click", ".quadrato" , function() {
        $('.quadrato').removeClass('active');
        $(this).addClass('active');
        $.ajax({
            url: 'https://flynn.boolean.careers/exercises/api/random/int',
            method: 'GET',
            success: function(data) {
                var numeroPC = data.response;
                console.log(numeroPC);
                if (numeroPC > 5) {
                    $('.quadrato.active').addClass('verde');
                    $('.quadrato.active p').append(numeroPC);
                } else {
                    $('.quadrato.active').addClass('giallo');
                    $('.quadrato.active p').append(numeroPC);
                }
            },
            error: function(){
                alert('errore!')
            }
        });
    });
});
