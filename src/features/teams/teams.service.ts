import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Team } from './team.entity';

@Injectable()
export class TeamsService {
  constructor(@InjectRepository(Team) private repo: Repository<Team>) {}
}
