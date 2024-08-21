import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello EB! ${process.env.JWT_SECRET}`;
  }
}
