let numeros = [
    {
      nombre: "Martin",
      legajo: 41
    },
    {
      nombre: "Juan",
      legajo: 14
    },
    {
      nombre: "Alan",
      legajo: 14
    },
    {
      nombre: "Lore",
      legajo: 5
    }
  ];
  
  for (let c = 0; c < numeros.length; c++) {
    for (let i = 0; i < numeros.length - 1; i++) {
      if (numeros[i].legajo > numeros[i + 1].legajo) {
        let temporario = numeros[i];
        numeros[i] = numeros[i + 1];
        numeros[i + 1] = temporario;
      }
    }
  }
  
  for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
  }
  