const fs = require("fs").promises;

// async function printCharacters() {
//   try {
//     const data = await fs.readFile("./simpsons.json", "utf-8");
//     const simpsons = JSON.parse(data);
//     simpsons.forEach(({ id, name }) => console.log(`${id} - ${name}`));
//   } catch (err) {
//     console.error(`Erro ao ler o arquivo: ${err.message}`);
//   }
// }

// printCharacters();

// async function getCharacterById(id) {
//   try {
//     const data = await fs.readFile("./simpsons.json", "utf-8");
//     const simpsons = JSON.parse(data);
//     const character = simpsons.find((simpson) => simpson.id === id);
//     if (!character) {
//       throw new Error("id não encontrado");
//     }
//     return character;
//   } catch (err) {
//     console.error(`Erro ao ler o arquivo: ${err.message}`);
//   }
// }

// const idToSearch = "8";
// getCharacterById(idToSearch)
// .then((character) => console.log(`\nDados do personagem de id ${idToSearch}:`,character));

// async function removeCharacterById(id) {
//   try {
//     const data = await fs.readFile("./simpsons.json", "utf-8");
//     const simpsons = JSON.parse(data);
//     const character = simpsons.find((simpson) => simpson.id === id);
//     if (!character) {
//       throw new Error("id não encontrado");
//     }
//     const newSimpsons = simpsons.filter((simpson) => simpson.id !== id);
//     await fs.writeFile("./simpsons.json", JSON.stringify(newSimpsons));
//     console.log(`Removeu o personagem de id ${id} com sucesso!`);
//   } catch (err) {
//     console.error(`\nErro ao ler o arquivo: ${err.message}`);
//   }
// }

// const idsToRemove = ["10", "6"];
// idsToRemove.forEach((id) => removeCharacterById(id));


// async function createNewFile() {
//   try {
//     const data = await fs.readFile("./simpsons.json", "utf-8");
//     const simpsons = JSON.parse(data);
//     const newSimpsons = simpsons.filter((simpson) => simpson.id <= 4);
//     await fs.writeFile("./simpsonFamily.json", JSON.stringify(newSimpsons));
//     console.log("\nArquivo criado com sucesso!");
//   } catch (err) {
//     console.error(`\nErro ao ler o arquivo: ${err.message}`);
//   }
// }

// createNewFile();

// async function addNelsonToFamily() {
//   try {
//     const familyData = await fs.readFile("./simpsonFamily.json", "utf-8");
//     const simpsons = JSON.parse(familyData);

//     const data = await fs.readFile("./simpsons.json", "utf-8");
//     const allSimpsons = JSON.parse(data);

//     const newFamilyMember = allSimpsons.find((simpson) => simpson.name === "Nelson Muntz");

//     if (!newFamilyMember) {
//       throw new Error("O personagem Nelson não foi encontrado");
//     }

//     simpsons.push(newFamilyMember);

//     await fs.writeFile("./simpsonFamily.json", JSON.stringify(simpsons));
//     console.log("\nArquivo alterado com sucesso!");
//   } catch (err) {
//     console.error(`\nErro ao ler o arquivo: ${err.message}`);
//   }
// }

// addNelsonToFamily();

async function replaceNelsonInFamily() {
  try {
    const familyData = await fs.readFile("./simpsonFamily.json", "utf-8");
    const simpsons = JSON.parse(familyData);

    const removedNelson = simpsons.filter((simpson) => simpson && simpson.id !== '8');
    const addMaggie = [...removedNelson, { "id": "5", "name": "Maggie Simpson" }] 
    const updatedFamily = await JSON.stringify(addMaggie, null, 2);

    await fs.writeFile("./simpsonFamily.json", updatedFamily);
    console.log("\nArquivo alterado com sucesso!");
  } catch (err) {
    console.error(`\nErro ao ler o arquivo: ${err.message}`);
  }
}

replaceNelsonInFamily();