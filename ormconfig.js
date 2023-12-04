module.exports = {
    type: 'postgres',
    url: 'postgres://weddie_voting_user:6kJZxBFeTc9jwAH9N0cElo3BoMO7YTd3@dpg-clmurt7feb2c73ed9jug-a.singapore-postgres.render.com/weddie_voting',
    port: 5432,
    username: 'weddie_voting_user',
    password: '6kJZxBFeTc9jwAH9N0cElo3BoMO7YTd3',
    database: 'weddie_voting',
    entities: ['dist/**/*.entity.js'],
    synchronize: true,
};
