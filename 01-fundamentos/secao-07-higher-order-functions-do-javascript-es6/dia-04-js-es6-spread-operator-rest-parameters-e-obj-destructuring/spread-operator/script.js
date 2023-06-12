// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Caqui', 'Manga', 'Uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Banana', 'Coco', 'Abacate'];

const fruitSalad = (fruit, additional) => {
    const allFruits = [...fruit, ...additional];
    return allFruits;
};

console.log(fruitSalad(specialFruit, additionalItens));