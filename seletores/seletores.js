/**
 * Created by Anderson on 16/07/2017.
 */
$(function(){

    var selecionarTodosUsuarios = $('#selecao-todos-usuarios');
    var selecaoUsuarios = $('.js-selecao-usuario');

    function estilizarLinhaUsuarios() {
        selecaoUsuarios.filter(':checked').parents('tr').addClass('selecionado');
        selecaoUsuarios.filter(':not(:checked)').parents('tr').removeClass('selecionado');

    }

    selecaoUsuarios.on('click',function () {
        var totalUsuariosSelecionados = selecaoUsuarios.filter(':checked').length;
        var checked = selecaoUsuarios.length === totalUsuariosSelecionados;
        selecionarTodosUsuarios.prop('checked', checked);
    });

    selecionarTodosUsuarios.on('click', function () {
        selecaoUsuarios.prop('checked', selecionarTodosUsuarios.prop('checked'));
        estilizarLinhaUsuarios();
    });

    selecaoUsuarios.on('change', function () {
        estilizarLinhaUsuarios();
    });

});