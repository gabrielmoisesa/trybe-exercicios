function espaco() {
    console.log(' ')
}

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
console.log('Bem-vinda, ' + info.personagem);
espaco();

info['recorrente'] = 'Sim';
console.log(info);
espaco();

for (let keys in info) {
    console.log(keys)
}
espaco();

for (let key in info) {
    console.log(info[key])
}
espaco();

let info1 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

for (let key in info, info1) {
    if (key === 'recorrente' && info[key] === 'Sim' && info1[key] === 'Sim') {
        console.log('Ambos recorrentes');
    } else {
        console.log(info[key] + ' e ' + info1[key]);
    }
}

