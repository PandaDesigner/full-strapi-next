module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cd902a1a6gdv169j7ung-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarra_x3rh'),
      user: env('DATABASE_USERNAME', 'laguitarra'),
      password: env('DATABASE_PASSWORD', 'blUslikg39ZFFrIPSrZGOZctTJeKGtGn'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
