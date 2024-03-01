// Update with your config settings.


const knexfile = {

  development: {
    client: 'postgresql',
    connection: {
      host:'localhost',
      port:5400,
      database: 'postgres',
      user:     'postgres',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

export default knexfile