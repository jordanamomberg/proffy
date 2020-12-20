import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    })
}

//método up => incluir no banco e/ou alterar

export async function down(knex: Knex) {
    return knex.schema.dropTable('users');
    
}

//método down => excluir do banco e/ou remover alteração

//como o knex entende js temos que informar no package o arquivo que ele ouve knex:migrate e rollback