var estado = (function () {
    var comboEstado = $('#combo-estado');

    function iniciar() {
        $.ajax({
            url: 'json/json.php',
            method: 'GET',
            dataType: 'json',
            success: onEstadosRetornados,
            error: onError
        });
    }

    function onEstadosRetornados(estados) {
        comboEstado.html('<option>Selecione o estado</option>');
        estados.forEach(function(estado) {
            var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
            comboEstado.append(optionEstado);
        });
    }

    function onError(){
        alert('Erro carregando estados do servidor!');
    }

    return{
        iniciar: iniciar
    }

})();

estado.iniciar();





// $(function() {
//     var resposta = $.ajax({
//         url: 'json/json.php',
//         method: 'GET',
//         dataType: 'json'
//     });
//
//     resposta.done(function(estados) {
//         var comboEstado = $('#combo-estado');
//         // comboEstado.empty();
//         comboEstado.html('<option>Selecione o estado</option>');
//         estados.forEach(function(estado) {
//             var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
//             comboEstado.append(optionEstado);
//         });
//     });
//
//     resposta.fail(function() {
//         alert('Erro carregando estados do servidor!');
//     });
//
// });
