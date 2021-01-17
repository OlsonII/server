import { Controller, Get } from '@nestjs/common';
import { exec } from 'child_process';



@Controller()
export class AppController {

  @Get()
  getHello() {
    return new Promise((resolve) => { exec(
      'Agent.exe',
      { cwd: process.cwd() + '\\agent' },
      (err, data) => {
        return resolve(data);
      });
    });
  }
}
