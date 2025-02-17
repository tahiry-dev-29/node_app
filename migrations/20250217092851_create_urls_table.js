/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
   return knex.schema.createTable('urls', (table) => {
      table.increments('id').primary();
      table.text('longUrl').notNullable();
      table.string('shortCode').notNullable().unique();
      table.timestamp('createdAt').defaultTo(knex.fn.now());
   });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
   return knex.schema.createTable('urls', (table) => {
      table.increments('id').primary();
      table.text('longUrl').notNullable();
      table.string('shortCode').notNullable().unique();
      table.timestamp('createdAt').defaultTo(knex.fn.now());
   });
};

exports.down = function (knex) {
   return knex.schema.dropTable('urls');
};
