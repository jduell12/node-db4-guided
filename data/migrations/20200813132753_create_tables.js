exports.up = function (knex) {
  return knex.schema
    .createTable("accounts", (tbl) => {
      tbl.increments("id");
      tbl.string("name", 256).notNullable().unique().index();
      tbl.string("email", 255).notNullable();
    })
    .createTable("classes", (tbl) => {
      tbl.increments("id");
      tbl.string("class_type", 256).notNullable().unique().index();
    })
    .createTable("characters", (tbl) => {
      tbl.increments("id");
      tbl.string("name", 256).notNullable().unique().index();
      tbl
        .integer("account_id")
        .unsigned()
        .notNullable()
        .references("accounts.id")
        .onDelete("RESTRICT") //options -> CASCADE, RESTRICT, SET NULL, DO NOTHING, SET DEFAULT
        //RESTRICT stops you from deleting a record in the table if there are records using that primary key
        //CASCADE if you change value --> changes automatically
        .onUpdate("CASCADE"); //options -> CASCADE, RESTRICT, SET NULL, DO NOTHING, SET DEFAULT
      // or could write as
      // tbl.integer("account_id").unsigned().notNullable().references('id').inTable('accounts);
      tbl
        .integer("class_id")
        .unsigned()
        .notNullable()
        .references("classes.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  knex.schema
    .dropTableIfExists("characters")
    .dropTableIfExists("classes")
    .dropTableIfExists("accounts");
};
