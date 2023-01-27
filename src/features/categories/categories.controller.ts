import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { NotFoundException, HttpCode, HttpStatus } from '@nestjs/common';

import { CategoriesService } from './categories.service';

import { CreateCategoryDto, UpdateCategoryDto } from './dtos';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly catService: CategoriesService) {}

  @Get()
  getAll() {
    return this.catService.find();
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    const category = await this.catService.findById(id);
    if (!category) throw new NotFoundException('Category Not Found');

    return category;
  }

  @Post()
  create(@Body() body: CreateCategoryDto) {
    return this.catService.create(body);
  }

  @Patch(':id')
  async update(@Param(':id') id: number, @Body() body: UpdateCategoryDto) {
    const category = await this.catService.update(id, body);
    if (!category) throw new NotFoundException('Category Not Found');

    return category;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async delete(@Param(':id') id: number) {
    const category = await this.catService.delete(id);
    if (!category) throw new NotFoundException('Category Not Found');

    return category;
  }
}
