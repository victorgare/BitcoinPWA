var txtValorBtc;
var txtQuantidadeBtc;
var txtValorRs;

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(function () {
            console.log('SW registered');
        });
}

$(document).ready(function () {
    txtValorBtc = $("#txtValotBtc");
    txtQuantidadeBtc = $("#txtQuantidadeBtc");
    txtValorRs = $("#txtValorRs");

    //adiciona s funcoes que enviaram os valores a funcao de calculo

    txtValorBtc.keyup(function () {
        calcular();
    });

    txtQuantidadeBtc.keyup(function () {
        calcular();
    });

    txtValorRs.keyup(function () {
        calcular();
    });

    function calcular() {
        var vBtc = txtValorBtc.val();
        var qBtc = txtQuantidadeBtc.val();
        var vRs = txtValorRs.val();

        var retornoValorBtc;
        var retornoQuantidaeBtc;
        var retornoValorRs;

        if (qBtc !== '' && vRs !== '') {
            retornoValorBtc = (vRs / qBtc).toFixed(2);
        }

        if (vBtc !== '' && vRs !== '') {
            retornoQuantidaeBtc = (vRs / vBtc).toFixed(8);
        }

        if (vBtc !== '' && qBtc !== '') {
            retornoValorRs = (vBtc * qBtc).toFixed(2);
        }

        $("#txtResultadoValotBtc").val(retornoValorBtc);
        $("#txtResultadoQuantidadeBtc").val(retornoQuantidaeBtc);
        $("#txtResultadoValorRs").val(retornoValorRs);
    }
});