import { Injectable } from '@nestjs/common';

@Injectable()
export class ExamsService {
  findAll() {
    return { message: 'Exams module is ready' };
  }
}
