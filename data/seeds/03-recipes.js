
exports.seed = function(knex) {
  return knex('recipes').truncate()
    .then(function () {
      return knex('recipes').insert([
        {recipe_id: 1, recipe_name: 'spam masubi', instructions_id: 1, step_number: 1},
        {recipe_id: 2, recipe_name: 'spam masubi', instructions_id: 2, step_number: 2},
        {recipe_id: 3, recipe_name: 'spam masubi', instructions_id: 3, step_number: 3},
        {recipe_id: 4, recipe_name: 'omelette', instructions_id: 4, step_number: 1},
        {recipe_id: 5, recipe_name: 'omelette', instructions_id: 5, step_number: 2},
        {recipe_id: 6, recipe_name: 'omelette', instructions_id: 6, step_number: 3},
        {recipe_id: 7, recipe_name: 'kimchi fried rice', instructions_id: 7, step_number: 1},
        {recipe_id: 8, recipe_name: 'kimchi fried rice', instructions_id: 8, step_number: 2},
        {recipe_id: 9, recipe_name: 'kimchi fried rice', instructions_id: 9, step_number: 2},
        {recipe_id: 10, recipe_name: 'kimchi fried rice', instructions_id: 10, step_number: 2},
        {recipe_id: 11, recipe_name: 'kimchi fried rice', instructions_id: 11, step_number: 2},
        {recipe_id: 12, recipe_name: 'kimchi fried rice', instructions_id: 12, step_number: 3},
        {recipe_id: 13, recipe_name: 'kimchi fried rice', instructions_id: 13, step_number: 4}
      ]);
    });
};
