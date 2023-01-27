import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './features/auth/auth.module';
import { AccountModule } from './features/account/account.module';
import { ProjectsModule } from './features/projects/projects.module';
import { EventsModule } from './features/events/events.module';

import { Project } from './features/projects/project.entity';
import { Event } from './features/events/event.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'sqlite',
          database: config.get<string>('DB_NAME'),
          entities: [Project, Event],
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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
