function contarPalabras(texto) {
    const palabras = texto.split(" "); // Dividir el texto en palabras
    let pares = 0;
    let nones = 0;
  
    palabras.forEach((palabra) => {
      const longitud = palabra.length;
      if (longitud % 2 === 0) {
        pares++;
      } else {
        nones++;
      }
    });
  
    return {
      pares,
      nones,
    };
  }
  
  const texto = "lorem Ips et dolor";
  const resultado = contarPalabras(texto);
  
  console.log("-pares:", resultado.pares);
  console.log("-nones:", resultado.nones);
  