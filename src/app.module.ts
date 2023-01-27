import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './features/auth/auth.module';
import { AccountModule } from './features/account/account.module';
import { ProjectsModule } from './features/projects/projects.module';
import { EventsModule } from './features/events/events.module';
import { CategoriesModule } from './features/categories/categories.module';

import { Project } from './features/projects/project.entity';
import { Event } from './features/events/event.entity';
import { Category } from './features/categories/category.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'sqlite',
          database: config.get<string>('DB_NAME'),
          entities: [Project, Event, Category],
          synchronize: true,
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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
