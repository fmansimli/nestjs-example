import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Event } from './event.entity';

@Injectable()
export class EventsService {
  constructor(@InjectRepository(Event) private repo: Repository<Event>) {}

  async find(query: Partial<Event>) {
    return this.repo.find({ where: query });
  }

  findOne(title: string) {
    return this.repo.findOne({ where: { title } });
  }

  findById(id: number) {
    return this.repo.findBy({ id });
  }

  create(title: string, description: string) {
    const entitiy = this.repo.create({ title, description });
    return this.repo.save(entitiy);
  }

  async update(id: number, attrs: Partial<Event>) {
    const old = await this.repo.findOne({ where: { id } });
    return this.repo.save(Object.assign(old, attrs));
  }
}
