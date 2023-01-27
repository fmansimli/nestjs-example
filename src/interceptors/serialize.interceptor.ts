import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToInstance } from 'class-transformer';

export class SerializeInterceptor implements NestInterceptor {
  constructor(private readonly dto: any) {}

  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
    return next.handle().pipe(
      map((data: any) => {
        const serialized = plainToInstance(this.dto, data, {
          excludeExtraneousValues: true,
        });
        return { body: serialized, meta: { url: '/api/v1/' } };
      }),
    );
  }
}
