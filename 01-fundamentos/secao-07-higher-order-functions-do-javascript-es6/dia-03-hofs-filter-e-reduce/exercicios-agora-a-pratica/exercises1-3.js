// Fonte: <https://restcountries.com/v2/all>
const countries = [
  {
    name: "Afghanistan",
    region: "Asia",
    currencies: [{ code: "AFN", name: "Afghan afghani" }],
    capital: "Kabul",
    population: 40218234,
    area: 652230,
  },
  {
    name: "Åland Islands",
    region: "Europe",
    currencies: [{ code: "EUR", name: "Euro" }],
    capital: "Mariehamn",
    population: 28875,
    area: 1580,
  },
  {
    name: "Albania",
    region: "Europe",
    currencies: [{ code: "ALL", name: "Albanian lek" }],
    capital: "Tirana",
    population: 2837743,
    area: 28748,
  },
  {
    name: "Algeria",
    region: "Africa",
    currencies: [{ code: "DZD", name: "Algerian dinar" }],
    capital: "Algiers",
    population: 44700000,
    area: 2381741,
  },
  {
    name: "American Samoa",
    region: "Oceania",
    currencies: [{ code: "USD", name: "United States Dollar" }],
    capital: "Pago Pago",
    population: 55197,
    area: 199,
  },
  {
    name: "Andorra",
    region: "Europe",
    currencies: [{ code: "EUR", name: "Euro" }],
    capital: "Andorra la Vella",
    population: 77265,
    area: 468,
  },
  {
    name: "Angola",
    region: "Africa",
    currencies: [{ code: "AOA", name: "Angolan kwanza" }],
    capital: "Luanda",
    population: 32866268,
    area: 1246700,
  },
  {
    name: "Anguilla",
    region: "Americas",
    currencies: [{ code: "XCD", name: "East Caribbean dollar" }],
    capital: "The Valley",
    population: 13452,
    area: 91,
  },
];

// 1.
//expectedResult = 120797034;

const getPopulation = () => countries.reduce((acc, country) => acc + country.population, 0);

console.log(getPopulation());

// 2.
//expectedResult = 4311757;

const getTotalArea = () => countries.reduce((acc, country) => acc + country.area, 0);

console.log(getTotalArea());

// 3.
/*expectedResult = {
  name: "American Samoa",
  region: "Oceania",
  currencies: [{ code: "USD", name: "United States Dollar" }],
  capital: "Pago Pago",
  population: 55197,
  area: 199,
};*/

const longestName = () => countries.reduce((acc, country) => country.name.length > acc.name.length ? country : acc);

console.log(longestName());
