//1 
const button = document.getElementById('btn');

button.addEventListener('click', () => {
    alert("Bom dia, Mundo!!!");
});

//2
const input = document.getElementById('valor');


input.addEventListener('change', () => {

  const valor = input.value;
  const cubo = valor * valor * valor;


  alert(`O cubo de ${valor} é ${cubo}`);
});

// 3

const inputgraus = document.getElementById('conversao');

inputgraus.addEventListener('change', () => {

    const valor = inputgraus.value;
    
    const calculo = (valor - 32) * (5 / 9);

    alert('O valor de Fahrenheit para Celsius é '+ calculo.toFixed(2));
})
 

// 4

const base = document.getElementById('base');
const altura = document.getElementById('altura');

var resultado = document.getElementById('resultado__base-altura');

function calcularAreaTriangulo (base,  altura){
    const area = parseInt(base.value)  * parseInt(altura.value) / 2;
    return area;
};

if(base != null && altura != null){
    altura.addEventListener('change', () => {
        resultado.innerHTML = calcularAreaTriangulo(base, altura)
    })
}


// 5

const raio = document.getElementById('raio');

var resultadoCalculo = document.getElementById('resultado-raio');

function calcularAreaCirc(raio){
        const area = Math.PI * (parseFloat(raio.value) * parseFloat(raio.value));
         
        return area;
}

function calcularPerimetro(raio){
    const perimetro = 2 * Math.PI * parseFloat(raio.value)
    return perimetro
}



if (raio != null){
    raio.addEventListener('change', () => {
        resultadoCalculo.innerHTML = "Area = " + calcularAreaCirc(raio).toFixed(2).toString() + " Perimetro = " + calcularPerimetro(raio).toFixed(2).toString();
    })
}

//6 

const numDigitado = document.getElementById('num-digitado');
const resultadoInversao = document.getElementById('resultado-inversao');

function reverterNumero(str) {
    return str.split("").reverse().join("");
}

numDigitado.addEventListener("change", () => {
    resultadoInversao.innerHTML = reverterNumero(numDigitado.value).toString();
});