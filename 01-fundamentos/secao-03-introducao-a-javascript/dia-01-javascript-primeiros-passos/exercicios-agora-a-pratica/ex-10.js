let valorCusto = 20;
let valorVenda = 60;
let impostoSobreOCusto = 1.2;

if (valorCusto >= 0 && valorVenda >= 0) {
    let valorCustoTotal = valorCusto * impostoSobreOCusto
    let lucro = valorVenda - valorCustoTotal
    console.log("O lucro foi de: " + lucro)
} else {
    console.log("Erro: entrada inválida!")
}
