$(function() {
    var resposta = $.ajax({
        url: 'json/json.php',
        method: 'GET',
        dataType: 'json'
    });

    resposta.done(function(estados) {
        estados.forEach(function(estado) {
            console.log(estado);
        });
    });

    resposta.fail(function() {
        alert('Erro carregando estados do servidor!');
    });

});
