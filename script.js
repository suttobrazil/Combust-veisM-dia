function calcularMedia() {
    let distancia = parseFloat(document.getElementById('distancia').value);
    let combustivel = parseFloat(document.getElementById('combustivel').value);

    if (!isNaN(distancia) && !isNaN(combustivel) && combustivel > 0) {
        let media = distancia / combustivel;
        document.getElementById('mediaResultado').innerText = 'Média de Consumo: ' + media.toFixed(2) + ' km/l';
    } else {
        document.getElementById('mediaResultado').innerText = 'Por favor, insira valores válidos.';
    }
}