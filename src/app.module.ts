import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthModule } from './features/auth/auth.module';
import { AccountModule } from './features/account/account.module';
import { ProjectsModule } from './features/projects/projects.module';
import { EventsModule } from './features/events/events.module';
import { CategoriesModule } from './features/categories/categories.module';
import { TeamsModule } from './features/teams/teams.module';
import { UsersModule } from './features/users/users.module';
import { TagsModule } from './features/tags/tags.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'sqlite',
          database: config.get<string>('DB_NAME'),
          autoLoadEntities: true,
          synchronize: true,
          migrationsRun: true,
        };
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env`,
    }),
    AuthModule,
    AccountModule,
    ProjectsModule,
    EventsModule,
    CategoriesModule,
    TeamsModule,
    UsersModule,
    TagsModule,
  ],
})
export class AppModule {}
