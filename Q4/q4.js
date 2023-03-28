let data = [
    {
      estado: "SP",
      valor: 67836.43,
    },
    {
      estado: "RJ",
      valor: 36678.66,
    },
    {
      estado: "MG",
      valor: 29229.88,
    },
    {
      estado: "ES",
      valor: 27165.48,
    },
    {
      estado: "Outros",
      valor: 19849.53,
    },
  ];
  
  const valorTotal = data.map((item) => item.valor);
  
  let soma = valorTotal.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  
  const porcentagemSP = (valorTotal[0] * 100) / soma;
  const porcentagemRJ = (valorTotal[1] * 100) / soma;
  const porcentagemMG = (valorTotal[2] * 100) / soma;
  const porcentagemES = (valorTotal[3] * 100) / soma;
  const porcentagemOutros = (valorTotal[4] * 100) / soma;
  
  console.log(
    "A porcentagem de SP nos lucros é de:",
    porcentagemSP.toFixed(0),
    "%"
  );
  console.log(
    "A porcentagem de RJ nos lucros é de:",
    porcentagemRJ.toFixed(0),
    "%"
  );
  console.log(
    "A porcentagem de MG nos lucros é de:",
    porcentagemMG.toFixed(0),
    "%"
  );
  console.log(
    "A porcentagem de ES nos lucros é de:",
    porcentagemES.toFixed(0),
    "%"
  );
  console.log(
    "A porcentagem de outros estados nos lucros é de:",
    porcentagemOutros.toFixed(0),
    "%"
  );