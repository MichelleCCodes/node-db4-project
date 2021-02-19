
exports.seed = function(knex) {
  return knex('ingredients').truncate()
    .then(function () {
      return knex('ingredients').insert([
        {ingredient_id: 1, ingredient: 'rice'},
        {ingredient_id: 2, ingredient: 'seaweed'},
        {ingredient_id: 3, ingredient: 'seasame oil'},
        {ingredient_id: 4, ingredient: 'spam'}, 
        {ingredient_id: 5, ingredient: 'egg'},
        {ingredient_id: 6, ingredient: 'kimchi'},
        {ingredient_id: 7, ingredient: 'mushroom'},
      ]);
    });
};
