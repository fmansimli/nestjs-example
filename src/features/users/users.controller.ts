import { Controller, Get, Post, Param, Patch, Delete, Body } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll() {
    return this.usersService.find({});
  }

  @Get(':id')
  async getSingle(@Param(':id') id: number) {
    const user = await this.usersService.findById(id);
    if (!user) throw new NotFoundException('user not found');
    return user;
  }

  @Post()
  createUser(@Body() body: any) {
    return this.usersService.save(body);
  }

  @Patch(':id')
  async updateUSer(@Param(':id') id: number, @Body() body: any) {
    const user = await this.usersService.update(id, body);
    if (!user) throw new NotFoundException('User Not Found');

    return user;
  }

  @Delete(':id')
  async deleteUSer(@Param(':id') id: number) {
    const user = await this.usersService.remove(id);
    if (!user) throw new NotFoundException('user Not Found');

    return user;
  }
}
