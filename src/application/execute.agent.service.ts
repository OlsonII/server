import { exec } from "child_process";

export class ExecuteAgentService{

  public static execute(){

    const path: string = process.cwd() + '\\agent';

    return new Promise<string>((resolve) => {
      exec(
        'Agent.exe',
        { cwd: path},
        (err, data) => {
          console.log(data.split('"')[1])
          return resolve(data.split('"')[1]);
        });
    });
  }

}