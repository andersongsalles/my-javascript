$(function() {
    var resposta = $.ajax({
        url: 'json/json.php',
        method: 'GET',
        dataType: 'json'
    });

    resposta.done(function(estados) {
        var comboEstado = $('#combo-estado');
        // comboEstado.empty();
        comboEstado.html('<option>Selecione o estado</option>');
        estados.forEach(function(estado) {
            var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
            comboEstado.append(optionEstado);
        });
    });

    resposta.fail(function() {
        alert('Erro carregando estados do servidor!');
    });

});
