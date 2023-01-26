import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './features/auth/auth.module';
import { AccountModule } from './features/account/account.module';
import { ProjectsModule } from './features/projects/projects.module';
import { EventsModule } from './features/events/events.module';

import { Project } from './features/projects/project.entity';
import { Event } from './features/events/event.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Project, Event],
      synchronize: true,
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    AccountModule,
    ProjectsModule,
    EventsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
