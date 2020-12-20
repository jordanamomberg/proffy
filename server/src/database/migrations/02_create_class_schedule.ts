import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();

        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
}

//método up => incluir no banco e/ou alterar

//CASCADE = Caso um professor seja deletado da plataforma todas as aulas deles sumirão tb.

export async function down(knex: Knex) {
    return knex.schema.dropTable('class_schedule');
    
}

//método down => excluir do banco e/ou remover alteração

//como o knex entende js temos que informar no package o arquivo que ele ouve knex:migrate e rollback