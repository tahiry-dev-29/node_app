module.exports = {
   development: {
      client: 'sqlite3',
      connection: {
         filename: './database.db',
      },
      useNullAsDefault: true,
      migrations: {
         directory: './migrations',
      },
   },
};
