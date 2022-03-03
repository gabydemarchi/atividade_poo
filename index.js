class Retangulo {
  constructor (largura, altura){  
   this.largura= largura;
   this.altura= altura;
 }
area(){
  return this.calcularArea()
  
}

calcularArea(){
 return this.largura*this.altura;
  }
 } 

let retangulo = new Retangulo (30, 30)
console.log(retangulo.area())

let quadrado = new Retangulo (70, 70)
console.log(quadrado.area())

 


  



