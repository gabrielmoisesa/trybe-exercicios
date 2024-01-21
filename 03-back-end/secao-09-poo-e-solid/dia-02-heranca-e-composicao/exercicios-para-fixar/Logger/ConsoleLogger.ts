import Logger from "./interfaces/Logger";

export class ConsoleLogger implements Logger {
  constructor(private message: string) {
    this.log(message);
  }

  log(message: string): void {
    console.log(message);
  }
}

new ConsoleLogger("test");
