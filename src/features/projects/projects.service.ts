import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Project } from './project.entity';

@Injectable()
export class ProjectsService {
  constructor(@InjectRepository(Project) private repo: Repository<Project>) {}

  find(query: Partial<Project>) {
    return this.repo.find({ where: query });
  }

  findById(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  save(body: Partial<Project>) {
    const project = this.repo.create(body);
    return this.repo.save(project);
  }

  async update(id: number, attr: Partial<Project>) {
    const project = await this.repo.findOne({ where: { id } });
    return this.repo.save(Object.assign(project, attr));
  }

  async remove(id: number) {
    const project = await this.repo.findOne({ where: { id } });
    return this.repo.remove(project);
  }
}
