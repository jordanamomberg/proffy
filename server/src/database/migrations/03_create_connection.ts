import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        table.timestamp('created_at')
            .defaultTo('now()')
            .notNullable();
    })
}

//método up => incluir no banco e/ou alterar

//CASCADE = Caso um professor seja deletado da plataforma todas as aulas deles sumirão tb.

//defaultTO('now()')... quando o usuário clicar em entrar em contato vai pegar o horário atual

export async function down(knex: Knex) {
    return knex.schema.dropTable('connections');
    
}

//método down => excluir do banco e/ou remover alteração

//como o knex entende js temos que informar no package o arquivo que ele ouve knex:migrate e rollback