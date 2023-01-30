import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Serialize } from 'src/decorators/serialize.decorator';

import { ProjectsService } from './projects.service';

import { CreateProjectDto } from './dtos/create.dto';
import { UpdateProjectDto } from './dtos/update.dto';
import { RespProjectDto } from './dtos/resp-project.dto';

@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @Serialize(RespProjectDto)
  @Get()
  async getAll(@Query('title') title: string) {
    return await this.projectsService.find({ title });
  }

  @Serialize(RespProjectDto)
  @Get(':id')
  async getById(@Param('id') id: number) {
    const project = await this.projectsService.findById(id);
    return project;
  }

  @Post()
  async createProject(@Body() body: CreateProjectDto) {
    const data = await this.projectsService.save(body);
    return data;
  }

  @Patch(':id')
  async updateById(@Param('id') id: number, @Body() body: UpdateProjectDto) {
    const data = await this.projectsService.update(id, body);
    return data;
  }

  @Delete(':id')
  async deleteById(@Param('id') id: number) {
    const data = await this.projectsService.remove(id);
    return data;
  }
}
