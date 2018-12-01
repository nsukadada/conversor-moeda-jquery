$.get("https://api.exchangeratesapi.io/latest?base=USD ",function(retorno){
    $('#buscamoeda-taxas').click(function(){
        let valor = $('#valor').val();
        $('#dados-moeda-real').html( retorno.rates.BRL *valor);
    })
    
})