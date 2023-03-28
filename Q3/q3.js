fetch("Q3/dados.json")
  .then((response) => response.json())
  .then((jsonData) => {
    console.log(jsonData);
    let menorValor = jsonData[0].valor;
    let maiorValor = jsonData[0].valor;
    let media, soma = jsonData[0].valor;
    let diasSemFaturamento = 0;
    let diasFatmaior = 0;

    for(let i = 1; i < jsonData.length; i++){
        if(jsonData[i].valor != 0){
            if(jsonData[i].valor < menorValor){
                menorValor = jsonData[i].valor
            }
        }
    }

    for(let i = 1; i < jsonData.length; i++){
        if(jsonData[i].valor != 0){
            if(jsonData[i].valor > maiorValor){
                maiorValor = jsonData[i].valor
            }
        }
    }

    for(let i = 1; i < jsonData.length; i++){
        if(jsonData[i].valor != 0){
            soma += jsonData[i].valor;
        }else{
            diasSemFaturamento += 1;
        }
    }
    
    media = soma/ (jsonData.length - diasSemFaturamento);

    for(let i = 0; i < jsonData.length; i++){
        if(jsonData[i].valor != 0){
            if(jsonData[i].valor > media){
                diasFatmaior +=1;
            }
        }
    }

    
    console.log("Média "+media);
    console.log(" Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: "+diasFatmaior);
    console.log(" O menor valor de faturamento ocorrido em um dia do mês: "+menorValor);
    console.log(" O maior valor de faturamento ocorrido em um dia do mês: "+maiorValor);
});