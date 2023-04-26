function mais_um(elemento){
    qtdade1 = document.getElementById(elemento).innerHTML;
    qtdade1++;//qtdade1=qtdade1+1;
    document.getElementById(elemento).innerHTML = qtdade1;
}
function menos_um(elemento){
    if(qtdade1>0){
        qtdade1 = document.getElementById(elemento).innerHTML;
        qtdade1--;//qtdade1=qtdade1-1;
        document.getElementById(elemento).innerHTML = qtdade1;
    }
}
function zerar(elemento){
        qtdade1=0;
        document.getElementById(elemento).innerHTML = qtdade1;
 
}
 
function finalizar(){
const produtos = document.getElementsByName("prd");
const precos = document.getElementsByName("pr");
const quantidades = document.getElementsByName("qtd");
total=0;
totalp = 0;
totali=0;
    tabela = '<table class="table">'+
    ' <thead class="thead-dark"> <tr>'+
    '    <th scope="col">Produto</th>'+
    '    <th scope="col">Quantidade</th>'+
    '    <th scope="col">Preço</th>'+
    '    <th scope="col">Total</th>'+
    '</tr></thead>';
    mostra=false;
    for(i=0;i<produtos.length;i++){
        if(quantidades[i].innerHTML>0)
        {
            mostra=true;
            nome = produtos[i].innerHTML;
            preco = precos[i].innerHTML;
            qtde = quantidades[i].innerHTML;
            pr = preco.replace('$','');
            total = pr*qtde;
            total = Math.round(total,2);
            totalp=(totalp+total);
            totali=(totali+ parseInt(qtde,10));
            tabela = tabela+
            '<tr>'+
            '<td>'+nome+'</td>'+
            '<td>'+qtde+'</td>'+
            '<td>'+preco+'</td>'+
            '<td>$'+total+'</td>'+
            '</tr>';
        }
 
        console.log(produtos[i].innerHTML+" "+precos[i].innerHTML+" "+quantidades[i].innerHTML);
    }
    tabela = tabela+'<tr>'+
    '<td style="border=none;"></td>'+
    '<td style="border=none;">'+totali+'</td>'+
    '<td style="border=none;"></td>'+
    '<td style="border=none;">$'+totalp+'</td>'+
    '</tr>';
    tabela = tabela+"</table>";
    if(mostra){
        document.getElementById("resumo").innerHTML = tabela;
    }else{
        document.getElementById("resumo").innerHTML='';
    }
 
 
}