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

import { Project } from './features/projects/project.entity';
import { Event } from './features/events/event.entity';
import { Category } from './features/categories/category.entity';
import { Team } from './features/teams/team.entity';
import { User } from './features/users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'sqlite',
          database: config.get<string>('DB_NAME'),
          entities: [Project, Event, Category, Team, User],
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
  ],
})
export class AppModule {}
