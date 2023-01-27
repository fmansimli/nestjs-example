import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Category } from './category.entity';

@Injectable()
export class CategoriesService {
  constructor(@InjectRepository(Category) private repo: Repository<Category>) {}

  findById(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  find() {
    return this.repo.find();
  }

  create(attrs: Partial<Category>) {
    const category = this.repo.create(attrs);
    if (!category) return null;

    return this.repo.save(category);
  }

  async update(id: number, attrs: Partial<Category>) {
    const category = this.repo.findOne({ where: { id } });
    if (!category) return null;

    return this.repo.save(Object.assign(category, attrs));
  }

  async delete(id: number) {
    const category = await this.repo.findOne({ where: { id } });
    if (!category) return null;

    return this.repo.remove(category);
  }
}
