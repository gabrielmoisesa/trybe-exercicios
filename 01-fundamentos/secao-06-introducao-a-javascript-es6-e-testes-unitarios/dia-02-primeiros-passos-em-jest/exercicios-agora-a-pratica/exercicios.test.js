const removeItem = require('./removeItem');
const myFizzBuzz = require('./myFizzBuzz');
const { encode } = require('./encodeDecode');
const { decode } = require('./encodeDecode');
const techList = require('./techList');
const hydrate = require('./hydrate');

describe('Exercício 1', () => {
    it('Verifique se a chamada removeItem([1, 2, 3, 4], 3) retorna o array esperado', () => {
        expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });
    it('Verifique se a chamada removeItem([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        expect(removeItem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });
    it('Verifique se a chamada removeItem([1, 2, 3, 4], 5) retorna o array esperado', () => {
        expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
    });
});

describe('Exercício 2', () => {
    it('Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz"', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });
    it('Caso num seja um número divisível apenas por 3, a função retorna "fizz"', () => {
        expect(myFizzBuzz(9)).toBe('fizz');
    });
    it('Caso num seja um número divisível apenas por 5, a função retorna "buzz"', () => {
        expect(myFizzBuzz(10)).toBe('buzz');
    });
    it('Caso num seja um número que não é divisível nem por 3 nem por 5, a função retorna o próprio número num', () => {
        expect(myFizzBuzz(7)).toBe(7);
    });
    it('Caso num não seja um número, a função retorna false', () => {
        expect(myFizzBuzz('test')).toBe(false);
    });
});

describe('Exercício 3', () => {
    it('Teste se encode e decode são funções', () => {
        expect(typeof encode).toBe('function');
        expect(typeof decode).toBe('function');
    });
    it('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4, 5, respectivamente', () => {
        expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
    });
    it('Para a função decode, teste se os números 1, 2, 3, 4, 5 são convertidos nas vogais a, e, i, o, u, respectivamente', () => {
        expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
    });
    it('Teste se as demais letras e os demais números não são convertidos para cada caso', () => {
        expect(encode('z, y, m, n, p')).not.toBe('1, 2, 3, 4, 5');
        expect(decode('6, 7, 8, 9, 10')).not.toBe('a, e, i, o, u');
    });
    it('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro', () => {
        expect(encode('a, e, i')).toBe('1, 2, 3');
        expect(decode('1, 2, 3')).toBe('a, e, i');
    });
});

describe('Exercício 4: Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologia deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Exercício 5: Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cerveja e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});