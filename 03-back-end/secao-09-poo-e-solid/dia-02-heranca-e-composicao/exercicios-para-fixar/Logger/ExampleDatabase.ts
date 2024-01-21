import { ConsoleLogger } from "./ConsoleLogger";
import { Database } from "./interfaces/Database";
import Logger from "./interfaces/Logger";

export class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger("ExampleDatabase")) {
    this.logger = logger;
  }

  save(key: string, value: string) {
    this.logger.log(`
    key: ${key}
    value: ${value}
    `);
  }
}
