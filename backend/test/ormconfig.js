module.exports = {
  ssl : true,
  type: 'postgres',
  host: 'ep-little-water-49094646-pooler.us-east-1.postgres.vercel-storage.com',
  port: 5432,
  username: 'default',
  password: '1vBVbfdF5IPH',
  database: 'verceldb',
  synchronize: true,
  logging: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
