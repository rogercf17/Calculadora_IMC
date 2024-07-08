// Variáveis
let resultado1 = document.getElementById("resultado-peso");
let resultado2 = document.getElementById("resultado-altura");
let resultado3 = document.getElementById("resultado-imc");
let lista_tr = [
    document.getElementById("tr1"), 
    document.getElementById("tr2"), 
    document.getElementById("tr3"),
    document.getElementById("tr4"),
    document.getElementById("tr5")
];

function calcularImc() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const imc = peso / altura**2;
    const imcFinal = imc.toFixed(2);

    if(imc <= 18.5) {
        mudarCorTrAzul(lista_tr[0]);
        resultado1.innerText = `Peso: ${peso}`;
        resultado2.innerText = `Altura: ${altura.toFixed(2)}`;
        resultado3.innerText = `IMC: ${imcFinal}`;
    }else if(imc <= 24.9) {
        mudarCorTrAzul(lista_tr[1]);
        resultado1.innerText = `Peso: ${peso}`;
        resultado2.innerText = `Altura: ${altura.toFixed(2)}`;
        resultado3.innerText = `IMC: ${imcFinal}`;
    }else if(imc <= 29.9) {
        mudarCorTrAzul(lista_tr[2]);
        resultado1.innerText = `Peso: ${peso}`;
        resultado2.innerText = `Altura: ${altura.toFixed(2)}`;
        resultado3.innerText = `IMC: ${imcFinal}`;
    }else if(imc <= 39.9) {
        mudarCorTrAzul(lista_tr[3]);
        resultado1.innerText = `Peso: ${peso}`;
        resultado2.innerText = `Altura: ${altura.toFixed(2)}`;
        resultado3.innerText = `IMC: ${imcFinal}`;
    }else if(imc >= 40.0) {
        mudarCorTrAzul(lista_tr[4]);
        resultado1.innerText = `Peso: ${peso}`;
        resultado2.innerText = `Altura: ${altura.toFixed(2)}`;
        resultado3.innerText = `IMC: ${imcFinal}`;
    }
}

function mudarCorTrAzul(tr) {
    return tr.style.background = '#5596eb';
}

function limparTela() {
    document.getElementById("peso").value = '';
    document.getElementById("altura").value = '';
    document.getElementById("resultado-peso").innerText = '';
    document.getElementById("resultado-altura").innerText = '';
    document.getElementById("resultado-imc").innerText = '';
    lista_tr.forEach(tr => tr.style.background = '#fff');
}