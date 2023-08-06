class Arreglos{
  regresar() {
    window.history.back();
  }
  mayor(){
    let datos=document.getElementById("datos").value
    let numeros=datos.split(";")
    let may=parseFloat(numeros[0])
    for(let i=1;i<numeros.length;i++){
      if(may<parseFloat(numeros[i])){
        may=parseFloat(numeros[i])
      }
    }
    
  }
  menor(){
    let datos=document.getElementById("datos").value
    let numeros=datos.split(";")
    let men=parseFloat(numeros[0])
    for(let i=1;i<numeros.length;i++){
      if(men>parseFloat(numeros[i])){
        men=parseFloat(numeros[i])
      }
    }
    let resp=document.getElementById("resp")
    resp.textContent=`El menor del arreglo[${numeros}] es= ${men}`

  }
  promedio(){
    let datos=document.getElementById("datos").value
    let numeros=datos.split(";")
    let acu=0
    let pro=0
    let cont=0
    for(let i=0;i<numeros.length;i++){
      acu=acu+parseFloat(numeros[i])
      cont=cont+1
    }
    pro=acu/cont
    let resp=document.getElementById("resp")
    resp.textContent=`El promedio del arreglo[${numeros}] es = ${pro}`
    

  }
  nombre(){
    let datos=document.getElementById("datos").value
    let numeros=datos.split(";")
    let lim =numeros.length-1
    let revez=[]
    for(let i=lim;i >=0;i--){
      revez.push(numeros[i])
    }
    let resp=document.getElementById("resp")
    resp.textContent=`El arreglos[${numeros}] su revez es [${revez}]`


  }
  buscar(){
    let datos=document.getElementById("datos").value
    let numeros=datos.split(";")
    let num=document.getElementById("num").value
    let resp=document.getElementById("resp")
    for(let i=0;i<numeros.length;i++){
      if(num==parseFloat(numeros[i])){
        resp.textContent=`El numero buscado ${num} su posicion es ${i}`

      }
    }



  }
  adivinar(){
    let num=document.getElementById("num").value
    num=parseInt(num)
    let numeros=[]
    let resp=document.getElementById("adiv")
    for(let i=0;i<100;i++){
      numeros.push(parseInt(Math.random()*100))
    }
    console.log(numeros)
    for(let c=0;c<numeros.length;c++){
      if(num==parseFloat(numeros[c])){
        console.log("acertaste")
        resp.textContent=`Adivinaste el numero , esta en la posicion ${c} ${numeros}`
        break;
      }
      if(num!=parseFloat(numeros[c])){
        console.log("fallaste")
        resp.textContent=`No adivinaste el numero ${numeros}`
      }
    }
    

  }
  insertar(){
    let datos=document.getElementById("datos").value
    let numeros=datos.split(";")
    let num=document.getElementById("num").value
    num=parseInt(num)
    let num2=document.getElementById("num2").value
    num2=parseInt(num2)
    if (!isNaN(num2) && !isNaN(num)) {
      numeros.splice(num, 0, num2);
      document.getElementById("resp").textContent = `El numero ${num2} se arrego al arreglo [${numeros}]`
    } else {
      document.getElementById("resp").textContent = "Error: Ingresa números válidos para el dato y la posición.";
    }

  }
  eliminar(){
    let datos=document.getElementById("datos").value
    let numeros=datos.split(";")
    let num=document.getElementById("num").value
    num=parseInt(num)
    if (!isNaN(num) && num >= 0 && num < numeros.length) {
      numeros.splice(num, 1);
      document.getElementById("resp").textContent =`Despues de eliminar el dato [${numeros}]`
    } else {
      document.getElementById("resp").textContent = "Error: Ingresa una posición válida dentro del arreglo.";
    }

    

  }
  empleados(){
    let promedioSueldos=0
    let nombre= document.getElementById("nombre").value
    let empleados=nombre.split(";")
    let valorHora=document.getElementById("valorHoras").value
    let valorxhora=valorHora.split(";")
    let numeroHoras=document.getElementById("horas").value
    let horas=numeroHoras.split(";")
    let totalSueldos=0
    let con=0
    if (empleados.length === 0) {
      document.getElementById("resp").textContent = "Agrega al menos un empleado.";
    } else {
     for (let i = 0; i < empleados.length; i++) {
       totalSueldos+=parseFloat(horas[i])*parseFloat(valorxhora[i])
       con=con+1
      }
                  
      promedioSueldos=totalSueldos/con;
      document.getElementById("resp").textContent = "Promedio de sueldos: " + promedioSueldos.toFixed(2);                    
    }
    
    
  }
  base2(){
    let num=document.getElementById("datos").value
    let binario=[]
    let binariofinal=[]
    let decimal=parseInt(num)
    let resp=document.getElementById("resp")
    while(decimal>0){
      let residuo=decimal%2
      binario.push(residuo)
      decimal=Math.floor(decimal/2)
    }
    console.log(binario)
    for(let i=binario.length-1;i>=0;i--){
      binariofinal.push(binario[i])
      console.log(binariofinal)

    }
    resp.textContent=`El numero en base 10 ${num} en base 2 es [${binariofinal}] `
  }
  base10_2(){
    let datos=document.getElementById("datos").value
    let numeros=datos.split(";")
    let binario=[]
    let decimal=0
    let c=0
    let resp=document.getElementById("resp")
    for(let i=numeros.length-1;i>=0;i--){
      binario.push(numeros[i])
    }
    console.log(binario)
    while(c<binario.length){
      decimal+= parseInt(binario[c])*Math.pow(2,c)
     
      c=c+1
    }
    resp.textContent=`El numero en base 2 [${numeros}] en base 10 es ${decimal}`
    
  }
  numerorepetido(){
    let dato=document.getElementById("dato").value
    let numeros=dato.split(";")
    let c=0
    let resp=document.getElementById("resp")
    let repetidos=[]
    let masrep=2
    let a=0
    let contador=[]
    while(c<numeros.length){
      let con=0
      console.log("entre aqui")
      for(let i=0;i<numeros.length;i++){
        if(parseFloat(numeros[c])==parseFloat(numeros[i])){
          con=con+1
          console.log(con)
        }
       
      }
      contador.push(con)
      c=c+1
      
    }
    for(let d=0;d<contador.length;d++){
      if(repetidos==""){
        if(parseInt(contador[d])>=masrep){
          masrep=contador[d]
         repetidos.push(numeros[d])
        }
      }else{
        for(let a=0;a<repetidos.length;a++){
          if(parseInt(numeros[d])!=(repetidos[a])){
            if(parseInt(contador[d])>=masrep){
              masrep=contador[d]
             repetidos.push(numeros[d])
            }
          }
          
        }

      }
    }
    if(repetidos.length==1){
      resp.textContent=`El numero mas repetido es ${repetidos} con ${masrep} repeticiones`
    }else{
      if(repetidos.length>1){
        resp.textContent=`los numeros mas repetidos son ${repetidos} con ${masrep} repeticiones`
      }else{
        if(repetidos.length==0){
          resp.textContent=`Ningun numero se repite`
        }
      }
    }
   
  }
  primos(){
    let num=document.getElementById("datos").value
    let numeros=num.split(";")
    let resultado=[]
    for(let i=0;i<numeros.length;i++){
      num=parseInt(numeros[i])
      let acu=0
      for(let c=1;c<num;c++){
        if(num%c==0){
          acu=acu+c
        }
      }

      if(acu==1){
        resultado.push(num)
      }
    }
    let resp = document.getElementById("resp")
    resp.textContent=`Los numeros primos del arreglo[${numeros}] son [${resultado}]`
  }
  numerosLetras(){

  }
  acuDivisores(num){
    let acu=0
    for(let c=1;c<num;c++){
      if(num%c==0){
        acu=acu+c
      }
    }

  }
  sumaDivisores(){
    let num=document.getElementById("datos").value
    let numeros=num.split(";")
    let resultado=0
    let acu=0
    for(let i=0;i<numeros.length;i++){
      num=parseInt(numeros[i])
      acu=0
      for(let c=1;c<num;c++){
        if(num%c==0){
          acu=acu+c
          console.log("acumulador",acu)
        }
      }
      resultado=resultado+acu
      console.log("resultado",resultado)

    }
    let resp=document.getElementById("resp")
    resp.textContent=`La suma de los divisores del arreglo[${numeros}]  es  ${resultado}`

  }
  perfectos(){
    let num=document.getElementById("datos").value
    let numeros=num.split(";")
    let resultado=[]
    for(let i=0;i<numeros.length;i++){
      num=parseInt(numeros[i])
      let acu=0
      for(let c=1;c<num;c++){
        if(num%c==0){
          acu=acu+c
        }
      }

      if(acu==num){
        resultado.push(num)
      }
    }
    let resp = document.getElementById("resp")
    resp.textContent=`Los numeros perfecto del arreglo[${numeros}] son= [${resultado}]`
    

  }
  billetes(){
    let cantidad =document.getElementById("vuelto").value
    cantidad = parseFloat(cantidad);
    let vueltofinal=parseInt(cantidad)
    let cantidaddecimal=Math.round((cantidad%1)*100)
    const billetesMonedas = [50, 20, 10, 5, 1, 0.5, 0.25, 0.1, 0.05, 0.01];
    let respuesta = "";
    let respuestaFormatoEspecial = "";

    for (let i = 0; i < billetesMonedas.length; i++) {
      const billeteMoneda = billetesMonedas[i];
      let contador = 0;

      while (vueltofinal >= billeteMoneda) {
        contador++;
        vueltofinal-= billeteMoneda;
      }

      if (contador > 0) {
        if (billeteMoneda >= 1) {
          respuestaFormatoEspecial += `${contador} billete${contador > 1 ? "s" : ""} de ${billeteMoneda}, `;
        }
      }
    }

    respuestaFormatoEspecial = respuestaFormatoEspecial.slice(0, -2);
    document.getElementById("resp").textContent = `Cambio: ${respuestaFormatoEspecial} y ${cantidaddecimal} centavos`;
  }
}
const arr = new Arreglos()