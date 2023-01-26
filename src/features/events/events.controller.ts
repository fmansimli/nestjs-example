import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { EventsService } from './events.service';

import { CreateEventDto } from './dtos/create.dto';
import { UpdateEventDto } from './dtos/update-event.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  async getAll(@Query('title') title: string) {
    const events = await this.eventsService.find({ title });
    return { events, meta: {} };
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.eventsService.findById(id);
  }

  @Post()
  createEvent(@Body() body: CreateEventDto) {
    return this.eventsService.create(body.title, body.description);
  }

  @Patch(':id')
  async patchEvent(@Param('id') id: number, @Body() body: UpdateEventDto) {
    const result = await this.eventsService.update(id, body);
    return result;
  }
}
