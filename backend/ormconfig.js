module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'user',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
