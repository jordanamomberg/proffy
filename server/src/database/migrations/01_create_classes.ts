import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
}

//método up => incluir no banco e/ou alterar

//CASCADE = Caso um professor seja deletado da plataforma todas as aulas deles sumirão tb.

export async function down(knex: Knex) {
    return knex.schema.dropTable('classes');
    
}

//método down => excluir do banco e/ou remover alteração

//como o knex entende js temos que informar no package o arquivo que ele ouve knex:migrate e rollback