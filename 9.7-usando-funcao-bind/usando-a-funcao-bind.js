var Estado = (function () {

    function Estado() {
        this.comboEstado = $('#combo-estado');
        this.emitter = $({});
        this.on = this.emitter.on.bind(this.emitter);
    }

    Estado.prototype.iniciar = function () {
        $.ajax({
            url: 'json/json.php',
            method: 'GET',
            dataType: 'json',
            success: onEstadosRetornados.bind(this),
            error: onError.bind(this)
        });

        this.comboEstado.on('change', onEstadoAlterado.bind(this));
    }

    function onEstadoAlterado() {
        this.emitter.trigger('alterado', this.comboEstado.val());
    }

    function onEstadosRetornados(estados) {

        this.comboEstado.html('<option value="">Selecione o estado</option>');
        estados.forEach(function(estado) {
            var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
            this.comboEstado.append(optionEstado);
        }.bind(this));
    }

    function onError(){
        alert('Erro carregando estados do servidor!');
    }


    return Estado;


})();

var Cidade = (function() {
    function Cidade(estado) {
        this.estado = estado;
    }

    Cidade.prototype.iniciar = function() {
        // handle quando o estado for alterado
        this.estado.on('alterado', onEstadoSelecionado.bind(this))
    }

    function onEstadoSelecionado(evento, uf) {
         $.ajax({
//
         })
    }

    return Cidade;

})();

$(function () {
    var estado = new Estado();
    estado.iniciar();

    var cidade = new Cidade(estado);
    cidade.iniciar();
});



