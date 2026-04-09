import { Injectable } from '@nestjs/common';

@Injectable()
export class SubmissionsService {
  findAll() {
    return { message: 'Submissions module is ready' };
  }
}
