let config = {
  synchronize: false,
  migrations: ['migrations/*.js'],
  migrationsTableName: 'app_migrations',
  cli: {
    migrationsDir: 'migrations',
  },
};

switch (process.env.NODE_ENV) {
  case 'development':
    Object.assign(config, {
      type: 'sqlite',
      database: 'dev.sqlite',
      entities: ['**/*.entity.js'],
    });
    break;

  case 'test':
    Object.assign(config, {
      type: 'sqlite',
      database: 'test.sqlite',
      entities: ['**/*.entity.ts'],
      migrationsRun: true,
    });

  case 'production':
    Object.assign(config, {
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: ['**/*.entity.js'],
      migrationsRun: true,
      ssl: {
        rejectUnauthorized: false,
      },
    });
    break;

  default:
    throw new Error('unknown environment');
}

module.exports = config;
