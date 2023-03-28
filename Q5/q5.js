function inverter(valor) {
    var string = "";
  
    for (var i = valor.length - 1; i >= 0; i--) {
      string += valor[i];
    }
    return string;
  }
  
  console.log(inverter("Millena"));