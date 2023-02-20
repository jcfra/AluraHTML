/* console.log('Olá Mundo');
let x = 40;
let y = 10;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`); */

function calcPct(x, y) {
    return y / x * 100;
}
function calcularImovel(metragem, quartos) {
    let preco = 3000;
    switch (quartos) {
        case 1:
            return metragem * preco;
        case 2:
            return metragem * preco * 1.2;
        case 3:
            return metragem * preco * 1.5;
        default:
            return 999;
    }
}
let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa ${preco}`);