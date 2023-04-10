function calcular() {
   // inserção de valores na formula:
   let valorA = parseInt(document.getElementById("valorA").value);
   let valorB = parseInt(document.getElementById("valorB").value);
   let valorC = parseInt(document.getElementById("valorC").value);
   // formulas:
   let Delta = (valorB ** 2) - (4 * valorA * valorC);
   let X1 = (-valorB + Math.sqrt(Delta)) / (2 * valorA);
   let X2 = (-valorB - Math.sqrt(Delta)) / (2 * valorA);
   // inserção dos valores nas tags
   for (let i = 1; i <= 3; i++) {
      document.getElementById("A" + i).innerHTML = valorA;
      document.getElementById("B" + i).innerHTML = valorB;
   }
   document.getElementById("C").innerHTML = valorC;
   // resultados dos calculos na interface
   document.getElementById("resultadoDelta").innerHTML = "= " + Delta;
   if (Delta > 0) {
      document.getElementById("resultadoX1").innerHTML = "= " + X1;
      document.getElementById("resultadoX2").innerHTML = "= " + X2;
   } else {
      document.getElementById("resultadoX1").innerHTML = "= NPRR";
      document.getElementById("resultadoX2").innerHTML = "= NPRR";
   }
}