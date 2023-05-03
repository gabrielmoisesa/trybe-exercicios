let pecaDeXadrez = "Rainha";

switch (pecaDeXadrez.toLowerCase()) {
    case "peão":
        console.log("Move para frente");
        break;
    
    case "torre":
        console.log("Move em linha reta horizontamente e verticalmente");
        break;

    case "cavalo":
        console.log("Move duas casas na horizontal ou na vertical e depois uma para o lado");
        break;

    case "bispo":
        console.log("Move por qualquer número de casas, mas somente nas diagonais");
        break;

    case "rainha":
        console.log("Move qualquer número de casas em linha reta verticalmente, horizontalmente ou diagonalmente");
        break;

    case "rei":
        console.log("Move para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance");
        break;

    default:
        console.log("Erro: peça inválida!")
}