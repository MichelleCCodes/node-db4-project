exports.up = function(knex) {
return knex.schema
.createTable("ingredients", table => {
    table.increments("ingredient_id").notNullable()
    table.string("ingredient").unique()
})
.createTable("instructions", table => {
    table.increments("instructions_id").unique().notNullable()
    table.integer("step_number")
    table.integer("quantity")
    table.text("instruction")
    table.integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredient_id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
})
.createTable("recipes", table => {
    table.increments("recipe_id").notNullable().unique()
    table.string("recipe_name")
    table.integer("instructions_id")
        .unsigned()
        .notNullable()
        .references("instructions_id")
        .inTable("instructions")
        .onDelete("RESTRICT")
    table.integer("step_number")
        .unsigned()
        .notNullable()
        .references("instructions_id")
        .inTable("instructions")
        .onDelete("RESTRICT")
})
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("recipes")
  .dropTableIfExists("instructions")
  .dropTableIfExists("ingredients")
};
