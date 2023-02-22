import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getPlayers(): string[]{
    return ['Lebron', 'Bezael', 'Dany', 'Irving'];
  }
}
