// Find the country with the highest population programmatically
// Use foreign key ids to determine the country with the highest population
// console.log the name of the country with the highest total population
const countries = [
  { id: 4, name: 'New Zealand' },
  { id: 1, name: 'USA' },
  { id: 2, name: 'England' },
  { id: 3, name: 'Russia' },
];

const cities = [
  { id: 3, country_id: 1, name: 'Los Angeles' },
  { id: 8, country_id: 3, name: 'Moscow' },
  { id: 2, country_id: 1, name: 'Seattle' },
  { id: 11, country_id: 4, name: 'Wellington' },
  { id: 5, country_id: 1, name: 'San Diego' },
  { id: 7, country_id: 2, name: 'Manchester' },
  { id: 9, country_id: 3, name: 'Novosibirsk' },
  { id: 1, country_id: 1, name: 'New York' },
  { id: 6, country_id: 2, name: 'London' },
  { id: 10, country_id: 4, name: 'Auckland' },
  { id: 4, country_id: 1, name: 'Houston' },
];

const populations = [
  { id: 2, city_id: 2, amount: 724305 },
  { id: 4, city_id: 4, amount: 2310000 },
  { id: 6, city_id: 6, amount: 8982000 },
  { id: 3, city_id: 3, amount: 3967000 },
  { id: 1, city_id: 1, amount: 8419000 },
  { id: 5, city_id: 5, amount: 1410000 },
  { id: 8, city_id: 8, amount: 11920000 },
  { id: 7, city_id: 7, amount: 553230 },
  { id: 11, city_id: 11, amount: 212700 },
  { id: 9, city_id: 9, amount: 1511000 },
  { id: 10, city_id: 10, amount: 1657000 },
];

console.log('countries.length', countries.length);
console.log('cities.length', cities.length);
console.log('populations.length!', populations.length);
var i,
  j,
  k,
  q = 0;
var finalList = [];
var populations_sum = 0;
var temp_population_sum = {};
for (i = 0; i < countries.length; i++) {
  for (j = 0; j < cities.length; j++) {
    if (countries[i].id == cities[j].country_id) {
      for (k = 0; k < populations.length; k++) {
        if (cities[j].id == populations[k].city_id) {
          var temp_population = populations[k].amount;
          populations_sum += temp_population;
          console.log(
            'country name ::' +
              countries[i].name +
              ':::city_name:::' +
              cities[j].name +
              '::population:::' +
              populations[k].amount
          );
        }
      }
    }
  }
  temp_population = { id: countries[i].id, amount: populations_sum };
  finalList.push(temp_population);
  console.log('finalList::' + JSON.stringify(finalList));
  console.log(
    'total population of ' + countries[i].name + '::' + populations_sum
  );
}

for (var a = 0; a < finalList.length; a++) {
  var maxpopulation = finalList[0].amount;
  if (maxpopulation < finalList[a].amount) {
    maxpopulation = finalList[a].amount;
  }
}
console.log('final maxpopulation::' + maxpopulation);
