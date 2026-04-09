import { Controller, Get } from '@nestjs/common';
import { ExamsService } from './exams.service';

@Controller('exams')
export class ExamsController {
  constructor(private readonly examsService: ExamsService) {}

  @Get()
  findAll() {
    return this.examsService.findAll();
  }
}
