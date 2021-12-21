import { Controller, Delete, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { playerModel } from 'model/player.model';
import { db } from 'db/index';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/player')
  async createPlayer() {
    const body = {
      name: 'messi',
      age: 56,
      position: 'front',
      tid: 3,
    };
    await db.player.create(body);
    return 'OK';
  }

  @Post()
  async create() {
    const body = {
      name: 'PSK',
      league: 'pakistan',
    };
    await db.team.create(body);
    return 'OK';
  }

  @Delete()
  async deleteTeam() {
    await db.team.destroy({
      where: { tid: 3 },
    });
  }
}
