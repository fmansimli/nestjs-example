import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';

import { UsersService } from 'src/features/users/users.service';

@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
  constructor(private readonly service: UsersService) {}

  async use(req: any, res: Response, next: NextFunction) {
    const { userId } = req.sesssion || {};

    if (userId) {
      const user = await this.service.findById(userId);
      req.currentUser = user;
    }

    next();
  }
}
