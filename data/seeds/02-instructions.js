
exports.seed = function(knex) {
  return knex('instructions').truncate()
    .then(function () {
      return knex('instructions').insert([
        {instructions_id: 1, step_number: 1, quantity: 1, ingredient_id: 4, instruction: 'Fry slice of spam on pan'},
        {instructions_id: 2, step_number: 2, quantity: 1, ingredient_id: 1, instruction: 'Wrap cook slices of spam in 1 cup of rice made into rice block'},
        {instructions_id: 3, step_number: 3, quantity: 1, ingredient_id: 2, instruction: 'Wrap blocks of rice with seaweed'},
        {instructions_id: 4, step_number: 1, quantity: 1, ingredient_id: 6, instruction: 'Fry kimchi on pan'},
        {instructions_id: 5, step_number: 2, quantity: 1, ingredient_id: 7, instruction: 'Add sliced mushrooms to pan'},
        {instructions_id: 6, step_number: 3, quantity: 1, ingredient_id: 5, instruction: 'Add egg on pan and leave until fluffy'},
        {instructions_id: 7, step_number: 1, quantity: 1, ingredient_id: 1, instruction: 'make 1 cup of steamed rice'},
        {instructions_id: 8, step_number: 2, quantity: 1, ingredient_id: 3, instruction: 'Stir fry sesame oil, mushroom, kimchi, and egg on pan'},
        {instructions_id: 9, step_number: 2, quantity: 1, ingredient_id: 7, instruction: 'Stir fry sesame oil, mushroom, kimchi, and egg on pan'},
        {instructions_id: 10, step_number: 2, quantity: 1, ingredient_id: 6, instruction: 'Stir fry sesame oil, mushroom, kimchi, and egg on pan'},
        {instructions_id: 11, step_number: 2, quantity: 1, ingredient_id: 5, instruction: 'Stir fry sesame oil, mushroom, kimchi, and egg on pan'},
        {instructions_id: 12, step_number: 3, quantity: 1, ingredient_id: 1, instruction: 'Add in rice and stir fry'},
        {instructions_id: 13, step_number: 4, quantity: 1, ingredient_id: 2, instruction: 'Top off with seaweed'}
      ]);
    });
};
