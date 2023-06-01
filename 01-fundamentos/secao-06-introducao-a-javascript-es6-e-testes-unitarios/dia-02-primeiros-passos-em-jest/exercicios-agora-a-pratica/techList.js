const techList = (techs, nam) => {
  try {
    if (techs.length === 0) {
      throw new Error('Vazio!')
    }
    const techObjects = [];
    for (let i = 0; i < techs.length; i += 1) {
      const obj = {
        tech: techs[i],
        name: nam,
      };
      techObjects.push(obj);
    }
    techObjects.sort((a, b) => a.tech.localeCompare(b.tech));
    return techObjects;
  } catch (error) {
    return error.message;
  }
};

module.exports = techList;
