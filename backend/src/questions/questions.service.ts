import { Injectable } from '@nestjs/common';

@Injectable()
export class QuestionsService {
  findAll() {
    return { message: 'Questions module is ready' };
  }
}
