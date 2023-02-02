import { Module, Global, DynamicModule } from '@nestjs/common';
import { DbConfig } from './interfaces';

@Global()
@Module({})
export class DatabaseModule {
  static forRoot(_config: DbConfig): DynamicModule {
    return {
      module: DatabaseModule,
      exports: [],
      providers: [
        {
          inject: [],
          provide: 'DB',
          useFactory: async () => {
            const client: any = {};
            return client;
          },
        },
      ],
    };
  }
}
