module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 1234),
      database: env('DATABASE_NAME', 'ecom'),
      user: env('DATABASE_USERNAME', 'ecom'),
      password: env('DATABASE_PASSWORD', 'admin1234'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
