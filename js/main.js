$(document).ready(function(){

    $(document).on("click", ".quadrato" , function() {
        $.ajax({
            url: 'https://flynn.boolean.careers/exercises/api/random/int',
            method: 'GET',
            success: function(data) {
                var numeroPC = data.response;
                console.log(numeroPC);
                if (numeroPC > 5) {
                    $(this).addClass('verde');
                } else {
                    $(this).addClass('giallo');
                }
            },
            error: function(){
                alert('errore!')
            }
        });
    });
});
