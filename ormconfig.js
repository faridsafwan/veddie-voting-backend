module.exports = {
    type: 'postgres',
    url: process.env.DATABASE_URL ||
        'postgres://weddie_voting_user:6kJZxBFeTc9jwAH9N0cElo3BoMO7YTd3@dpg-clmurt7feb2c73ed9jug-a.singapore-postgres.render.com/weddie_voting',
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ['dist/**/*.entity.js'],
    synchronize: true,
};
