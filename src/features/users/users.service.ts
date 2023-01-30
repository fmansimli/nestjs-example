import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly repo: Repository<User>) {}

  find(query: Partial<User>) {
    return this.repo.find({ where: query });
  }

  async findById(id: number) {
    return { id, name: 'test' };
  }

  save(body: Partial<User>) {
    const user = this.repo.create(body);
    return this.repo.save(user);
  }

  async update(id: number, attr: Partial<User>) {
    const user = await this.repo.findOne({ where: { id } });
    return this.repo.save(Object.assign(user, attr));
  }

  async remove(id: number) {
    const user = await this.repo.findOne({ where: { id } });
    return this.repo.remove(user);
  }
}
